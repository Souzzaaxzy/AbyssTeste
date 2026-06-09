import cron from 'node-cron';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadElections, saveElections, loadMandates, saveMandates, loadElectionConfig } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ElectionManager {
  constructor(nazu) {
    this.nazu = nazu;
  }

  async initialize() {
    cron.schedule('*/1 * * * *', () => {
      this.checkElections();
      this.checkMandates();
    });
    console.log('🏛️ ElectionManager iniciado.');
  }

  async checkElections() {
    const elections = loadElections();
    const now = Date.now();
    let changed = false;

    for (let i = elections.length - 1; i >= 0; i--) {
      const election = elections[i];
      
      if (election.status === 'candidatura' && now > election.startTime + election.duration) {
        changed = true;
        if (election.candidates.length === 0) {
          await this.nazu.sendMessage(election.groupId, { text: '❌ Eleição cancelada: nenhum candidato se inscreveu.' });
          elections.splice(i, 1);
        } else if (election.candidates.length === 1) {
          const winner = election.candidates[0];
          await this.declareWinner(election.groupId, winner);
          elections.splice(i, 1);
        } else {
          election.status = 'votacao';
          election.startTime = now;
          const config = loadElectionConfig();
          election.duration = config.votacao * 60 * 1000;
          
          const pollOptions = election.candidates.map(c => c.name);
          const msg = await this.nazu.sendMessage(election.groupId, {
            poll: {
              name: '🗳️ VOTAÇÃO PARA ALPHA 🐺',
              values: pollOptions,
              selectableCount: 1
            }
          });
          
          election.pollMsgId = msg.key.id;
          await this.nazu.sendMessage(election.groupId, { text: `🗳️ *VOTAÇÃO INICIADA!*\n\nEscolha seu candidato favorito na enquete acima.\n\n⏳ Tempo restante: ${config.votacao} minutos.` });
        }
      } else if (election.status === 'votacao' && now > election.startTime + election.duration) {
        changed = true;
        await this.nazu.sendMessage(election.groupId, { text: '🏁 Votação encerrada! O sistema está processando os votos...' });
        
        const pollId = election.pollMsgId;
        const votes = global.pollVotes ? global.pollVotes[pollId] : null;
        
        let winner = null;
        
        if (votes && Object.keys(votes).length > 0) {
          const results = {};
          // Inicializa candidatos
          election.candidates.forEach(c => { results[c.name] = 0; });
          
          // Conta votos reais
          Object.values(votes).forEach(userVotes => {
            const vArray = Array.isArray(userVotes) ? userVotes : [userVotes];
            vArray.forEach(optName => {
              if (results.hasOwnProperty(optName)) results[optName]++;
            });
          });
          
          // Encontra o nome do vencedor
          const sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);
          const winnerName = sorted[0][1] > 0 ? sorted[0][0] : null;
          
          if (winnerName) {
            winner = election.candidates.find(c => c.name === winnerName);
          }
        }
        
        // Fallback para o primeiro candidato se ninguém votou ou erro no processamento
        if (!winner) {
          winner = election.candidates[0];
          await this.nazu.sendMessage(election.groupId, { text: '⚠️ Ninguém votou ou houve um erro ao processar. O primeiro candidato foi selecionado por padrão.' });
        }
        
        await this.declareWinner(election.groupId, winner);
        elections.splice(i, 1);
        
        // Limpa votos da memória após encerrar
        if (global.pollVotes && global.pollVotes[pollId]) {
          delete global.pollVotes[pollId];
        }
      }
    }

    if (changed) saveElections(elections);
  }

  async declareWinner(groupId, winner) {
    const config = loadElectionConfig();
    const mandates = loadMandates();
    
    // Cálculo de expiração flexível (suporta m, h, d)
    const endDate = new Date();
    const mandateStr = String(config.mandato);
    const unit = mandateStr.slice(-1).toLowerCase();
    const value = parseInt(mandateStr);

    if (unit === 'm') endDate.setMinutes(endDate.getMinutes() + value);
    else if (unit === 'h') endDate.setHours(endDate.getHours() + value);
    else if (unit === 'd') endDate.setDate(endDate.getDate() + value);
    else endDate.setDate(endDate.getDate() + value); // Padrão dias se não houver unidade

    mandates.push({
      groupId,
      userId: winner.id,
      userName: winner.name,
      endDate: endDate.toISOString()
    });
    saveMandates(mandates);

    let text = `🏆 *RESULTADO DA ELEIÇÃO*\n\n`;
    text += `👑 Alpha eleito: @${winner.id.split('@')[0]} 🐺\n\n`;
    text += `🎉 Parabéns! Seu mandato dura ${config.mandato}.`;

    await this.nazu.sendMessage(groupId, { text, mentions: [winner.id] });
    
    try {
      const groupFile = path.join(__dirname, '..', '..', 'database', 'grupos', `${groupId}.json`);
      if (fs.existsSync(groupFile)) {
        const groupData = JSON.parse(fs.readFileSync(groupFile, 'utf8'));
        if (!groupData.alphas) groupData.alphas = [];
        if (!groupData.alphas.includes(winner.id)) {
          groupData.alphas.push(winner.id);
          fs.writeFileSync(groupFile, JSON.stringify(groupData, null, 2));
        }
      }
    } catch (e) {
      console.error('Erro ao promover Alpha:', e);
      await this.nazu.sendMessage(groupId, { text: '⚠️ Não consegui adicionar o vencedor à lista de Alphas automaticamente.' });
    }
  }

  async checkMandates() {
    const mandates = loadMandates();
    const now = new Date();
    let changed = false;

    for (let i = mandates.length - 1; i >= 0; i--) {
      const mandate = mandates[i];
      if (new Date(mandate.endDate) < now) {
        changed = true;
        await this.nazu.sendMessage(mandate.groupId, { 
          text: `⌛ O mandato de @${mandate.userId.split('@')[0]} terminou.\n\nO cargo de Alpha temporário foi removido automaticamente. 🐺`,
          mentions: [mandate.userId]
        });
        
        try {
          const groupFile = path.join(__dirname, '..', '..', 'database', 'grupos', `${mandate.groupId}.json`);
          if (fs.existsSync(groupFile)) {
            const groupData = JSON.parse(fs.readFileSync(groupFile, 'utf8'));
            if (groupData.alphas) {
              groupData.alphas = groupData.alphas.filter(m => m !== mandate.userId);
              fs.writeFileSync(groupFile, JSON.stringify(groupData, null, 2));
            }
          }
        } catch (e) {
          console.error('Erro ao remover Alpha:', e);
        }
        
        mandates.splice(i, 1);
      }
    }

    if (changed) saveMandates(mandates);
  }
}

export default ElectionManager;

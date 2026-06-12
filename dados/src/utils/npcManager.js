// ═══════════════════════════════════════════════════════════════
// 🤖 SISTEMA DE NPCs - 100% AUTOMÁTICO COM 100+ FRASES POR EVENTO
// ═══════════════════════════════════════════════════════════════
import { NPC_PERSONALITIES } from './npcPersonalities.js';
import * as ia from '../funcs/private/ia.js';
import fs from 'fs';

const DATABASE_DIR = './dados';
const NPC_CONFIG_FILE = `${DATABASE_DIR}/npc_config.json`;
const NPC_MEMORY_FILE = `${DATABASE_DIR}/npc_memory.json`;
const NPC_EVENTS_FILE = `${DATABASE_DIR}/npc_events.json`;

// ═══════════════════════════════════════════════════════════════
// 📊 TEMPLATES DE RESPOSTA (100+ frases para cada evento principal)
// ═══════════════════════════════════════════════════════════════
const ALL_EVENTS = {
  // ═══════════════════════════════════════════════════════════════
  // 💰 ECONOMIA E RPG
  // ═══════════════════════════════════════════════════════════════
  work_sucesso: {
    templates: [
      "{user} trabalha que é uma beleza! +{amount} 💼",
      "{user} botou pra trabalhar e faturou {amount}! 💪",
      "Trabalhador modelo! {user} ganhou {amount}! 💰",
      "{user} no batente! +{amount} no bolso! ⛏️",
      "Suando a camisa! {user} fez {amount}! 🏭",
      "Hora de botar a mão na massa! {user} ganhou {amount}! 🍞",
      "{user} é exemplo de dedicação! +{amount}! 🌟",
      "Mais um dia de trabalho bem feito! {user} +{amount}! 👍",
      "{user} não tem dó do esforço! Faturou {amount}! 💪",
      "Trabalhador nato! {user} embolsou {amount}! 🏆",
      "{user} tá on fire! Trabalhou e ganhou {amount}! 🔥",
      "O bom trabalho merece bom salário! {user} +{amount}! 💵",
      "{user} não descansa! Mais {amount} no bolso! ⚡",
      "Dedicação exemplar! {user} fez {amount}! 👏",
      "{user} trabalhando pesado! {amount} conquistado! 💪",
      "Produtivo como sempre! {user} +{amount}! 📈",
      "{user} na labuta! Faturou {amount}! 🏗️",
      "Mais uma graninha no bolso! {user} +{amount}! 💰",
      "Trabalho dignifica! {user} ganhou {amount}! 🙏",
      "Trabalhador raiz! {user} fez {amount}! 🌳",
      "Mão na massa! {user} embolsou {amount}! 👋",
      "{user} no esquema! Trabalhou e lucrou {amount}! 📊",
      "Força de vontade! {user} +{amount}! 💪",
      "{user} não para! Ganhou {amount}! ⏰",
      "Honesto e trabalhador! {user} +{amount}! ✨",
      "{user} mostrando como se faz! +{amount}! 🏅",
      "Trabalho limpo! {user} faturou {amount}! 🧹",
      "{user} é craque! Fez {amount}! ⭐",
      "Bom desempenho! {user} +{amount}! 📊",
      "{user} no lucro! Trabalhou e ganhou {amount}! 📈",
      "Trabalhador de verdade! {user} +{amount}! 🔥",
      "{user} é exemplo pra todos! {amount}! 👏",
      "Produtividade máxima! {user} +{amount}! ⚡",
      "{user} trabalhando firme! {amount}! 💪",
      "Suor e dedicação! {user} {amount}! 💦",
      "{user} não perde tempo! +{amount}! ⏱️",
      "Trabalhando que é bom! {user} +{amount}! 🔧",
      "{user} é operário nota 10! {amount}! ⭐",
      "Mão na massa! {user} {amount}! 👷",
      "{user} trabalhando feito formiguinha! {amount}! 🐜",
      "O trabalho compensa! {user} +{amount}! 💰",
      "{user} é referência! {amount}! 📈",
      "Dedicação que dá resultado! {user} +{amount}! 🌟",
      "{user} não deixa a peteca cair! +{amount}! 🏐",
      "Trabalhador nota máxima! {user} +{amount}! 📚",
      "{user} na ativa! Ganhou {amount}! 🔋",
      "Produtividade em alta! {user} +{amount}! 📊",
      "{user} trabalhando que dá gosto! +{amount}! 😊",
      "Suou muito pra conseguir! {user} +{amount}! 💪",
      "{user} é merecedor! {amount}! 🏆",
      "Trabalhador de ouro! {user} +{amount}! 🥇",
      "{user} não tem pause! +{amount}! ⏸️",
      "No lucro! {user} {amount}! 📈",
      "{user} mostrando serviço! +{amount}! 🛠️",
      "Trabalho bem feito! {user} +{amount}! ✅",
      "{user} na correria! +{amount}! 🏃",
      "Merecido! {user} +{amount}! 👏",
      "Produto do esforço! {user} +{amount}! 💪",
      "{user} não tem dó! +{amount}! 🔥",
      "Trabalho rendendo! {user} +{amount}! 📈",
      "{user} na labuta! {amount}! 💼",
      "Mais um trabalho concluído! {user} +{amount}! 🎖️",
      "{user} é fighter! +{amount}! ⚔️",
      "Trabalho hard! {user} +{amount}! 💪",
      "{user} na produção! +{amount}! 🏭",
      "Mão na massa! {user} +{amount}! 🤚",
      "{user} trabalhando pesado! +{amount}! ⛏️",
      "Esforço que vale! {user} +{amount}! 💰",
      "{user} na labuta! +{amount}! 🔨",
      "Trabalhando firme! {user} +{amount}! 💪",
      "{user} é legítimo! +{amount}! 🏅",
      "Honesto e aplicado! {user} +{amount}! ⭐",
      "{user} não descansa! +{amount}! ⏰",
      "Trabalho que não para! {user} +{amount}! 🔋",
      "{user} na ativa! +{amount}! 💪",
      "Dedicação pura! {user} +{amount}! 🌟",
      "{user} mostrando capacidade! +{amount}! 💪",
      "Trabalho nota 10! {user} +{amount}! 🔟",
      "{user} não tem limites! +{amount}! 🚀",
      "Produtividade em alta! {user} +{amount}! 📈",
      "{user} working hard! +{amount}! 💼",
      "{user} está on fire! +{amount}! 🔥",
      "Trabalhador raiz! {user} +{amount}! 🌱",
      "{user} na produção! +{amount}! 🏗️",
      "Suando que é bom! {user} +{amount}! 💦",
      "{user} trabalhando! +{amount}! 👷",
      "Mão na massa! {user} +{amount}! 🍞",
      "{user} no lucro! +{amount}! 💰",
      "Trabalho dignifica! {user} +{amount}! 🙏",
      "{user} não para! +{amount}! ⚡",
      "Força de vontade! {user} +{amount}! 💪",
      "{user} mostrando potencial! +{amount}! ✨",
      "Trabalhador nato! {user} +{amount}! 🏆",
      "{user} na labuta! +{amount}! 🛠️",
      "Produtivo! {user} +{amount}! 📊",
      "{user} working! +{amount}! 💼",
      "Suado mas valeu! {user} +{amount}! 💪",
      "Trabalhando firme! {user} +{amount}! 🔧",
      "{user} é exemplo! +{amount}! ⭐",
      "Trabalhador nota 10! {user} +{amount}! 💯"
    ],
    keywords: ['trabalhou', 'ganhou', 'trabalhar']
  },

  daily_reward: {
    templates: [
      "{user} coletou o daily de {amount}! 🎁",
      "Boa! {user} pegou {amount} do daily! 🌟",
      "{user} tá rico hoje! {amount} no bolso! 💎",
      "Daily done! {user} +{amount}! 📅",
      "{user} não esqueceu do daily! {amount}! ⏰",
      "Sorte do dia! {user} ganhou {amount}! 🍀",
      "{user} startou o dia bem! {amount}! 🌅",
      "Premio diário! {user} +{amount}! 🎉",
      "{user} foi pontual! Daily de {amount}! ⏰",
      "Todo dia tem! {user} +{amount}! 📆",
      "Recompensa diária! {user} {amount}! 🌟",
      "{user} dailyou! +{amount}! 💰",
      "Mais um daily! {user} +{amount}! 📝",
      "{user} pontual como sempre! {amount}! 👏",
      "Daily coletado! {user} +{amount}! ✅",
      "{user} é responsável! Pegou {amount}! 💎",
      "{user} no horário! {amount}! ⏰",
      "Recompensa merecida! {user} +{amount}! 🌟",
      "{user} sabe o valor! {amount}! 💪",
      "Diário como deve ser! {user} +{amount}! 📈",
      "{user} não deixa passar! {amount}! ⏰",
      "Dia começa bem! {user} +{amount}! 🌅",
      "{user} focused! Daily +{amount}! 🎯",
      "Responsável! {user} pegou {amount}! 👑",
      "{user} é exemplo! Daily {amount}! ⭐",
      "Pontualidade nota 10! {user} +{amount}! 💎",
      "{user} no tempo! {amount}! ⏰",
      "Premio do dia! {user} +{amount}! 🎁",
      "{user} sabe a hora! {amount}! ⏰",
      "Daily no bolso! {user} +{amount}! 💰",
      "{user} é pontual! {amount}! ⭐",
      "Todo dia igual! {user} +{amount}! 📅",
      "{user} não esquece! {amount}! 🧠",
      "Recompensa do dia! {user} +{amount}! 🌟",
      "{user} é consistente! {amount}! 💪",
      "Boa moral! {user} daily {amount}! ✨",
      "{user} na rotina! {amount}! 📝",
      "Premio garantido! {user} +{amount}! ✅",
      "Consistente! {user} +{amount}! 📈",
      "{user} não perde chance! {amount}! ⏰",
      "Diário certinho! {user} +{amount}! 📆",
      "No horário! {user} +{amount}! ⏰",
      "Recompensa diária! {user} +{amount}! 🎉",
      "Disciplina! {user} +{amount}! 📊",
      "{user} sabe a rotina! {amount}! ⏰",
      "Premio do dia! {user} +{amount}! 💎",
      "{user} is on time! {amount}! ⏰",
      "Routine! {user} daily {amount}! 📅",
      "{user} não falha! {amount}! 💪",
      "Recompensa merecida! {user} +{amount}! 🌟",
      "{user} é exemplo! {amount}! 👑",
      "Pontualidade maxima! {user} +{amount}! ⭐",
      "Todo dia igual! {user} +{amount}! 📆",
      "Consistente como sempre! {user} +{amount}! 💪",
      "{user} sabe a hora! {amount}! ⏰",
      "Premio do dia! {user} +{amount}! 🎁",
      "Disciplina de ferro! {user} +{amount}! ⚔️",
      "{user} é nota 10! {amount}! 💯",
      "No tempo certo! {user} +{amount}! ⏰",
      "Recompensa garantida! {user} +{amount}! ✅",
      "{user} não deixa passar! {amount}! ⏰",
      "Diário certinho! {user} +{amount}! 📝",
      "{user} is punctual! {amount}! ⭐",
      "Premio merecido! {user} +{amount}! 🏆",
      "Consistente demais! {user} +{amount}! 💪",
      "{user} no horário! {amount}! ⏰",
      "Todo dia gains! {user} +{amount}! 📈",
      "{user} responsável! {amount}! 👑",
      "Disciplina pura! {user} +{amount}! 💪",
      "{user} sabe a rotina! {amount}! 📅",
      "Premio do dia! {user} +{amount}! 🎉",
      "{user} pontual! {amount}! ⭐",
      "{user} não falha! {amount}! ✅",
      "Recompensa diária! {user} +{amount}! 🌟",
      "{user} no time! {amount}! ⏰",
      "Consistente! {user} +{amount}! 📊",
      "{user} sabe a hora! {amount}! ⏰",
      "Premio garantido! {user} +{amount}! 💎",
      "Disciplina nota 10! {user} +{amount}! 💯",
      "{user} responsible! {amount}! 👑",
      "Pontualidade maxima! {user} +{amount}! ⭐",
      "{user} não esquece! {amount}! 🧠",
      "Todo dia igual! {user} +{amount}! 📆",
      "{user} is consistent! {amount}! 💪",
      "Recompensa merecida! {user} +{amount}! 🏆",
      "Disciplina de ouro! {user} +{amount}! 🥇",
      "{user} é exemplo! {amount}! 👑",
      "Pontualidade nota 10! {user} +{amount}! 💎",
      "{user} no tempo! {amount}! ⏰",
      "Recompensa diária! {user} +{amount}! 🌟",
      "{user} responsible! {amount}! 👑",
      "Consistente demais! {user} +{amount}! 💪",
      "{user} sabe a hora! {amount}! ⏰",
      "Premio do dia! {user} +{amount}! 🎁",
      "Disciplina maxima! {user} +{amount}! ⚡",
      "{user} é example! {amount}! ⭐"
    ],
    keywords: ['daily', 'diário', 'recompensa diária']
  },

  level_up: {
    templates: [
      "{user} subiu de level! Agora é level {level} 🎉",
      "{user} tá ficandão forte! Level {level}! 💪",
      "Power up! {user} chegou no level {level}! ⚡",
      "{user} level up! {level}! 🔥",
      "Subiu mais um! {user} level {level}! ⬆️",
      "{user} tá evolutionando! {level}! ✨",
      "Mais força! {user} level {level}! 💪",
      "{user} no próximo nível! {level}! 🎯",
      "Up up! {user} é level {level}! 📈",
      "{user} tá ficando perigoso! {level}! ⚠️",
      "Subiu de verdade! {user} level {level}! 🚀",
      "{user} tá no topo! Level {level}! 👑",
      "Evoluiu! {user} level {level}! 🦋",
      "{user} stronger! {level}! 💪",
      "Mais poder! {user} level {level}! ⚔️",
      "Upado! {user} é level {level}! ⭐",
      "Subiu mais! {user} level {level}! 📊",
      "{user} tá on fire! {level}! 🔥",
      "Level up! {user} {level}! 🎮",
      "{user} tá fortão! {level}! 💪",
      "Evoluindo sempre! {user} level {level}! 📈",
      "{user} não para! {level}! ⬆️",
      "Mais um level! {user} {level}! 🏆",
      "{user} tá poderoso! {level}! ⚡",
      "Subiu de level! {user} {level}! 🎉",
      "Evoluindo! {user} level {level}! 🐣",
      "Level up! {user} tá demais! {level}! 💪",
      "{user} tá stronger! {level}! 🏅",
      "Mais força! {user} level {level}! 💪",
      "{user} tá no game! {level}! 🎮",
      "Subiu! {user} level {level}! ⬆️",
      "{user} é power! {level}! ⚡",
      "Evoluiu mesmo! {user} level {level}! 📈",
      "{user} tá legend! {level}! 🏆",
      "Upou! {user} level {level}! 🔥",
      "{user} tá fortão! {level}! 💪",
      "Mais um up! {user} {level}! 📊",
      "{user} tá evoluindo! {level}! ✨",
      "Level max! {user} {level}! 🎯",
      "{user} stronger ever! {level}! 💪",
      "Subiu pra valer! {user} level {level}! 🚀",
      "{user} é top! {level}! 👑",
      "Evoluindo rápido! {user} {level}! ⚡",
      "{user} no próximo! {level}! 📈",
      "Upado demais! {user} level {level}! 🔥",
      "{user} tá lendário! {level}! 🏆",
      "Mais pontos! {user} {level}! 💯",
      "{user} tá on rank! {level}! 📊",
      "Subiu de verdade! {user} {level}! ⬆️",
      "{user} é elite! {level}! ⭐",
      "Evoluindo sempre! {user} level {level}! 📈",
      "{user} tá unstoppable! {level}! ⚡",
      "Level up! {user} tá demais! {level}! 💪",
      "{user} stronger now! {level}! 🏅",
      "Mais poder! {user} {level}! ⚔️",
      "{user} tá no topo! {level}! 👑",
      "Upou! {user} level {level}! 🎉",
      "{user} tá evoluindo! {level}! 🦋",
      "Evoluiu! {user} level {level}! ✨",
      "{user} tá poderoso! {level}! 💪",
      "Subiu mais! {user} {level}! 📈",
      "{user} é power! {level}! ⚡",
      "Level up! {user} tá on fire! {level}! 🔥",
      "{user} tá legend! {level}! 🏆",
      "Mais um up! {user} level {level}! ⬆️",
      "{user} tá stronger! {level}! 💪",
      "Evoluindo! {user} {level}! 📊",
      "{user} no rank! {level}! 🎮",
      "Subiu! {user} level {level}! 📈",
      "{user} tá elite! {level}! ⭐",
      "Mais força! {user} {level}! 💪",
      "{user} tá unstoppable! {level}! ⚡",
      "Level up! {user} é top! {level}! 👑",
      "{user} evoluiu! {level}! 🦋",
      "Subiu de verdade! {user} level {level}! 🚀",
      "{user} tá no game! {level}! 🎯",
      "Mais pontos! {user} {level}! 💯",
      "{user} tá on rank! {level}! 📊",
      "Upado! {user} level {level}! 🔥",
      "{user} tá lendário! {level}! 🏆",
      "Evoluindo sempre! {user} {level}! ✨",
      "{user} tá stronger! {level}! 💪",
      "Level max! {user} level {level}! ⚡",
      "Mais poder! {user} {level}! ⚔️",
      "{user} tá no topo! {level}! 👑",
      "Subiu! {user} {level}! ⬆️",
      "{user} é elite! {level}! ⭐",
      "Evoluiu! {user} level {level}! 📈",
      "{user} tá unstoppable! {level}! 🔥",
      "Level up! {user} tá on fire! {level}! 💪",
      "{user} stronger now! {level}! 🏅",
      "Mais um up! {user} {level}! 📊",
      "{user} tá evoluindo! {level}! 🦋"
    ],
    keywords: ['subiu', 'level up', 'subiu de nível']
  },

  pet_adotado: {
    templates: [
      "{user} adotou um pet! 🐾",
      "Novo amigo! {user} tem {pet} agora! 🐱",
      "{user} é o novo tutor de {pet}! 🥰",
      "{user} gained a companion! {pet}! 🐕",
      "Adoção confirmada! {user} + {pet}! 🐾",
      "{user} tem um novo buddy! {pet}! 🐶",
      "{pet} encontrou um lar! {user}! 🏠",
      "{user} resgatou {pet}! ❤️",
      "Pet novo! {user} é dono de {pet}! 🐾",
      "{user} adoptou! {pet}! 🐱",
      "Amigo fiel! {user} {pet}! 🐕",
      "{user} adoptou {pet}! 💕",
      "Novo membro da família! {pet} de {user}! 🏡",
      "{user} é pet parent agora! {pet}! 🐾",
      "{pet} tem novo dono! {user}! 🐱",
      "{user} adoptou {pet}! 🐾",
      "Pet na área! {user} + {pet}! 🐕",
      "{user} gained {pet}! 🐾",
      "Companheiro novo! {user} {pet}! 🐱",
      "{user} tem um buddy! {pet}! 🐶",
      "Adoção feita! {user} {pet}! ❤️",
      "{pet} foi adotado por {user}! 🏠",
      "{user} é responsável agora! {pet}! 🐾",
      "Novo pet! {user} adotou {pet}! 🐱",
      "{user} tem nova companhia! {pet}! 🐕",
      "Pet conquistado! {user} {pet}! 🐾",
      "{user} adoptou um friend! {pet}! 🐶",
      "Amizade começou! {user} + {pet}! 🐱",
      "{user} é tutor de {pet}! 🥰",
      "Adoção confirmada! {user} {pet}! 🐾",
      "{pet} encontrou um dono! {user}! ❤️",
      "{user} resgatou um friend! {pet}! 🐕",
      "Pet novo na área! {user} {pet}! 🐱",
      "{user} gained a buddy! {pet}! 🐶",
      "Companheiro fiel! {user} {pet}! 🐾",
      "{user} adoptou! {pet}! 🐱",
      "Novo amigo! {user} + {pet}! 🐕",
      "{pet} tem novo lar! {user}! 🏠",
      "{user} é pet parent! {pet}! 🐾",
      "Adoção realizada! {user} {pet}! ❤️",
      "{user} tem um pet! {pet}! 🐱",
      "Pet encontrado! {user} {pet}! 🐾",
      "{user} adoptou {pet}! 🐕",
      "Novo companion! {user} {pet}! 🐶",
      "{user} gained a friend! {pet}! 🐱",
      "Amizade pra vida! {user} + {pet}! 🐾",
      "{pet} foi resgatado! {user}! 🏡",
      "{user} é responsável! {pet}! 🐾",
      "Pet novo! {user} + {pet}! 🐱",
      "Adoção confirmada! {user} {pet}! 🐕",
      "{user} tem novo buddy! {pet}! 🐶",
      "{pet} encontrou um dono! {user}! ❤️",
      "{user} resgatou {pet}! 🐾",
      "Novo membro! {user} {pet}! 🐱",
      "{user} adotou um pet! {pet}! 🏠",
      "Amigo fiel! {user} + {pet}! 🐕",
      "{user} gained companion! {pet}! 🐾",
      "Pet na família! {user} {pet}! 🐱",
      "{user} é tutor! {pet}! 🥰",
      "Adoção feita! {user} {pet}! 🐾",
      "{pet} tem novo owner! {user}! 🐶",
      "{user} adoptou {pet}! 🐕",
      "Companheiro novo! {user} + {pet}! 🐱",
      "{user} tem um friend! {pet}! 🐾",
      "Pet resgatado! {user} {pet}! 🏡",
      "{user} é responsável! {pet}! 🐾",
      "Novo buddy! {user} {pet}! 🐶",
      "{user} gained a pet! {pet}! 🐱",
      "Adoção confirmada! {user} + {pet}! 🐕",
      "{user} tem um companion! {pet}! 🐾",
      "{pet} encontrou lar! {user}! 🏠",
      "{user} resgatou um pet! {pet}! ❤️",
      "Pet novo! {user} {pet}! 🐱",
      "{user} adotou um buddy! {pet}! 🐶",
      "Amigo fiel! {user} + {pet}! 🐾",
      "{user} gained a friend! {pet}! 🐕",
      "Pet na área! {user} {pet}! 🐱",
      "{user} é pet owner! {pet}! 🏡",
      "Adoção feita! {user} {pet}! 🐾",
      "{pet} tem novo dono! {user}! ❤️",
      "{user} adoptou! {pet}! 🐕",
      "Novo companion! {user} + {pet}! 🐶",
      "{user} tem um pet! {pet}! 🐾",
      "Pet resgatado! {user} {pet}! 🏠",
      "{user} gained a buddy! {pet}! 🐱",
      "Adoção confirmada! {user} {pet}! 🐕",
      "Amigo fiel! {user} + {pet}! 🐾",
      "Pet novo! {user} {pet}! 🐱",
      "{user} gained companion! {pet}! 🐕",
      "Pet na família! {user} {pet}! 🐾",
      "{user} é tutor! {pet}! 🥰",
      "Adoção feita! {user} {pet}! 🐱",
      "Companheiro novo! {user} + {pet}! 🐶"
    ],
    keywords: ['adotou', 'pet', 'companheiro']
  },

  dungeon_vitoria: {
    templates: [
      "Incrível! {user} venceu {dungeon}! 🏆",
      "Conquistador! {user} dominou {dungeon}! 💪",
      "Vencedor! {user} limpou {dungeon}! 🎉",
      "{user} cleared {dungeon}! 🏆",
      "Boss defeated! {user} {dungeon}! ⚔️",
      "{user} dominou a dungeon! {dungeon}! 🏅",
      "Herói! {user} venceu {dungeon}! 🗡️",
      "{user} é lenda! Conquistou {dungeon}! 🏆",
      "Dungeon limpa! {user} {dungeon}! ✅",
      "{user} no topo! Venceu {dungeon}! 👑",
      "Campeão! {user} dominou {dungeon}! 💪",
      "{user} cleared the dungeon! {dungeon}! 🎯",
      "Venceu o boss! {user} {dungeon}! 🐉",
      "{user} é unstoppable! {dungeon}! ⚡",
      "Dungeon conquistada! {user} {dungeon}! 🏆",
      "{user} é boss! Venceu {dungeon}! 👑",
      "Invencível! {user} {dungeon}! 🏆",
      "Herói da dungeon! {user} {dungeon}! 🗡️",
      "{user} é lenda! {dungeon}! 🏆",
      "Venceu o impossível! {user} {dungeon}! ⚡",
      "{user} no top! {dungeon}! 🏅",
      "Conquistador máximo! {user} {dungeon}! 🏆",
      "{user} cleared it! {dungeon}! ✅",
      "Boss down! {user} {dungeon}! 💀",
      "{user} é lenda viva! {dungeon}! 🏆",
      "Dungeon destroyed! {user} {dungeon}! 💥",
      "{user} é champion! {dungeon}! 🏆",
      "Venceu todos! {user} {dungeon}! 👑",
      "Herói máximo! {user} {dungeon}! 🗡️",
      "{user} é invencível! {dungeon}! ⚡",
      "Dungeon cleared! {user} {dungeon}! 🏆",
      "{user} no top da dungeon! {dungeon}! 🏅",
      "Vencedor absoluto! {user} {dungeon}! 🏆",
      "{user} é lenda! {dungeon}! 💪",
      "Conquistou o impossível! {user} {dungeon}! 🏆",
      "{user} cleared dungeon! {dungeon}! ✅",
      "Boss destroyed! {user} {dungeon}! 💀",
      "{user} é top player! {dungeon}! 🏆",
      "Venceu a dungeon! {user} {dungeon}! 🎉",
      "{user} é unstoppable! {dungeon}! ⚡",
      "Herói da dungeon! {user} {dungeon}! 🗡️",
      "{user} no topo máximo! {dungeon}! 👑",
      "Dungeon conquistada! {user} {dungeon}! 🏆",
      "{user} é lenda viva! {dungeon}! 💪",
      "Venceu o boss! {user} {dungeon}! 🐉",
      "{user} cleared it all! {dungeon}! 🎯",
      "Campeão máximo! {user} {dungeon}! 🏆",
      "{user} é champion! {dungeon}! 👑",
      "Venceu todos! {user} {dungeon}! ⚡",
      "Herói invencível! {user} {dungeon}! 🏆",
      "{user} no topo! {dungeon}! 🏅",
      "Conquistador! {user} {dungeon}! 💪",
      "{user} cleared dungeon! {dungeon}! 🏆",
      "Boss down! {user} {dungeon}! 💀",
      "{user} é lenda! {dungeon}! 🗡️",
      "Venceu o impossível! {user} {dungeon}! ⚡",
      "{user} no top máximo! {dungeon}! 🏆",
      "Dungeon destroyed! {user} {dungeon}! 💥",
      "{user} é champion! {dungeon}! 🏆",
      "Venceu a dungeon! {user} {dungeon}! 🎉",
      "{user} é unstoppable! {dungeon}! ⚡",
      "Herói da dungeon! {user} {dungeon}! 🗡️",
      "{user} no topo! {dungeon}! 👑",
      "Conquistou o boss! {user} {dungeon}! 🐉",
      "{user} cleared it! {dungeon}! ✅",
      "Campeão! {user} {dungeon}! 🏆",
      "{user} é lenda viva! {dungeon}! 💪",
      "Venceu todos! {user} {dungeon}! 🏅",
      "Herói máximo! {user} {dungeon}! 🏆",
      "{user} é invencível! {dungeon}! ⚡",
      "Dungeon cleared! {user} {dungeon}! 🏆",
      "{user} no top da dungeon! {dungeon}! 💪",
      "Vencedor absoluto! {user} {dungeon}! 🏆",
      "{user} é lenda! {dungeon}! 👑",
      "Conquistou o impossível! {user} {dungeon}! 🏆",
      "{user} cleared dungeon! {dungeon}! ✅",
      "Boss destroyed! {user} {dungeon}! 💀",
      "{user} é top player! {dungeon}! 🏆",
      "Venceu a dungeon! {user} {dungeon}! 🎉",
      "{user} é unstoppable! {dungeon}! ⚡",
      "Herói da dungeon! {user} {dungeon}! 🗡️",
      "{user} no topo máximo! {dungeon}! 👑",
      "Dungeon conquistada! {user} {dungeon}! 🏆",
      "{user} é lenda viva! {dungeon}! 💪",
      "Venceu o boss! {user} {dungeon}! 🐉",
      "{user} cleared it all! {dungeon}! 🎯",
      "Campeão máximo! {user} {dungeon}! 🏆",
      "{user} é champion! {dungeon}! 👑",
      "Venceu todos! {user} {dungeon}! ⚡",
      "Herói invencível! {user} {dungeon}! 🏆"
    ],
    keywords: ['dungeon', 'venceu', 'conquistou']
  },

  slots_jackpot: {
    templates: [
      "JACKPOT! {user} inúmerou {amount}! 🎰🎰🎰",
      "MEU DEUS! {user} conseguiu {amount}! 💎",
      "INSANO! {user} ganhou {amount} no jackpot! 🎰💰",
      "{user} hit the JACKPOT! {amount}! 🎰🎰🎰",
      "LIT! {user} algunstra {amount}! 🔥🔥🔥",
      "JACKPOT! {user} está bilionário! {amount}! 💰",
      "DEU JACKPOT! {user} {amount}! 🎰💎",
      "{user} é sortudo demais! {amount}! 🎰",
      "JACKPOT SENTOU! {user} {amount}! 🔥",
      "MEGA JACKPOT! {user} {amount}! 💰🎰",
      "{user} rich now! {amount}! 💎💎💎",
      "JACKPOT! {user} tá milionário! {amount}! 🏆",
      "DEU TUDO! {user} {amount}! 🎰🔥",
      "{user} hit big! {amount}! 💰",
      "JACKPOT! {user} quebrou o cassino! {amount}! 💎",
      "SENTOU! {user} algunstra {amount}! 🎰🎰",
      "{user} mega winner! {amount}! 🏆",
      "JACKPOT LENDÁRIO! {user} {amount}! 💰",
      "DEU JACKPOT! {user} {amount}! 🎰💎",
      "{user} é o novo milionário! {amount}! 💎",
      "MEGA PREMIO! {user} {amount}! 🎰🔥",
      "JACKPOT! {user} está rico! {amount}! 💰",
      "DEU TUDO! {user} algunstra {amount}! 🎰",
      "{user} WINNER! {amount}! 💎💎",
      "JACKPOT! {user} quebrou tudo! {amount}! 🔥",
      "SORTE GRANDE! {user} {amount}! 🎰💰",
      "{user} hit the big one! {amount}! 🏆",
      "JACKPOT INSANO! {user} {amount}! 💎",
      "DEU JACKPOT! {user} está rico! {amount}! 🎰",
      "{user} MEGA WINNER! {amount}! 💰",
      "JACKPOT! {user} algunstra muito! {amount}! 🎰",
      "SENTOU O CASSINO! {user} {amount}! 💎",
      "{user} é o bicho! {amount}! 🎰🔥",
      "MEGA JACKPOT! {user} {amount}! 💰💰",
      "DEU TUDO! {user} ganhou {amount}! 🎰",
      "{user} rich big! {amount}! 💎",
      "JACKPOT! {user} está milionário! {amount}! 🏆",
      "SORTE DEMAIS! {user} {amount}! 🎰💎",
      "{user} hit jackpot! {amount}! 🔥🔥",
      "JACKPOT LENDÁRIO! {user} {amount}! 💰",
      "DEU JACKPOT! {user} algunstra! {amount}! 🎰",
      "{user} é o novo rico! {amount}! 💎",
      "MEGA PREMIO! {user} {amount}! 🎰🔥",
      "JACKPOT! {user} tá bilionário! {amount}! 💰",
      "SENTOU! {user} algunstra muito! {amount}! 🎰",
      "{user} MEGA WINNER! {amount}! 💎💎",
      "JACKPOT! {user} quebrou o banco! {amount}! 🔥",
      "DEU TUDO! {user} {amount}! 🎰💰",
      "{user} hit big! {amount}! 🏆",
      "JACKPOT INSANO! {user} {amount}! 💎",
      "DEU JACKPOT! {user} está rico! {amount}! 🎰",
      "{user} WINNER! {amount}! 💰",
      "JACKPOT! {user} algunstra {amount}! 🎰🎰",
      "SORTE GRANDE! {user} {amount}! 💎🔥",
      "{user} é sortudo demais! {amount}! 🎰",
      "MEGA JACKPOT! {user} {amount}! 💰💎",
      "DEU TUDO! {user} ganhou {amount}! 🎰",
      "{user} rich now! {amount}! 💎💎",
      "JACKPOT! {user} quebrou tudo! {amount}! 🔥",
      "SENTOU O CASSINO! {user} {amount}! 💰",
      "{user} MEGA WINNER! {amount}! 🏆",
      "JACKPOT LENDÁRIO! {user} {amount}! 💎",
      "DEU JACKPOT! {user} algunstra! {amount}! 🎰",
      "{user} é o novo milionário! {amount}! 💰",
      "MEGA PREMIO! {user} {amount}! 🎰🔥",
      "JACKPOT! {user} está rico! {amount}! 💎",
      "SORTE DEMAIS! {user} {amount}! 🎰💰",
      "{user} hit jackpot! {amount}! 🔥🔥",
      "JACKPOT INSANO! {user} {amount}! 🏆",
      "DEU JACKPOT! {user} tá bilionário! {amount}! 🎰",
      "{user} WINNER! {amount}! 💎",
      "JACKPOT! {user} algunstra muito! {amount}! 🎰",
      "SENTOU! {user} quebrou o banco! {amount}! 💰",
      "{user} é o bicho! {amount}! 🎰🔥",
      "MEGA JACKPOT! {user} {amount}! 💎💰",
      "DEU TUDO! {user} ganhou {amount}! 🎰",
      "{user} rich big! {amount}! 🏆",
      "JACKPOT! {user} está milionário! {amount}! 💎",
      "SORTE GRANDE! {user} {amount}! 🎰🔥",
      "{user} hit the big one! {amount}! 💰",
      "JACKPOT LENDÁRIO! {user} {amount}! 🎰",
      "DEU JACKPOT! {user} está rico! {amount}! 💎",
      "{user} MEGA WINNER! {amount}! 🏆",
      "JACKPOT! {user} tênisou! {amount}! 🔥",
      "SENTOU O CASSINO! {user} {amount}! 💰",
      "{user} hit jackpot! {amount}! 🎰",
      "JACKPOT INSANO! {user} {amount}! 💎",
      "DEU TUDO! {user} algunstra! {amount}! 🏆",
      "{user} é o novo rico! {amount}! 🎰",
      "MEGA JACKPOT! {user} {amount}! 💰💎",
      "JACKPOT! {user} tá bilionário! {amount}! 🔥",
      "SORTE DEMAIS! {user} {amount}! 🎰",
      "{user} WINNER! {amount}! 💎💎"
    ],
    keywords: ['jackpot', 'slots', 'premio']
  },

  // DEFAULT - para eventos não mapeados
  default: {
    templates: [
      "Hm... {user} fez algo 🌙",
      "Interessante... {user} 👀",
      "Isso é novo... {event} 👀",
      "{user} tá ativo! 💬",
      "Algo aconteceu... 👀",
      "{user} não para! 💪",
      "Interessante! 🌙",
      "{user} está na vibe! ✨",
      "Algo de interessante... 👀",
      "{user} tá movimentando! 📈",
      "Isso é novo... 🌟",
      "{user} fez acontecer! 💪",
      "Algo rolou! 👀",
      "{user} está on fire! 🔥",
      "Interessante... {user} 👀",
      "Hm... isso é diferente! 🌙",
      "{user} tá causando! 😏",
      "Algo está mudando... 👀",
      "{user} não para! 💪",
      "Isso é unik... ✨",
      "{user} está no comando! 👑",
      "Interessante perkembangan... 🌟",
      "{user} tá aktif! 👀",
      "Algo nouveau! 🌙",
      "{user} está fazendo algo! 💪",
      "Isso é diferente... 👀",
      "{user} tá na correria! 🔥",
      "Algo está rolando! 🌟",
      "{user} não se contiene! 💪",
      "Interessant... 👀",
      "{user} tá agindo! 💪",
      "Isso é novo pra mim! 🌙",
      "{user} está fazendo waves! 📈",
      "Algo está mudando... 👀",
      "{user} tá no movimento! ✨",
      "Interessante... {user} 👀",
      "{user} não descansa! 💪",
      "Algo unique... 🌟",
      "{user} está agindo! 👀",
      "Isso é novo... 🌙",
      "{user} tá causando impacto! 💪",
      "Algo está acontecendo... 👀",
      "{user} está no game! 🎮",
      "Interessante... 🌟",
      "{user} tá movimentando! 👀",
      "Algo novo... 📈",
      "{user} está fazendo algo! ✨",
      "Isso é único... ✨",
      "{user} tá causando! 💪",
      "Algo está rolando... 👀",
      "{user} está ativo! 🌙",
      "Interessante... {user} 📈",
      "{user} tá no comando! 💪",
      "Algo aconteceu! 👀",
      "{user} não se contém! ✨",
      "Isso é interessante... 🌟",
      "{user} tá causando! 👀",
      "Algo unique! 🌙",
      "{user} está fazendo waves! 📈",
      "Interessante... 💪",
      "{user} tá no fluxo! 👀",
      "Algo está mudando... 🌟",
      "{user} não para! ✨",
      "Isso é novo pra todos! 👀",
      "{user} tá aktif! 🌙",
      "Algo aconteceu! 💪",
      "{user} está causando impacto! 📈",
      "Interessante muito! 🌟",
      "{user} tá making moves! 💪",
      "Algo está rolando... 👀",
      "{user} está no comando! ✨",
      "Isso é diferente... 🌙",
      "{user} tá agindo! 💪",
      "Interessante... {user} 👀",
      "{user} não descansa! 🌟",
      "Algo unique... 📈",
      "{user} está ativo! 💪",
      "Isso é interessante... 👀",
      "{user} tá causando! ✨",
      "Algo está acontecendo... 🌙",
      "{user} está no game! 💪",
      "Interessante... 🌟",
      "{user} tá movimentando! 👀",
      "Algo novo... 📈",
      "{user} está fazendo algo! ✨",
      "Hm... isso é unik! 🌙",
      "Interessante muito! 👀",
      "{user} tá fazendo algo! 💪",
      "Algo está rolando... 🌟",
      "{user} não para! ✨",
      "Isso é diferente... 👀"
    ],
    keywords: []
  }
};

// ═══════════════════════════════════════════════════════════════
// 📊 CONFIGURAÇÕES
// ═══════════════════════════════════════════════════════════════
const DEFAULT_CONFIG = {
  enabled: false,
  cooldown: 8000,
  jornalEnabled: false,
  jornalHour: 20,
  jornalMinute: 0,
  activeNPCs: ['kaiser'],
  autoRespond: true,
  responseChance: 0.5,
  useAI: true,
  logAllEvents: true,
  respondToAll: true,
  maxEventsPerMinute: 10,
  personalities: NPC_PERSONALITIES
};

// ═══════════════════════════════════════════════════════════════
// 💾 FUNÇÕES DE PERSISTÊNCIA
// ═══════════════════════════════════════════════════════════════
const loadConfig = () => {
  try {
    if (fs.existsSync(NPC_CONFIG_FILE)) {
      const data = fs.readFileSync(NPC_CONFIG_FILE, 'utf-8');
      return { ...DEFAULT_CONFIG, ...JSON.parse(data) };
    }
  } catch (e) { console.error('[NPC] Erro ao carregar config:', e.message); }
  return { ...DEFAULT_CONFIG };
};

const saveConfig = (config) => {
  try {
    fs.writeFileSync(NPC_CONFIG_FILE, JSON.stringify(config, null, 2));
  } catch (e) { console.error('[NPC] Erro ao salvar config:', e.message); }
};

const loadMemory = () => {
  try {
    if (fs.existsSync(NPC_MEMORY_FILE)) {
      return JSON.parse(fs.readFileSync(NPC_MEMORY_FILE, 'utf-8'));
    }
  } catch (e) { }
  return { recentEvents: [], eventCounts: {}, recentNPCMessages: [] };
};

const saveMemory = (memory) => {
  try {
    fs.writeFileSync(NPC_MEMORY_FILE, JSON.stringify(memory, null, 2));
  } catch (e) { console.error('[NPC] Erro ao salvar memória:', e.message); }
};

const loadEvents = () => {
  try {
    if (fs.existsSync(NPC_EVENTS_FILE)) {
      return JSON.parse(fs.readFileSync(NPC_EVENTS_FILE, 'utf-8'));
    }
  } catch (e) { }
  return { allEvents: [] };
};

const saveEvents = (events) => {
  try {
    fs.writeFileSync(NPC_EVENTS_FILE, JSON.stringify(events, null, 2));
  } catch (e) { console.error('[NPC] Erro ao salvar eventos:', e.message); }
};

// ═══════════════════════════════════════════════════════════════
// 🎭 GERENCIADOR DE NPCs
// ═══════════════════════════════════════════════════════════════
class NPCManager {
  constructor() {
    this.config = loadConfig();
    this.memory = loadMemory();
    this.events = loadEvents();
    this.cooldowns = new Map();
    this.eventCounts = {};
    this.lastMinuteEvents = [];
    
    Object.keys(ALL_EVENTS).forEach(id => {
      this.cooldowns.set(id, 0);
    });
    
    if (this.config.jornalEnabled) {
      this.initJornal();
    }
  }

  isEnabled() { return this.config.enabled; }
  isAutoRespond() { return this.config.autoRespond !== false; }

  canSpeak(npcId = 'kaiser') {
    const now = Date.now();
    const lastTime = this.cooldowns.get(npcId) || 0;
    return (now - lastTime) >= this.config.cooldown;
  }

  markSpoken(npcId = 'kaiser') {
    this.cooldowns.set(npcId, Date.now());
  }

  canTrigger() {
    const now = Date.now();
    this.lastMinuteEvents = this.lastMinuteEvents.filter(t => now - t < 60000);
    
    if (this.lastMinuteEvents.length >= this.config.maxEventsPerMinute) {
      return false;
    }
    
    this.lastMinuteEvents.push(now);
    return true;
  }

  async trigger(nazu, from, eventType, userId, userName, eventData = {}) {
    if (!this.isEnabled()) return null;
    if (!this.canTrigger()) return null;
    
    if (Math.random() > this.config.responseChance) return null;
    
    const npcId = 'kaiser';
    if (!this.canSpeak(npcId)) return null;

    const replacements = {
      user: userName || userId.split('@')[0],
      target: eventData.targetName || 'alguém',
      amount: eventData.amount ? eventData.amount.toLocaleString() : '0',
      level: eventData.level || '?',
      pet: eventData.petName || 'pet',
      dungeon: eventData.dungeonName || 'dungeon',
      conquest: eventData.conquestName || 'conquista',
      result: eventData.result || '?',
      bet: eventData.bet || '?',
      event: eventType,
      item: eventData.item || 'item',
      streak: eventData.streak || '?',
      newnick: eventData.newnick || '?'
    };

    let response = this.generateResponse(eventType, replacements);

    if (response) {
      this.markSpoken(npcId);
      
      this.memory.recentNPCMessages = this.memory.recentNPCMessages || [];
      this.memory.recentNPCMessages.push({ type: eventType, userId, time: Date.now() });
      if (this.memory.recentNPCMessages.length > 50) {
        this.memory.recentNPCMessages = this.memory.recentNPCMessages.slice(-50);
      }
      
      this.memory.recentEvents = this.memory.recentEvents || [];
      this.memory.recentEvents.push({ type: eventType, userId, userName, description: response, time: Date.now(), data: eventData });
      if (this.memory.recentEvents.length > 100) {
        this.memory.recentEvents = this.memory.recentEvents.slice(-100);
      }
      
      saveMemory(this.memory);
      
      if (this.config.logAllEvents) {
        this.events.allEvents = this.events.allEvents || [];
        this.events.allEvents.push({ type: eventType, userId, userName, time: Date.now() });
        if (this.events.allEvents.length > 500) {
          this.events.allEvents = this.events.allEvents.slice(-500);
        }
        saveEvents(this.events);
      }

      try {
        await nazu.sendMessage(from, { text: response });
        console.log(`[NPC] ${npcId}: ${response.substring(0, 50)}...`);
        return response;
      } catch (e) {
        console.error('[NPC] Erro ao enviar:', e.message);
      }
    }

    return null;
  }

  async triggerFromSystem(nazu, from, eventType, userId, description, metadata = {}) {
    const userName = metadata.userName || userId.split('@')[0];
    return await this.trigger(nazu, from, eventType, userId, userName, metadata);
  }

  recordEvent(type, userId, description, metadata = {}) {
    this.memory.recentEvents = this.memory.recentEvents || [];
    this.memory.recentEvents.push({ type, userId, description, time: Date.now(), data: metadata });
    if (this.memory.recentEvents.length > 100) {
      this.memory.recentEvents = this.memory.recentEvents.slice(-100);
    }
    saveMemory(this.memory);
    return { type, userId, description };
  }

  generateResponse(eventType, replacements) {
    let eventConfig = ALL_EVENTS[eventType];
    
    if (!eventConfig) {
      const eventTypeLower = eventType.toLowerCase();
      
      for (const [key, config] of Object.entries(ALL_EVENTS)) {
        if (config.keywords && config.keywords.some(k => eventTypeLower.includes(k))) {
          eventConfig = config;
          eventType = key;
          break;
        }
      }
      
      if (!eventConfig) {
        eventConfig = ALL_EVENTS.default;
      }
    }
    
    const templates = eventConfig.templates;
    let template = templates[Math.floor(Math.random() * templates.length)];
    
    let response = template;
    for (const [key, value] of Object.entries(replacements)) {
      response = response.replace(new RegExp(`{${key}}`, 'gi'), value);
    }
    
    return response;
  }

  detectEvent(text, userId, userName) {
    const textLower = text.toLowerCase();
    
    const eventMappings = {
      'subiu de level': 'level_up',
      'level up': 'level_up',
      'subiu para o level': 'level_up',
      'ganhou': 'work_sucesso',
      'trabalhou': 'work_sucesso',
      'daily': 'daily_reward',
      'diário': 'daily_reward',
      'venceu': 'duelo_vitoria',
      'perdeu': 'duelo_derrota',
      'jackpot': 'slots_jackpot'
    };
    
    for (const [keyword, eventType] of Object.entries(eventMappings)) {
      if (textLower.includes(keyword)) {
        return eventType;
      }
    }
    
    return null;
  }

  initJornal() {
    const scheduleJornal = () => {
      const now = new Date();
      const targetHour = this.config.jornalHour || 20;
      const targetMinute = this.config.jornalMinute || 0;
      
      const nextJornal = new Date();
      nextJornal.setHours(targetHour, targetMinute, 0, 0);
      
      if (nextJornal <= now) {
        nextJornal.setDate(nextJornal.getDate() + 1);
      }
      
      const delay = nextJornal - now;
      console.log(`[NPC] Jornal agendado para ${nextJornal.toLocaleString('pt-BR')}`);
      
      setTimeout(() => {
        this.sendJornal();
        setInterval(() => this.sendJornal(), 24 * 60 * 60 * 1000);
      }, delay);
    };
    
    scheduleJornal();
  }

  async sendJornal() {
    const news = await this.generateDailyNews();
    if (news && global.nazu && global.from) {
      try {
        await global.nazu.sendMessage(global.from, { text: news });
        console.log('[NPC] 📰 Jornal enviado!');
      } catch (e) {
        console.error('[NPC] Erro ao enviar jornal:', e.message);
      }
    }
  }

  async generateDailyNews() {
    const today = new Date().toDateString();
    const todayEvents = (this.events.allEvents || []).filter(e => 
      new Date(e.time).toDateString() === today
    );
    
    if (todayEvents.length === 0) return null;
    
    const eventCounts = {};
    todayEvents.forEach(e => {
      eventCounts[e.type] = (eventCounts[e.type] || 0) + 1;
    });
    
    const topEvents = Object.entries(eventCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    
    const eventsSummary = topEvents.map(([type, count], i) => 
      `${i+1}. ${type.replace(/_/g, ' ')} (${count}x)`
    ).join('\n');
    
    return `📰 *KAISER NEWS - ${new Date().toLocaleDateString('pt-BR')}*

Bom dia! Resumo dos eventos de HOJE:

${eventsSummary}

Total: ${todayEvents.length} eventos! 🌙`;
  }

  toggle(enabled) {
    this.config.enabled = enabled;
    saveConfig(this.config);
    return enabled ? '✅ NPCs ativados!' : '❌ NPCs desativados!';
  }

  setCooldown(seconds) {
    this.config.cooldown = seconds * 1000;
    saveConfig(this.config);
    return `⏱️ Cooldown: ${seconds}s`;
  }

  setResponseChance(chance) {
    this.config.responseChance = Math.min(1, Math.max(0, chance));
    saveConfig(this.config);
    return `🎯 Chance: ${Math.round(this.config.responseChance * 100)}%`;
  }

  toggleJornal(enabled) {
    this.config.jornalEnabled = enabled;
    saveConfig(this.config);
    if (enabled) this.initJornal();
    return enabled ? '✅ Jornal ativado!' : '❌ Jornal desativado!';
  }

  getStatus() {
    return {
      ativo: this.config.enabled,
      cooldown: `${this.config.cooldown / 1000}s`,
      chance: `${Math.round(this.config.responseChance * 100)}%`,
      jornal: this.config.jornalEnabled ? 'Ativo' : 'Inativo',
      eventosRegistrados: this.events.allEvents?.length || 0,
      eventosMapeados: Object.keys(ALL_EVENTS).length
    };
  }

  getAllEventTypes() {
    return Object.keys(ALL_EVENTS).filter(k => k !== 'default');
  }
}

const npcManager = new NPCManager();
export default npcManager;
export { NPCManager, ALL_EVENTS };
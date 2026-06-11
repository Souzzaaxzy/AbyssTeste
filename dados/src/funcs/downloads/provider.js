/**
 * Sistema de Seleção de Provedor de Downloads
 * Permite alternar entre VexAPI e YT-DLP
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Arquivo de configuração do provedor
const PROVIDER_CONFIG = path.join(__dirname, '../../../database/provider.json');

// Provedores disponíveis
const PROVIDERS = {
  vex: {
    name: 'VEXAPI',
    description: 'API principal do bot'
  },
  yt: {
    name: 'YT-DLP',
    description: 'Download direto via yt-dlp'
  }
};

// Garante que o arquivo de configuração existe
function ensureConfigFile() {
  const dir = path.dirname(PROVIDER_CONFIG);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(PROVIDER_CONFIG)) {
    fs.writeFileSync(PROVIDER_CONFIG, JSON.stringify({ provider: 'vex' }, null, 2));
  }
}

// Carrega o provedor atual
function getProvider() {
  ensureConfigFile();
  try {
    const config = JSON.parse(fs.readFileSync(PROVIDER_CONFIG, 'utf8'));
    return config.provider || 'vex';
  } catch {
    return 'vex';
  }
}

// Define o provedor atual
function setProvider(provider) {
  if (!PROVIDERS[provider]) {
    return false;
  }
  ensureConfigFile();
  try {
    const config = { provider };
    fs.writeFileSync(PROVIDER_CONFIG, JSON.stringify(config, null, 2));
    return true;
  } catch {
    return false;
  }
}

// Retorna o nome do provedor atual
function getProviderName() {
  const provider = getProvider();
  return PROVIDERS[provider]?.name || 'VEXAPI';
}

// Retorna info do provedor atual
function getProviderInfo() {
  const provider = getProvider();
  return {
    key: provider,
    name: PROVIDERS[provider]?.name || 'VEXAPI',
    description: PROVIDERS[provider]?.description || ''
  };
}

// Exporta os módulos corretos baseado no provedor selecionado
async function getDownloadModules() {
  const provider = getProvider();
  
  if (provider === 'yt') {
    // Usa YT-DLP
    const ytdlp = await import('./ytdlp.js');
    return {
      search: ytdlp.search,
      mp3: ytdlp.mp3,
      mp4: ytdlp.mp4,
      ytmp3: ytdlp.ytmp3,
      ytmp4: ytdlp.ytmp4,
      provider: 'ytdlp'
    };
  } else {
    // Usa VexAPI (padrão)
    const youtube = await import('./youtube.js');
    return {
      search: youtube.search,
      mp3: youtube.mp3,
      mp4: youtube.mp4,
      ytmp3: youtube.ytmp3,
      ytmp4: youtube.ytmp4,
      provider: 'vex'
    };
  }
}

export {
  getProvider,
  setProvider,
  getProviderName,
  getProviderInfo,
  getDownloadModules,
  PROVIDERS
};
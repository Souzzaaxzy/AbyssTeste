/**
 * Módulo de Botões Interativos Modernos para WhatsApp
 * Compatível com Baileys v6+
 */

import { proto, generateWAMessageFromContent } from 'baileys';

/**
 * Tipos de botões suportados
 */
export const ButtonType = {
  LIST: 'list',
  URL: 'url',
  REPLY: 'reply',
  COPY: 'copy'
};

/**
 * Cria uma mensagem com botões interativos usando InteractiveMessage
 */
export function createInteractiveMessage(options) {
  const { title, text, buttons, footer } = options;

  // Cria o InteractiveMessage usando proto
  const interactiveMessage = {
    header: {
      title: title || '',
      hasMediaAttachment: false
    },
    body: { text: text || '' },
    footer: footer ? { text: footer } : undefined,
    nativeFlowMessage: {
      buttons: buttons.map(btn => ({
        name: btn.name,
        buttonParamsJson: JSON.stringify({
          display_text: btn.buttonParams?.displayText || btn.displayText,
          id: btn.buttonParams?.id || btn.id
        })
      }))
    }
  };

  return {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.create(interactiveMessage)
      }
    }
  };
}

/**
 * Cria botões para o comando de teste
 */
export function createTestInteractiveMessage() {
  const buttons = [
    { name: 'quick_reply', buttonParams: { displayText: '✅ Botão 1', id: 'test_button_1' } },
    { name: 'quick_reply', buttonParams: { displayText: '🎵 Botão 2', id: 'test_button_2' } },
    { name: 'quick_reply', buttonParams: { displayText: '⚙️ Configurações', id: 'test_button_3' } }
  ];

  return createInteractiveMessage({
    title: '🔘 Teste dos Botões Modernos',
    text: 'Se você está vendo estes botões, significa que a implementação funcionou.',
    buttons,
    footer: 'Abyss Bot • Botões Interativos v1.0'
  });
}

/**
 * Envia mensagem interativa usando generateWAMessage + sendMessage
 */
export async function sendInteractiveMessage(sock, jid, interactiveMessage, options = {}) {
  try {
    // Gera a mensagem usando generateWAMessage
    const msg = await generateWAMessageFromContent(jid, interactiveMessage, {
      userJid: jid,
      ...options
    });

    // Envia via relayMessage (mais confiável para mensagens interativas)
    await sock.relayMessage(jid, msg.message, { messageId: msg.key.id });
  } catch (error) {
    console.error('[InteractiveButtons] Erro ao enviar:', error.message);
    throw error;
  }
}

/**
 * Extrai o ID do botão selecionado
 */
export function getSelectedButtonId(msg) {
  try {
    const msgContent = msg.message || msg;
    
    // NativeFlowResponseMessage
    if (msgContent.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson) {
      const params = JSON.parse(msgContent.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson);
      return params.id || params.selectedId || null;
    }

    // buttonsResponseMessage
    if (msgContent.buttonsResponseMessage?.selectedButtonId) {
      return msgContent.buttonsResponseMessage.selectedButtonId;
    }

    // ViewOnceMessage com InteractiveMessage
    const viewOnceMsg = msgContent.viewOnceMessage?.message?.interactiveMessage;
    if (viewOnceMsg?.contextInfo?.buttonWithPayloadResponse?.buttonId) {
      return viewOnceMsg.contextInfo.buttonWithPayloadResponse.buttonId;
    }
    
    return null;
  } catch (error) {
    console.error('Erro ao extrair ID do botão:', error);
    return null;
  }
}

/**
 * Verifica se é resposta de botão interativo
 */
export function isInteractiveResponse(msg) {
  try {
    const msgContent = msg.message || msg;
    return !!(
      msgContent.interactiveResponseMessage ||
      msgContent.buttonsResponseMessage ||
      msgContent.viewOnceMessage?.message?.interactiveMessage
    );
  } catch { return false; }
}

/**
 * Cria resposta para o botão selecionado
 */
export function createButtonResponse(buttonId) {
  const responses = {
    'test_button_1': { emoji: '✅', text: 'Você selecionou o Botão 1!' },
    'test_button_2': { emoji: '🎵', text: 'Você selecionou o Botão 2!' },
    'test_button_3': { emoji: '⚙️', text: 'Você selecionou o Botão 3!' }
  };

  const response = responses[buttonId];
  if (response) {
    return `🎉 *Botão Selecionado!*\n\n${response.emoji} ${response.text}\n\n📋 ID: \`${buttonId}\``;
  }
  return `🎉 *Botão Selecionado!*\n\nID: \`${buttonId}\``;
}

export default {
  createInteractiveMessage,
  createTestInteractiveMessage,
  sendInteractiveMessage,
  getSelectedButtonId,
  isInteractiveResponse,
  createButtonResponse,
  ButtonType
};

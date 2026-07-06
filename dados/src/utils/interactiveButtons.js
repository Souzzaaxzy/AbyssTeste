/**
 * Módulo de Botões Interativos Modernos para WhatsApp
 * Utiliza NativeFlowMessage (formato mais moderno do Baileys v7+)
 */

import { generateWAMessageFromContent, proto } from 'baileys';

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
 * Cria uma mensagem com botões interativos usando NativeFlowMessage
 * Formato compatível com Baileys v7+
 * 
 * @param {Object} options - Opções da mensagem
 * @param {string} options.title - Título da mensagem
 * @param {string} options.text - Texto da mensagem
 * @param {Array} options.buttons - Array de botões
 * @param {string} options.footer - Texto do rodapé (opcional)
 * @returns {Object} Mensagem formatada com proto
 */
export function createInteractiveMessage(options) {
  const { title, text, buttons, footer } = options;

  const interactiveMessage = proto.Message.InteractiveMessage.create({
    header: proto.Message.InteractiveMessage.Header.create({
      title: title || '',
      hasMediaAttachment: false
    }),
    body: proto.Message.InteractiveMessage.Body.create({ text: text || '' }),
    footer: footer ? proto.Message.InteractiveMessage.Footer.create({ text: footer }) : undefined,
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: buttons.map(btn => {
        return proto.Message.InteractiveMessage.Button.create({
          name: btn.name,
          buttonParams: proto.Message.InteractiveMessage.Button.ButtonParams.create({
            displayText: btn.buttonParams?.displayText || btn.displayText,
            id: btn.buttonParams?.id || btn.id,
            copyCode: btn.buttonParams?.copyCode || btn.copyCode,
            url: btn.buttonParams?.url || btn.url
          })
        });
      })
    })
  });

  return proto.Message.create({
    viewOnceMessage: proto.Message.ViewOnceMessage.create({
      message: proto.Message.InteractiveMessage.create(interactiveMessage)
    })
  });
}

/**
 * Cria botões para o comando de teste
 * @returns {Object} Mensagem interativa de teste
 */
export function createTestInteractiveMessage() {
  const buttons = [
    {
      name: 'quick_reply',
      buttonParams: {
        displayText: '✅ Botão 1',
        id: 'test_button_1'
      }
    },
    {
      name: 'quick_reply',
      buttonParams: {
        displayText: '🎵 Botão 2',
        id: 'test_button_2'
      }
    },
    {
      name: 'quick_reply',
      buttonParams: {
        displayText: '⚙️ Configurações',
        id: 'test_button_3'
      }
    }
  ];

  return createInteractiveMessage({
    title: '🔘 Teste dos Botões Modernos',
    text: 'Se você está vendo estes botões, significa que a implementação funcionou.',
    buttons,
    footer: 'Abyss Bot • Botões Interativos v1.0'
  });
}

/**
 * Envia mensagem interativa com botões usando relayMessage
 * @param {Object} sock - Socket do Baileys
 * @param {string} jid - ID do chat
 * @param {Object} interactiveMessage - Mensagem interativa
 * @param {Object} options - Opções adicionais
 */
export async function sendInteractiveMessage(sock, jid, interactiveMessage, options = {}) {
  // Extrai a mensagem do formato gerado
  let messageToSend = interactiveMessage;
  
  if (interactiveMessage?.message?.viewOnceMessage) {
    messageToSend = interactiveMessage;
  } else if (interactiveMessage?.viewOnceMessage) {
    messageToSend = interactiveMessage;
  }

  // Usa relayMessage para enviar mensagens interativas (formato nativo do Baileys)
  await sock.relayMessage(jid, messageToSend, {
    messageId: options.messageId || `${Date.now()}`,
    ...options
  });
}

/**
 * Extrai o ID do botão selecionado de uma mensagem
 * @param {Object} msg - Mensagem recebida
 * @returns {string|null} ID do botão ou null
 */
export function getSelectedButtonId(msg) {
  try {
    const msgContent = msg.message || msg;
    
    // Tenta diferentes formatos de resposta de botão
    // NativeFlowResponseMessage (formato moderno)
    if (msgContent.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson) {
      try {
        const params = JSON.parse(msgContent.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson);
        return params.id || params.selectedId || null;
      } catch {
        return null;
      }
    }

    // buttonsResponseMessage (formato antigo mas ainda usado)
    if (msgContent.buttonsResponseMessage?.selectedButtonId) {
      return msgContent.buttonsResponseMessage.selectedButtonId;
    }

    // ViewOnceMessage com InteractiveMessage
    if (msgContent.viewOnceMessage?.message?.interactiveMessage) {
      const viewOnceMsg = msgContent.viewOnceMessage.message.interactiveMessage;
      if (viewOnceMsg.contextInfo?.buttonWithPayloadResponse?.buttonId) {
        return viewOnceMsg.contextInfo.buttonWithPayloadResponse.buttonId;
      }
    }

    // interactiveResponseMessage
    if (msgContent.interactiveResponseMessage?.singleSelectResponse?.selectedRowId) {
      return msgContent.interactiveResponseMessage.singleSelectResponse.selectedRowId;
    }
    
    return null;
  } catch (error) {
    console.error('Erro ao extrair ID do botão:', error);
    return null;
  }
}

/**
 * Verifica se uma mensagem é uma resposta de botão interativo
 * @param {Object} msg - Mensagem
 * @returns {boolean}
 */
export function isInteractiveResponse(msg) {
  try {
    const msgContent = msg.message || msg;
    
    return !!(
      msgContent.interactiveResponseMessage ||
      msgContent.buttonsResponseMessage ||
      (msgContent.viewOnceMessage?.message?.interactiveMessage)
    );
  } catch {
    return false;
  }
}

/**
 * Cria resposta para o botão selecionado
 * @param {string} buttonId - ID do botão
 * @returns {string} Resposta formatada
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

  return `🎉 *Botão Selecionado!*\n\nVocê pressionou o botão com ID: \`${buttonId}\``;
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

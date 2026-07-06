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
 * Cria botões no formato correto para a versão do Baileys
 */
function createButton(btn) {
  // Verifica se está usando proto.Message.InteractiveMessage.Button
  const ButtonClass = proto?.Message?.InteractiveMessage?.Button;
  
  if (ButtonClass && typeof ButtonClass.create === 'function') {
    return ButtonClass.create({
      name: btn.name,
      buttonParamsJson: JSON.stringify({
        display_text: btn.buttonParams?.displayText || btn.displayText,
        id: btn.buttonParams?.id || btn.id,
        copy_code: btn.buttonParams?.copyCode || btn.copyCode,
        url: btn.buttonParams?.url || btn.url
      })
    });
  }
  
  // Fallback: formato direto
  return {
    name: btn.name,
    buttonParamsJson: JSON.stringify({
      display_text: btn.buttonParams?.displayText || btn.displayText,
      id: btn.buttonParams?.id || btn.id
    })
  };
}

/**
 * Cria uma mensagem com botões interativos
 * @param {Object} options - Opções da mensagem
 * @returns {Object} Mensagem formatada com proto
 */
export function createInteractiveMessage(options) {
  const { title, text, buttons, footer } = options;

  try {
    // Verifica se InteractiveMessage existe
    const InteractiveMessageClass = proto?.Message?.InteractiveMessage;
    
    if (InteractiveMessageClass && typeof InteractiveMessageClass.create === 'function') {
      const Header = InteractiveMessageClass.Header;
      const Body = InteractiveMessageClass.Body;
      const Footer = InteractiveMessageClass.Footer;
      const NativeFlowMessage = InteractiveMessageClass.NativeFlowMessage;

      const interactiveMessage = InteractiveMessageClass.create({
        header: Header?.create({
          title: title || '',
          hasMediaAttachment: false
        }),
        body: Body?.create({ text: text || '' }),
        footer: footer ? Footer?.create({ text: footer }) : undefined,
        nativeFlowMessage: NativeFlowMessage?.create({
          buttons: buttons.map(btn => createButton(btn))
        })
      });

      return {
        message: {
          viewOnceMessage: {
            message: {
              interactiveMessage
            }
          }
        }
      };
    }
    
    // Fallback: formato antigo
    return createLegacyInteractiveMessage(options);
    
  } catch (error) {
    console.error('[InteractiveButtons] Erro ao criar mensagem:', error);
    return createLegacyInteractiveMessage(options);
  }
}

/**
 * Fallback: formato legado compatível com mais versões
 */
function createLegacyInteractiveMessage(options) {
  const { title, text, buttons, footer } = options;

  return {
    message: {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            header: proto.Message.InteractiveMessage.Header.create({
              title: title || '',
              hasMediaAttachment: false
            }),
            body: proto.Message.InteractiveMessage.Body.create({ text: text || '' }),
            footer: footer ? proto.Message.InteractiveMessage.Footer.create({ text: footer }) : undefined,
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: buttons.map(btn => ({
                name: btn.name,
                buttonParamsJson: JSON.stringify({
                  display_text: btn.buttonParams?.displayText || btn.displayText,
                  id: btn.buttonParams?.id || btn.id
                })
              }))
            })
          })
        }
      }
    }
  };
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
 * Envia mensagem interativa com botões
 * @param {Object} sock - Socket do Baileys
 * @param {string} jid - ID do chat
 * @param {Object} interactiveMessage - Mensagem interativa
 * @param {Object} options - Opções adicionais
 */
export async function sendInteractiveMessage(sock, jid, interactiveMessage, options = {}) {
  try {
    let msgToSend = interactiveMessage;
    
    // Extrai a mensagem do formato correto
    if (interactiveMessage?.message?.viewOnceMessage?.message?.interactiveMessage) {
      msgToSend = interactiveMessage.message;
    } else if (interactiveMessage?.viewOnceMessage?.message?.interactiveMessage) {
      msgToSend = { viewOnceMessage: interactiveMessage.viewOnceMessage };
    } else if (interactiveMessage?.interactiveMessage) {
      msgToSend = interactiveMessage;
    }

    // Usa sendMessage com o formato correto
    await sock.sendMessage(jid, msgToSend, {
      quoted: options.quoted,
      ...options
    });
  } catch (error) {
    console.error('[InteractiveButtons] Erro ao enviar mensagem:', error);
    throw error;
  }
}

/**
 * Extrai o ID do botão selecionado de uma mensagem
 */
export function getSelectedButtonId(msg) {
  try {
    const msgContent = msg.message || msg;
    
    // NativeFlowResponseMessage
    if (msgContent.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson) {
      try {
        const params = JSON.parse(msgContent.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson);
        return params.id || params.selectedId || null;
      } catch { return null; }
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

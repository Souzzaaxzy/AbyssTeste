/**
 * ═══════════════════════════════════════════════════════════════
 *  Abyss Bot - Sistema de Botões Modernos
 *  Compatível com Baileys v7+
 * ═══════════════════════════════════════════════════════════════
 */

import { proto, generateWAMessageFromContent } from 'baileys';

/**
 * Cria uma mensagem interativa com botões NativeFlow
 * @param {Object} options - Opções da mensagem
 * @returns {Object} Mensagem formatada
 */
function createInteractiveMessage(options) {
  const { 
    text, 
    footer, 
    title,
    buttons = [] 
  } = options;

  const msgContent = {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          header: proto.Message.InteractiveMessage.Header.create({
            title: title || '',
            hasMediaAttachment: false
          }),
          body: proto.Message.InteractiveMessage.Body.create({ text }),
          footer: footer ? proto.Message.InteractiveMessage.Footer.create({ text: footer }) : undefined,
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: buttons.map(btn => {
              // Determina o tipo de botão
              if (btn.type === 'url') {
                return proto.Message.InteractiveMessage.Button.create({
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: btn.displayText,
                    url: btn.url
                  })
                });
              } else if (btn.type === 'copy') {
                return proto.Message.InteractiveMessage.Button.create({
                  name: 'cta_copy',
                  buttonParamsJson: JSON.stringify({
                    display_text: btn.displayText,
                    copy_code: btn.copyCode
                  })
                });
              } else if (btn.type === 'call') {
                return proto.Message.InteractiveMessage.Button.create({
                  name: 'cta_call',
                  buttonParamsJson: JSON.stringify({
                    display_text: btn.displayText,
                    phone_number: btn.phoneNumber
                  })
                });
              } else {
                // Quick Reply (padrão)
                return proto.Message.InteractiveMessage.Button.create({
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: btn.displayText,
                    id: btn.id
                  })
                });
              }
            })
          })
        })
      }
    }
  };

  return msgContent;
}

/**
 * ═══════════════════════════════════════════════════════════════
 *  FUNÇÕES DE ENVIO DE BOTÕES
 * ═══════════════════════════════════════════════════════════════
 */

/**
 * Envia botões Quick Reply
 * @param {Object} sock - Socket do Baileys
 * @param {string} jid - ID do chat
 * @param {string} text - Texto da mensagem
 * @param {Array} buttons - Array de botões [{id, displayText}]
 * @param {Object} options - Opções adicionais (footer, title)
 */
export async function sendQuickReply(sock, jid, text, buttons, options = {}) {
  const formattedButtons = buttons.map(btn => ({
    type: 'quick_reply',
    id: btn.id,
    displayText: btn.displayText
  }));

  const msgContent = createInteractiveMessage({
    text,
    footer: options.footer,
    title: options.title,
    buttons: formattedButtons
  });

  const msg = generateWAMessageFromContent(jid, msgContent, {});
  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia lista de opções (Single Select)
 * @param {Object} sock - Socket do Baileys
 * @param {string} jid - ID do chat
 * @param {string} text - Texto da mensagem
 * @param {Array} rows - Array de opções [{title, description, rowId}]
 * @param {Object} options - Opções adicionais (footer, title, buttonText)
 */
export async function sendList(sock, jid, text, rows, options = {}) {
  const msgContent = {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          header: proto.Message.InteractiveMessage.Header.create({
            title: options.title || '',
            hasMediaAttachment: false
          }),
          body: proto.Message.InteractiveMessage.Body.create({ text }),
          footer: options.footer ? proto.Message.InteractiveMessage.Footer.create({ text: options.footer }) : undefined,
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              proto.Message.InteractiveMessage.Button.create({
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  display_text: options.buttonText || '📋 Ver Opções',
                  sections: [{
                    title: options.sectionTitle || 'Opções',
                    rows: rows.map(row => ({
                      headerId: row.title,
                      title: row.title,
                      description: row.description || '',
                      id: row.rowId
                    }))
                  }]
                })
              })
            ]
          })
        })
      }
    }
  };

  const msg = generateWAMessageFromContent(jid, msgContent, {});
  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia botão de URL
 * @param {Object} sock - Socket do Baileys
 * @param {string} jid - ID do chat
 * @param {string} text - Texto da mensagem
 * @param {string} displayText - Texto do botão
 * @param {string} url - URL para abrir
 * @param {Object} options - Opções adicionais
 */
export async function sendUrl(sock, jid, text, displayText, url, options = {}) {
  const buttons = [{
    type: 'url',
    displayText,
    url
  }];

  const msgContent = createInteractiveMessage({
    text,
    footer: options.footer,
    title: options.title,
    buttons
  });

  const msg = generateWAMessageFromContent(jid, msgContent, {});
  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia botão de copiar
 * @param {Object} sock - Socket do Baileys
 * @param {string} jid - ID do chat
 * @param {string} text - Texto da mensagem
 * @param {string} displayText - Texto do botão
 * @param {string} copyCode - Código/texto para copiar
 * @param {Object} options - Opções adicionais
 */
export async function sendCopy(sock, jid, text, displayText, copyCode, options = {}) {
  const buttons = [{
    type: 'copy',
    displayText,
    copyCode
  }];

  const msgContent = createInteractiveMessage({
    text,
    footer: options.footer,
    title: options.title,
    buttons
  });

  const msg = generateWAMessageFromContent(jid, msgContent, {});
  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia botão de ligação
 * @param {Object} sock - Socket do Baileys
 * @param {string} jid - ID do chat
 * @param {string} text - Texto da mensagem
 * @param {string} displayText - Texto do botão
 * @param {string} phoneNumber - Número para ligar
 * @param {Object} options - Opções adicionais
 */
export async function sendCall(sock, jid, text, displayText, phoneNumber, options = {}) {
  const buttons = [{
    type: 'call',
    displayText,
    phoneNumber
  }];

  const msgContent = createInteractiveMessage({
    text,
    footer: options.footer,
    title: options.title,
    buttons
  });

  const msg = generateWAMessageFromContent(jid, msgContent, {});
  await sock.relayMessage(jid, msg.message, {});
}

/**
 * ═══════════════════════════════════════════════════════════════
 *  FUNÇÕES DE CAPTURA DE CLIQUES
 * ═══════════════════════════════════════════════════════════════
 */

/**
 * Extrai o ID do botão selecionado de uma mensagem
 * @param {Object} msg - Mensagem recebida
 * @returns {string|null} ID do botão ou null
 */
export function getSelectedButtonId(msg) {
  try {
    const msgContent = msg.message || msg;
    
    // NativeFlowResponseMessage (formato atual)
    if (msgContent.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson) {
      try {
        const params = JSON.parse(msgContent.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson);
        return params.id || params.selectedId || null;
      } catch { }
    }

    // SingleSelect response
    if (msgContent.interactiveResponseMessage?.singleSelectResponse?.selectedRowId) {
      return msgContent.interactiveResponseMessage.singleSelectResponse.selectedRowId;
    }

    // ButtonsResponseMessage (formato antigo)
    if (msgContent.buttonsResponseMessage?.selectedButtonId) {
      return msgContent.buttonsResponseMessage.selectedButtonId;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Verifica se é uma resposta de botão interativo
 * @param {Object} msg - Mensagem
 * @returns {boolean}
 */
export function isInteractiveResponse(msg) {
  try {
    const msgContent = msg.message || msg;
    return !!(
      msgContent.interactiveResponseMessage ||
      msgContent.buttonsResponseMessage
    );
  } catch {
    return false;
  }
}

/**
 * ═══════════════════════════════════════════════════════════════
 *  EXPORTS
 * ═══════════════════════════════════════════════════════════════
 */
export default {
  sendQuickReply,
  sendList,
  sendUrl,
  sendCopy,
  sendCall,
  getSelectedButtonId,
  isInteractiveResponse,
  createInteractiveMessage
};

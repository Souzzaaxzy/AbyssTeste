/**
 * ═══════════════════════════════════════════════════════════════
 *  Abyss Bot - Sistema de Botões Modernos
 *  Compatível com Baileys v7+
 * ═══════════════════════════════════════════════════════════════
 */

import { generateWAMessageFromContent } from 'baileys';

/**
 * Envia botões Quick Reply usando generateWAMessageFromContent
 */
export async function sendQuickReply(sock, jid, text, buttons, options = {}) {
  const msg = await generateWAMessageFromContent(jid, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: '',
            hasMediaAttachment: false
          },
          body: { text },
          footer: options.footer ? { text: options.footer } : undefined,
          nativeFlowMessage: {
            buttons: buttons.map(btn => ({
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: btn.displayText,
                id: btn.id
              })
            }))
          }
        }
      }
    }
  }, { userJid: jid });

  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia lista de opções (Single Select)
 */
export async function sendList(sock, jid, text, rows, options = {}) {
  const msg = await generateWAMessageFromContent(jid, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: '',
            hasMediaAttachment: false
          },
          body: { text },
          footer: options.footer ? { text: options.footer } : undefined,
          nativeFlowMessage: {
            buttons: [
              {
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
              }
            ]
          }
        }
      }
    }
  }, { userJid: jid });

  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia botão de URL
 */
export async function sendUrl(sock, jid, text, displayText, url, options = {}) {
  const msg = await generateWAMessageFromContent(jid, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: { title: '', hasMediaAttachment: false },
          body: { text },
          footer: options.footer ? { text: options.footer } : undefined,
          nativeFlowMessage: {
            buttons: [{
              name: 'cta_url',
              buttonParamsJson: JSON.stringify({
                display_text: displayText,
                url: url
              })
            }]
          }
        }
      }
    }
  }, { userJid: jid });

  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia botão de copiar
 */
export async function sendCopy(sock, jid, text, displayText, copyCode, options = {}) {
  const msg = await generateWAMessageFromContent(jid, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: { title: '', hasMediaAttachment: false },
          body: { text },
          footer: options.footer ? { text: options.footer } : undefined,
          nativeFlowMessage: {
            buttons: [{
              name: 'cta_copy',
              buttonParamsJson: JSON.stringify({
                display_text: displayText,
                copy_code: copyCode
              })
            }]
          }
        }
      }
    }
  }, { userJid: jid });

  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia botão de ligação
 */
export async function sendCall(sock, jid, text, displayText, phoneNumber, options = {}) {
  const msg = await generateWAMessageFromContent(jid, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: { title: '', hasMediaAttachment: false },
          body: { text },
          footer: options.footer ? { text: options.footer } : undefined,
          nativeFlowMessage: {
            buttons: [{
              name: 'cta_call',
              buttonParamsJson: JSON.stringify({
                display_text: displayText,
                phone_number: phoneNumber
              })
            }]
          }
        }
      }
    }
  }, { userJid: jid });

  await sock.relayMessage(jid, msg.message, {});
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
      } catch { }
    }

    // SingleSelect response
    if (msgContent.interactiveResponseMessage?.singleSelectResponse?.selectedRowId) {
      return msgContent.interactiveResponseMessage.singleSelectResponse.selectedRowId;
    }

    // ButtonsResponseMessage
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

export default {
  sendQuickReply,
  sendList,
  sendUrl,
  sendCopy,
  sendCall,
  getSelectedButtonId,
  isInteractiveResponse
};

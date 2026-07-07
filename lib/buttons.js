/**
 * ═══════════════════════════════════════════════════════════════
 *  Abyss Bot - Sistema de Botões Modernos
 *  Compatível com Baileys v7+
 * ═══════════════════════════════════════════════════════════════
 */

import { generateWAMessageFromContent } from 'baileys';

/**
 * Cria uma mensagem interativa com botões NativeFlow
 * Formato direto (sem proto.create) para máxima compatibilidade
 */
function createInteractiveMessage(options) {
  const { text, footer, buttons = [] } = options;

  // Cria os botões no formato correto
  const formattedButtons = buttons.map(btn => {
    if (btn.type === 'url') {
      return {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: btn.displayText,
          url: btn.url
        })
      };
    } else if (btn.type === 'copy') {
      return {
        name: 'cta_copy',
        buttonParamsJson: JSON.stringify({
          display_text: btn.displayText,
          copy_code: btn.copyCode
        })
      };
    } else if (btn.type === 'call') {
      return {
        name: 'cta_call',
        buttonParamsJson: JSON.stringify({
          display_text: btn.displayText,
          phone_number: btn.phoneNumber
        })
      };
    } else {
      // Quick Reply (padrão)
      return {
        name: 'quick_reply',
        buttonParamsJson: JSON.stringify({
          display_text: btn.displayText,
          id: btn.id
        })
      };
    }
  });

  return {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: '',
            hasMediaAttachment: false
          },
          body: { text },
          footer: footer ? { text: footer } : undefined,
          nativeFlowMessage: {
            buttons: formattedButtons
          }
        }
      }
    }
  };
}

/**
 * Envia botões Quick Reply
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
    buttons: formattedButtons
  });

  const msg = generateWAMessageFromContent(jid, msgContent, {});
  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia lista de opções (Single Select)
 */
export async function sendList(sock, jid, text, rows, options = {}) {
  const msgContent = {
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
  };

  const msg = generateWAMessageFromContent(jid, msgContent, {});
  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia botão de URL
 */
export async function sendUrl(sock, jid, text, displayText, url, options = {}) {
  const buttons = [{ type: 'url', displayText, url }];
  const msgContent = createInteractiveMessage({ text, footer: options.footer, buttons });
  const msg = generateWAMessageFromContent(jid, msgContent, {});
  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia botão de copiar
 */
export async function sendCopy(sock, jid, text, displayText, copyCode, options = {}) {
  const buttons = [{ type: 'copy', displayText, copyCode }];
  const msgContent = createInteractiveMessage({ text, footer: options.footer, buttons });
  const msg = generateWAMessageFromContent(jid, msgContent, {});
  await sock.relayMessage(jid, msg.message, {});
}

/**
 * Envia botão de ligação
 */
export async function sendCall(sock, jid, text, displayText, phoneNumber, options = {}) {
  const buttons = [{ type: 'call', displayText, phoneNumber }];
  const msgContent = createInteractiveMessage({ text, footer: options.footer, buttons });
  const msg = generateWAMessageFromContent(jid, msgContent, {});
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

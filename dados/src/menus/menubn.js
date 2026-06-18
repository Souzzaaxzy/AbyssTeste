export default async function menubn(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        💜 ${botName} - BOAS-VINDAS DO VOID 💜    ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        Dê boas-vindas às almas...                ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
} = {}) {
    return `

${menuTopBorder}
💜 *SISTEMA DE BOAS-VINDAS*
${menuTopBorder}

◈ ⚙️ CONFIGURAÇÃO
▸ ${prefix}bemvindo        - Ativar/desativar BV
▸ ${prefix}bemvindo2       - Modo BV2 (avançado)
▸ ${prefix}legendabv       - Configurar texto BV
▸ ${prefix}fotobv          - Definir foto de BV
▸ ${prefix}set-fotobv      - Definir banner BV
▸ ${prefix}rmfotobv        - Remover foto BV
▸ ${prefix}saida           - Configurar mensagem de saída
▸ ${prefix}fotosaiu        - Foto de saída
▸ ${prefix}rmfotosaiu      - Remover foto de saída

◈ 📝 VARIÁVEIS DE TEXTO
▸ #numerodele#   - Menciona o usuário
▸ #nomedogp#     - Nome do grupo
▸ #membros#      - Total de membros
▸ #numerobot#    - Número do bot

${bottomBorder}

◈ *O void acolhe novos viajantes* ◈
_"Bem-vindo às profundezas..."_`;
}

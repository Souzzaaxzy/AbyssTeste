export default async function menuia(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        🤖 ${botName} - IA DO VOID 🤖            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        O void conhece todas as respostas...      ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
} = {}) {
    return `

${menuTopBorder}
🤖 *INTELIGÊNCIA ARTIFICIAL*
${menuTopBorder}

◈ 💬 CHAT COM IA
▸ ${prefix}ia <pergunta>    - Perguntar à IA
▸ ${prefix}gpt <pergunta>   - ChatGPT
▸ ${prefix}gemini <pergunta> - Google Gemini
▸ ${prefix}llama <pergunta> - Meta Llama

◈ 🖼️ IA DE IMAGENS
▸ ${prefix}image <desc>     - Gerar imagem (DALL-E)
▸ ${prefix}midjourney       - Gerar com MJ

◈ 🔍 IA DE BUSCA
▸ ${prefix}search <pergunta> - Busca inteligente
▸ ${prefix}resumir <texto>   - Resumir texto

◈ ✍️ IA DE TEXTO
▸ ${prefix}traduzir <texto> - Traduzir
▸ ${prefix}gramatica <texto> - Corrigir gramática
▸ ${prefix}escrever <tema>   - Escrever texto

${bottomBorder}

◈ *O void possui toda a sabedoria* ◈
_"Pergunte ao abismo..."_`;
}

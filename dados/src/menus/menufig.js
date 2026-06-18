export default async function menufig(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        🖼️ ${botName} - FIGURINHAS DO VOID 🖼️    ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        Coleção de sombras para compartilhar...   ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
} = {}) {
    return `

${menuTopBorder}
🖼️ *FIGURINHAS*
${menuTopBorder}

◈ 📦 CRIAR
▸ ${prefix}sticker          - Criar (marque img)
▸ ${prefix}sgif             - Sticker animado
▸ ${prefix}attp <texto>     - Texto em sticker
▸ ${prefix}attp2 <texto>    - Estilo 2
▸ ${prefix}attp3 <texto>    - Estilo 3
▸ ${prefix}emojimix <😀😀>  - Misturar emojis

◈ 🖼️ CONVERSÃO
▸ ${prefix}toimg            - Sticker → Imagem
▸ ${prefix}tomp3            - Vídeo → Áudio

◈ 🔍 BUSCAR
▸ ${prefix}stickersearch    - Buscar figurinhas

${bottomBorder}

◈ *Coleção do void* ◈
_"Imortalize nas sombras..."_`;
}

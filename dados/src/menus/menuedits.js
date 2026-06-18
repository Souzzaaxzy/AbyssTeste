export default async function menuedits(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        ✨ ${botName} - EDIÇÕES DO VOID ✨       ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        Transforme mídia nas sombras...           ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
} = {}) {
    return `

${menuTopBorder}
✨ *EDIÇÃO DE MÍDIA*
${menuTopBorder}

◈ 🎨 EFEITOS
▸ ${prefix}blur <img>        - Efeito blur
▸ ${prefix}brilho <img>      - Ajustar brilho
▸ ${prefix}contraste <img>   - Ajustar contraste
▸ ${prefix}inverter <img>    - Inverter cores
▸ ${prefix}rotacionar <img>  - Rotacionar
▸ ${prefix}espelhar <img>    - Espelhar
▸ ${prefix}saturar <img>     - Saturação

◈ 🎭 STICKERS
▸ ${prefix}sticker          - Criar sticker
▸ ${prefix}sticker <img>    - Da imagem
▸ ${prefix}sgif             - Sticker animado
▸ ${prefix}toimg            - Sticker → Imagem

◈ 🔊 ÁUDIO
▸ ${prefix}tts <texto>       - Texto para fala
▸ ${prefix}ouvir <texto>     - Ouvir texto
▸ ${prefix}volume <qtd>      - Ajustar volume
▸ ${prefix}velocidade <vel>  - Mudar velocidade

${bottomBorder}

◈ *Transforme a escuridão em arte* ◈
_"Cada edição revela o void..."_`;
}

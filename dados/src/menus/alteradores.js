export default async function alteradores(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        🎭 ${botName} - ALTERADORES DO VOID 🎭   ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        Transforme a realidade...                 ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
} = {}) {
    return `

${menuTopBorder}
🎭 *ALTERADORES DO VOID*
${menuTopBorder}

◈ 🎨 TEXTOS & IMAGENS
▸ ${prefix}styletxt <texto>   - Texto estilizado
▸ ${prefix}txtcorp <texto>    - Texto corp
▸ ${prefix}slap @user         - Tapa
▸ ${prefix}beijar @user       - Beijo
▸ ${prefix}chute @user        - Chute
▸ ${prefix}abraçar @user      - Abraço
▸ ${prefix}ship @user         - Ship
▸ ${prefix}hit @user          - Soco
▸ ${prefix}estapear @user     - Estapeamento
▸ ${prefix}beijar @user       - Beijo

◈ 🎭 SONS & VOZES
▸ ${prefix}snake <audio>      - Efeito cobra
▸ ${prefix}bass <audio>       - Efeito bass
▸ ${prefix}reverse <audio>    - Áudio reverso
▸ ${prefix}blown <audio>      - Efeito blown
▸ ${prefix}deep <audio>       - Voz grave
▸ ${prefix}earrape <audio>    - Efeito ear rape
▸ ${prefix}nightcore <audio>  - Nightcore
▸ ${prefix}vaporwave <audio>  - Vaporwave
▸ ${prefix}slow <audio>       - Lento
▸ ${prefix}fast <audio>       - Rápido

◈ 🔊 TOques
▸ ${prefix}gtts <texto>       - Texto em áudio
▸ ${prefix}ouvir <texto>      - Ouvir texto
▸ ${prefix}tts <texto>        - TTS

${bottomBorder}

◈ *Altere a percepção do void* ◈
_"Transforme a escuridão..."_`;
}

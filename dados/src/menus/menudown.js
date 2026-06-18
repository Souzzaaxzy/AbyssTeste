export default async function menudown(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        📥 ${botName} - DOWNLOADS DO VOID 📥      ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        Baixe o abismo para seu dispositivo.      ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
    menuTitleIcon = "◈",
    menuItemIcon = "▸",
} = {}) {
    return `

${menuTopBorder}
📥 *MENU DE DOWNLOADS*
${menuTopBorder}

◈ 🎬 VÍDEO & ÁUDIO
▸ ${prefix}play <nome>      - Baixar música (YT)
▸ ${prefix}video <nome>     - Baixar vídeo (YT)
▸ ${prefix}ytmp3 <link>     - YT para áudio
▸ ${prefix}ytmp4 <link>     - YT para vídeo
▸ ${prefix}spotify <link>   - Baixar do Spotify
▸ ${prefix}soundcloud <link> - Baixar do SoundCloud

◈ 📱 REDES SOCIAIS
▸ ${prefix}tiktok <link>    - Baixar TikTok
▸ ${prefix}ig <link>        - Baixar Instagram
▸ ${prefix}fb <link>        - Baixar Facebook
▸ ${prefix}tw <link>        - Baixar Twitter/X
▸ ${prefix}kwai <link>      - Baixar Kwai
▸ ${prefix}pinterest <link> - Baixar Pinterest

◈ 📁 ARQUIVOS & OUTROS
▸ ${prefix}mediafire <link> - Baixar do MediaFire
▸ ${prefix}gdrive <link>    - Baixar do Google Drive

◈ 🎵 LETRAS & MÚSICA
▸ ${prefix}letra <música>   - Buscar letra
▸ ${prefix}spotifysearch    - Buscar no Spotify

◈ 📋 INFORMAÇÕES
▸ ${prefix}playstore <app>  - Info da Play Store
▸ ${prefix}mcplugins <nome> - Info de plugin MC

${bottomBorder}

◈ *O Void fornece tudo que precisa* ◈
_"Baixe as profundezas..."_`;
}

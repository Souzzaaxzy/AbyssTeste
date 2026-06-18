export default async function menulogo(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        🎨 ${botName} - CRIADOR DE LOGOS 🎨      ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        Crie arte das profundezas do void.        ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
} = {}) {
    return `

${menuTopBorder}
🎨 *CRIADOR DE LOGOS*
${menuTopBorder}

◈ LOGOS DE TEXTO
▸ ${prefix}naruto <texto>       - Logo estilo Naruto
▸ ${prefix}deathnote <texto>    - Logo estilo Death Note
▸ ${prefix}glitch <texto>       - Efeito glitch
▸ ${prefix}carbon <texto>       - Estilo carbono
▸ ${prefix}neon <texto>         - Texto neon
▸ ${prefix}matrix <texto>       - Estilo Matrix
▸ ${prefix}pubg <texto>         - Estilo PUBG
▸ ${prefix}romantic <texto>     - Estilo romântico
▸ ${prefix}metallic <texto>     - Efeito metálico
▸ ${prefix}avengers <texto>     - Estilo Vingadores
▸ ${prefix}marvel <texto>       - Estilo Marvel
▸ ${prefix}wolf <texto>         - Logo com lobo
▸ ${prefix}ph <texto>           - Estilo left
▸ ${prefix}transformer <texto>  - Estilo Transformer
▸ ${prefix}business <texto>     - Estilo empresarial
▸ ${prefix}shadow <texto>       - Sombra sombria
▸ ${prefix}dragon <texto>       - Logo dragão
▸ ${prefix}warrior <texto>      - Guerreiro
▸ ${prefix}steel <texto>        - Aço
▸ ${prefix}fire <texto>         - Fogo
▸ ${prefix}gold <texto>         - Ouro
▸ ${prefix}bluefire <texto>     - Fogo azul
▸ ${prefix}toxic <texto>        - Tóxico
▸ ${prefix}thunder <texto>      - Trovão
▸ ${prefix}galaxy <texto>       - Galáxia
▸ ${prefix}halloween <texto>    - Halloween
▸ ${prefix}magma <texto>        - Magma
▸ ${prefix}horror <texto>       - Horror
▸ ${prefix}art <texto>          - Arte
▸ ${prefix}skeleton <texto>     - Esqueleto
▸ ${prefix}3d <texto>           - 3D
▸ ${prefix}cemetery <texto>     - Cemitério
▸ ${prefix}cloud <texto>        - Nuvem
▸ ${prefix}flower <texto>       - Flor
▸ ${prefix}crossfire <texto>    - Crossfire

◈ LOGOS COM NOME DO BOT
▸ ${prefix}logokaiser <texto>   - Logo Kaiser

${bottomBorder}

◈ *Crie arte das sombras* ◈
_"O void inspira tua criatividade..."_`;
}

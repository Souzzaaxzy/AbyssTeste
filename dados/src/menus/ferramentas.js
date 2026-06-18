export default async function ferramentas(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        🔧 ${botName} - FERRAMENTAS DO VOID 🔧   ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        As ferramentas do abismo...               ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
} = {}) {
    return `

${menuTopBorder}
🔧 *FERRAMENTAS DO VOID*
${menuTopBorder}

◈ 🎮 JOGOS
▸ ${prefix}soccer           - Jogar futebol
▸ ${prefix}jogodavelha      - Jogo da velha
▸ ${prefix}jokenpo          - Jo Ken Po
▸ ${prefix}forca            - Jogo da forca
▸ ${prefix}quiz             - Quiz
▸ ${prefix}corrida          - Corrida de cavalos
▸ ${prefix}ppt              - Pedra, papel, tesoura

◈ 📊 INFORMAÇÕES
▸ ${prefix}enem             - Simulado ENEM
▸ ${prefix}revista          - Ver capas de revistas
▸ ${prefix}wikipedia <termo> - Buscar na Wikipedia
▸ ${prefix}clima <cidade>   - Ver clima
▸ ${prefix}anime <nome>     - Info de anime
▸ ${prefix}filme <nome>     - Info de filme

◈ 🛠️ UTILITÁRIOS
▸ ${prefix}ocr <img>        - Ler texto de imagem
▸ ${prefix}traduzir <texto> - Traduzir
▸ ${prefix}calcular <expr>  - Calculadora
▸ ${prefix}encurtar <link>  - Encurtar URL
▸ ${prefix}fake             - Gerar dados fake
▸ ${prefix}voo              - Rastrear voo
▸ ${prefix}documento        - Criar documento

◈ 🎲 DIVERSOS
▸ ${prefix}caracoroa        - Cara ou coroa
▸ ${prefix}dado             - Rolar dado
▸ ${prefix}biscoito         - Biscoito da sorte
▸ ${prefix}ship             - Ship entre usuários
▸ ${prefix}detector         - Detector de mentiras
▸ ${prefix}chance          - Chance de acontecer
▸ ${prefix}sortear          - Sortear número

${bottomBorder}

◈ *Ferramentas das profundezas* ◈
_"Use o poder do void..."_`;
}

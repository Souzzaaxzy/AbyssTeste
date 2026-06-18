export default async function menumemb(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        👤 ${botName} - MENU DE MEMBRO 👤        ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        Explore as profundezas...                 ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
} = {}) {
    return `

${menuTopBorder}
👤 *MENU DE MEMBRO*
${menuTopBorder}

◈ 👤 PERFIL & INFORMAÇÕES
▸ ${prefix}perfil        - Ver seu perfil
▸ ${prefix}status        - Ver status
▸ ${prefix}info          - Info do grupo
▸ ${prefix}regras        - Ver regras

◈ 🔍 BUSCAS
▸ ${prefix}google <pesq>   - Buscar no Google
▸ ${prefix}wikipedia <term> - Buscar na Wikipedia
▸ ${prefix}clima <cidade>   - Ver clima
▸ ${prefix}cep <cep>        - Consultar CEP
▸ ${prefix}ddd <número>     - Consultar DDD
▸ ${prefix}anime <nome>     - Info de anime
▸ ${prefix}manga <nome>     - Info de manga
▸ ${prefix}filme <nome>     - Info de filme
▸ ${prefix}series <nome>    - Info de série

◈ 🛠️ UTILITÁRIOS
▸ ${prefix}qrcode <texto>      - Criar QR Code
▸ ${prefix}traduzir <texto>    - Traduzir texto
▸ ${prefix}calcular <expr>     - Calculadora
▸ ${prefix}nota <texto>        - Criar nota
▸ ${prefix}notas               - Ver notas
▸ ${prefix}encurtar <link>     - Encurtar link

◈ 🧮 DIVERSOS
▸ ${prefix}piada            - Contar piada
▸ ${prefix}fortune          - Sortear número
▸ ${prefix}afk <motivo>     - Marcar como ausente
▸ ${prefix}fake              - Gerar dados fake
▸ ${prefix}voo               - Rastrear voo

◈ 💬 INTERAÇÃO
▸ ${prefix}caracoroa        - Cara ou coroa
▸ ${prefix}gay               - Teste gay
▸ ${prefix}ship              - Ship
▸ ${prefix}detector          - Detetor
▸ ${prefix}fazer            - Perguntar algo

${bottomBorder}

◈ *Navegue pelas sombras* ◈
_"Cada comando te aproxima do void..."_`;
}

export default async function menuvip(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        💎 ${botName} - VIP DO VOID 💎           ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        A elite do abismo te aguarda...           ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
} = {}) {
    return `

${menuTopBorder}
💎 *MENU VIP/PREMIUM*
${menuTopBorder}

◈ 🛒 LOJA PREMIUM
▸ ${prefix}lojapremium     - Ver loja premium
▸ ${prefix}comprarpremium  - Comprar item premium

◈ ⭐ BENEFÍCIOS VIP
▸ ${prefix}boost           - Ver boosts ativos
▸ ${prefix}propriedades    - Ver propriedades
▸ ${prefix}cprop <id>      - Comprar propriedade
▸ ${prefix}cprops          - Ver minhas propriedades
▸ ${prefix}tributos        - Pagar tributos
▸ ${prefix}meustats        - Meus stats VIP

◈ 🎁 PRESENTES
▸ ${prefix}presente @user <item> - Presentear usuário
▸ ${prefix}presentes      - Ver presentes recebidos

◈ 📊 INFORMAÇÕES
▸ ${prefix}infovip         - Info sobre VIP
▸ ${prefix}topvip          - Ranking VIP

${bottomBorder}

◈ *Apenas os mais dignos acessam o void* ◈
_"A elite das sombras te aguarda..."_`;
}

export default async function menu(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║          🌌 ${botName} - O Vazio Te Consome 🌌   ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║       Quando o Void te chama, não há retorno.    ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
    menuTitleIcon = "◈",
    menuItemIcon = "▸",
    separatorIcon = "─",
    middleBorder = ""
} = {}) {
    return `

${menuTopBorder}
🌌 *MENU DO VOID*
${menuTopBorder}
▸ ${prefix}menuia     - 🤖 Inteligência Artificial
▸ ${prefix}menudown   - 📥 Downloads
▸ ${prefix}menulogos  - 🎨 Criar Logos
▸ ${prefix}menuedits  - ✨ Editar Mídia
▸ ${prefix}menuadm    - ⚙️ Administração
▸ ${prefix}menubn     - 💜 Boas-vindas
▸ ${prefix}menudono   - 👑 Dono
▸ ${prefix}menumemb   - 👤 Membro
▸ ${prefix}menufut    - ⚽ Jogos
▸ ${prefix}ferramentas - 🔧 Ferramentas
▸ ${prefix}menufig    - 🖼️ Figurinhas
▸ ${prefix}alteradores - 🎭 Alteradores
▸ ${prefix}menurpg    - ⚔️ Modo RPG
▸ ${prefix}menuvip    - 💎 VIP
${bottomBorder}

◈ *O Void observa tudo* ◈
_"Quando o Void te chama, não há retorno."_`;
}

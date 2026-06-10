export default async function menuIa(prefix, botName = "MeuBot", userName = "Usuário", {
    header = `╭──────────────────────────────────────────────╮⊰ 🌸 『 *${botName}* 』\n│Olá, #user#!\n╰──────────────────────────────────────────────╯`,
    menuTopBorder = "╭──────────────────────────────────────────────╮",
    bottomBorder = "╰──────────────────────────────────────────────╯",
    menuTitleIcon = "🍧ฺꕸ▸",
    menuItemIcon = "•.̇𖥨֗🍓⭟",
    separatorIcon = "❁",
    middleBorder = "│",
    chatBotMenuTitle = "🤖 CHATBOTS INTELIGENTES",
    textMenuTitle = "✍️ GERAÇÃO DE TEXTO",
    toolsMenuTitle = "🛠️ FERRAMENTAS DE IA"
} = {}) {
    const formattedHeader = header.replace(/#user#/g, userName);
    return `${formattedHeader}

${menuTopBorder}
│ ${chatBotMenuTitle}
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}llama3
${bottomBorder}

${menuTopBorder}
│ ${textMenuTitle}
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}cog
${bottomBorder}

${menuTopBorder}
│ ${toolsMenuTitle}
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}ideias
${middleBorder}${menuItemIcon}${prefix}explicar
${middleBorder}${menuItemIcon}${prefix}resumir
${middleBorder}${menuItemIcon}${prefix}corrigir
${middleBorder}${menuItemIcon}${prefix}resumirurl
${middleBorder}${menuItemIcon}${prefix}resumirchat <qtd>
${middleBorder}${menuItemIcon}${prefix}recomendar <tipo> <gênero>
${bottomBorder}

${menuTopBorder}
│ 💬 DEBATES & ARGUMENTAÇÃO
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}debater <tema>
${bottomBorder}

${menuTopBorder}
│ 📖 HISTÓRIAS INTERATIVAS
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}aventura <gênero>
${middleBorder}${menuItemIcon}${prefix}aventura escolha <1/2/3>
${middleBorder}${menuItemIcon}${prefix}aventura status
${middleBorder}${menuItemIcon}${prefix}aventura sair
${middleBorder}
${middleBorder}${menuTitleIcon} *Alias: historia* ${menuTitleIcon}
${bottomBorder}
`;
}
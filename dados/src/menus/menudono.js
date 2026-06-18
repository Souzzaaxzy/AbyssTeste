async function menuDono(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║       👑 ${botName} - SENHOR DO VOID 👑       ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║       O abismo obedece teus comandos.            ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
    menuTitleIcon = "◈",
    menuItemIcon = "▸",
    separatorIcon = "─",
    middleBorder = "",
    aiMenuTitle = "🤖 INTELIGÊNCIA ARTIFICIAL",
    botConfigMenuTitle = "🤖 CONFIGURAÇÕES DO BOT",
    menuDesignMenuTitle = "🎨 DESIGN & APARÊNCIA",
    automationMenuTitle = "⚙️ SISTEMA & AUTOMAÇÃO",
    commandCustomMenuTitle = "🛠️ PERSONALIZAÇÃO DE COMANDOS",
    commandLimitingMenuTitle = "🚫 LIMITAÇÃO DE COMANDOS",
    userManagementMenuTitle = "👥 GERENCIAMENTO DE USUÁRIOS",
    rentalSystemMenuTitle = "💰 SISTEMA DE ALUGUEL",
    subBotsMenuTitle = "🤖 GERENCIAMENTO DE SUB-BOTS",
    vipSystemMenuTitle = "💎 SISTEMA VIP/PREMIUM",
    botControlMenuTitle = "⚡ CONTROLE & MANUTENÇÃO",
    monitoringMenuTitle = "📊 MONITORAMENTO & ANÁLISE",
    broadcastMenuTitle = "📡 TRANSMISSÕES",
    smmMenuTitle = "📈 SERVIÇOS SMM (SEGUIDORES)"
} = {}) {
    const formattedHeader = header.replace(/#user#/g, userName);
    return `

${menuTopBorder}
👑 *MENU DO DONO - SENHOR DO VOID*
${menuTopBorder}

◈ 📚 INÍCIO
▸ ${prefix}tutorial     - Ver tutorial

◈ ${aiMenuTitle}
▸ ${prefix}setgroq <key> - Configurar GROQ API
▸ ${prefix}setgroq       - Ver status

◈ 👑 REAÇÕES POR NOME
▸ ${prefix}reacao            - Ver lista
▸ ${prefix}reacao add        - Adicionar reação
▸ ${prefix}reacao excluir    - Excluir reação
▸ ${prefix}reacao toggle     - Ativar/desativar

◈ ${botConfigMenuTitle}
▸ ${prefix}prefixo        - Mudar prefixo
▸ ${prefix}numerodono     - Definir número dono
▸ ${prefix}nomedono       - Nome do dono
▸ ${prefix}nomebot        - Nome do bot
▸ ${prefix}fotobot        - Foto do bot
▸ ${prefix}fotomenu       - Foto do menu
▸ ${prefix}videomenu      - Vídeo do menu
▸ ${prefix}audiomenu      - Áudio do menu

◈ ${menuDesignMenuTitle}
▸ ${prefix}designmenu     - Ver design atual
▸ ${prefix}setborda       - Configurar borda
▸ ${prefix}setitem        - Ícone de item
▸ ${prefix}settitulo      - Ícone de título
▸ ${prefix}setheader      - Configurar header
▸ ${prefix}resetdesign    - Resetar design

◈ ${automationMenuTitle}
▸ ${prefix}addauto        - Adicionar auto-resposta
▸ ${prefix}addautomidia   - Auto-resposta com mídia
▸ ${prefix}listauto       - Listar autos
▸ ${prefix}delauto        - Deletar auto
▸ ${prefix}addreact       - Adicionar reação automática
▸ ${prefix}addnopref      - Comando sem prefixo

◈ ${commandCustomMenuTitle}
▸ ${prefix}addcmd         - Adicionar comando
▸ ${prefix}addcmdmidia    - Comando com mídia
▸ ${prefix}listcmd        - Listar comandos
▸ ${prefix}delcmd         - Deletar comando
▸ ${prefix}addalias       - Adicionar alias
▸ ${prefix}addblackglobal - Blacklist global

◈ ${commandLimitingMenuTitle}
▸ ${prefix}cmdlimitar     - Limitar comando
▸ ${prefix}cmddeslimitar  - Deslimitar
▸ ${prefix}cmdlimites     - Ver limites

◈ ${userManagementMenuTitle}
▸ ${prefix}addsubdono     - Adicionar sub-dono
▸ ${prefix}delsubdono     - Remover sub-dono
▸ ${prefix}addpremium     - Adicionar premium
▸ ${prefix}delpremium     - Remover premium
▸ ${prefix}listprem       - Listar premium
▸ ${prefix}bangp          - Ban global
▸ ${prefix}unbangp        - Desban global

◈ ${rentalSystemMenuTitle}
▸ ${prefix}modoaluguel    - Ativar modo aluguel
▸ ${prefix}gerarcod       - Gerar código
▸ ${prefix}listaraluguel  - Listar aluguéis
▸ ${prefix}estenderaluguel - Estender
▸ ${prefix}dayfree        - Dia grátis

◈ ${subBotsMenuTitle}
▸ ${prefix}addsubbot      - Adicionar sub-bot
▸ ${prefix}removesubbot   - Remover sub-bot
▸ ${prefix}listarsubbots  - Listar sub-bots

◈ ${vipSystemMenuTitle}
▸ ${prefix}addcmdvip      - Adicionar comando VIP
▸ ${prefix}removecmdvip   - Remover comando VIP
▸ ${prefix}listcmdvip     - Listar comandos VIP
▸ ${prefix}menuvip        - Ver menu VIP

◈ ${botControlMenuTitle}
▸ ${prefix}atualizar      - Atualizar bot
▸ ${prefix}reiniciar      - Reiniciar
▸ ${prefix}entrar         - Entrar em grupo
▸ ${prefix}sairgp         - Sair do grupo
▸ ${prefix}blockcmdg      - Bloquear comando global
▸ ${prefix}blockuserg     - Bloquear usuário global

◈ ${monitoringMenuTitle}
▸ ${prefix}listagp        - Listar grupos
▸ ${prefix}antipv         - Anti-pv
▸ ${prefix}antispamcmd    - Anti-spam comando
▸ ${prefix}limpardb       - Limpar banco
▸ ${prefix}nuke           - Destruir grupo
▸ ${prefix}reviverqr      - Reviver QR code

◈ ${broadcastMenuTitle}
▸ ${prefix}tm             - Transmitir em grupos
▸ ${prefix}tm2            - Transmitir privado
▸ ${prefix}divdono        - Divulgar (auto)

◈ ${smmMenuTitle}
▸ ${prefix}smm saldo      - Ver saldo
▸ ${prefix}smm servicos   - Ver serviços
▸ ${prefix}smm pedido     - Fazer pedido
▸ ${prefix}smm setkey     - Definir API key

${bottomBorder}

◈ *O Void obedece apenas a ti* ◈
_"Tu és o senhor das sombras..."_`;
}
export default menuDono;

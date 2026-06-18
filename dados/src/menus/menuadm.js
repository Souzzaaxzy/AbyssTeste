export default async function menuadm(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║        🌌 ${botName} - PAINEL DO VOID 🌌        ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║        Você comanda as sombras...                ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
    menuTitleIcon = "◈",
    menuItemIcon = "▸",
    separatorIcon = "─",
    middleBorder = "",
    adminMenuTitle = "🛡️ GESTÃO DE USUÁRIOS",
    managementMenuTitle = "💬 GESTÃO DO GRUPO",
    securityMenuTitle = "🔒 SEGURANÇA",
    moderatorsMenuTitle = "👥 MODERADORES",
    partnershipsMenuTitle = "🤝 PARCERIAS",
    activationsMenuTitle = "⚡ ATIVAÇÕES",
    settingsMenuTitle = "🎨 CONFIGURAÇÕES",
    electionMenuTitle = "🏛️ SISTEMA DE ELEIÇÃO",
    alphasMenuTitle = "🐺 CARGO ALPHA"
} = {}) {
    return `

${menuTopBorder}
⚙️ *PAINEL DE ADMINISTRAÇÃO*
${menuTopBorder}

◈ ${electionMenuTitle}
▸ ${prefix}eleicao         - Iniciar eleição
▸ ${prefix}cand            - Candidatar-se
▸ ${prefix}tempeleicao     - Configurar tempos

◈ ${adminMenuTitle}
▸ ${prefix}ban             - Banir usuário
▸ ${prefix}roletaban       - Roleta de ban
▸ ${prefix}ban2            - Ban alternativo
▸ ${prefix}enquete         - Criar enquete
▸ ${prefix}chamar @user    - Chamar usuário
▸ ${prefix}bam             - Ban falso
▸ ${prefix}promover        - Promover a admin
▸ ${prefix}rebaixar        - Rebaixar
▸ ${prefix}mute            - Silenciar
▸ ${prefix}desmute         - Desilenciar
▸ ${prefix}adv             - Dar advertência
▸ ${prefix}rmadv           - Remover advertência
▸ ${prefix}listadv         - Listar avisos
▸ ${prefix}checkativo      - Verificar atividade

◈ 🔒 CONTROLE DE ACESSO
▸ ${prefix}blockuser       - Bloquear usuário
▸ ${prefix}unblockuser     - Desbloquear
▸ ${prefix}addblacklist    - Adicionar à blacklist
▸ ${prefix}blockcmd        - Bloquear comando
▸ ${prefix}unblockcmd      - Desbloquear comando

◈ ${managementMenuTitle}
▸ ${prefix}del             - Deletar mensagem
▸ ${prefix}limpar          - Limpar chat
▸ ${prefix}marcar          - Marcar todos
▸ ${prefix}hidetag         - Marcar隐秘
▸ ${prefix}sorteio         - Sortear
▸ ${prefix}fotogrupo       - Mudar foto
▸ ${prefix}addregra        - Adicionar regra
▸ ${prefix}role.criar      - Criar cargo

◈ ⚙️ GRUPO & PERMISSÕES
▸ ${prefix}linkgp          - Ver link
▸ ${prefix}grupo A/F       - Abrir/fechar
▸ ${prefix}opengp HH:MM    - Agendar abertura
▸ ${prefix}closegp HH:MM   - Agendar fechamento
▸ ${prefix}solicitacoes    - Ver solicitudes
▸ ${prefix}aprovar         - Aprovar entrada

◈ ${moderatorsMenuTitle}
▸ ${prefix}addmod          - Adicionar mod
▸ ${prefix}delmod          - Remover mod
▸ ${prefix}listmods        - Listar mods

◈ ${alphasMenuTitle}
▸ ${prefix}addalpha        - Adicionar Alpha
▸ ${prefix}delalpha        - Remover Alpha
▸ ${prefix}listalphas      - Listar Alphas

◈ 🔒 SEGURANÇA & PROTEÇÃO
▸ ${prefix}antiflood       - Anti-flood
▸ ${prefix}antidoc         - Anti-documento
▸ ${prefix}antiloc         - Anti-localização
▸ ${prefix}antifig         - Anti-figurinha
▸ ${prefix}antilinkgp      - Anti-link de grupo
▸ ${prefix}antiporn        - Anti-pornografia
▸ ${prefix}antitoxic       - Anti-toxicidade
▸ ${prefix}antipalavra     - Anti-palavras

◈ ${settingsMenuTitle}
▸ ${prefix}legendabv       - Configurar boas-vindas
▸ ${prefix}fotobv          - Foto de boas-vindas
▸ ${prefix}saida           - Configurar saída
▸ ${prefix}setprefix       - Definir prefixo

◈ ⚡ ATIVAÇÕES
▸ ${prefix}autodl          - Auto-download
▸ ${prefix}modorpg         - Ativar RPG
▸ ${prefix}modobn          - Modo boas-vindas
▸ ${prefix}bemvindo        - Sistema de BV
▸ ${prefix}autosticker     - Auto-sticker
▸ ${prefix}modolite        - ModoLite

◈ 🤖 SISTEMA DE NPCs
▸ ${prefix}npc on/off      - Ligar/desligar NPC
▸ ${prefix}npc config      - Configurar NPC

${bottomBorder}

◈ *O Void te dá poder absoluto* ◈
_"Você agora comanda as sombras..."_`;
}

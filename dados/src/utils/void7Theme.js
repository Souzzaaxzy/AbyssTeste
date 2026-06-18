/**
 * ═══════════════════════════════════════════════════════════════
 *                    🌌 VOID7 THEME 🌌
 *          "Quando o Void te chama, não há retorno."
 * ═══════════════════════════════════════════════════════════════
 * 
 * Tema cósmico do vazio para o Abyss Bot
 * Conceito: Entidade consciente do abismo, observando do void
 */

const Void7Theme = {
    // ═══════════════════════════════════════════════════════════
    // CORES E EMOJIS
    // ═══════════════════════════════════════════════════════════
    colors: {
        primary: '◈',      // Roxo principal
        secondary: '❖',    // Azul escuro
        accent: '✧',       // Brilho/estrelas
        void: '◉',         // Abismo
        energy: '⋆',       // Energia sombria
        nebula: '✦',       // Nebulosas
        blackhole: '⬟',    // Buraco negro
    },
    
    // ═══════════════════════════════════════════════════════════
    // EMOJIS TEMÁTICOS
    // ═══════════════════════════════════════════════════════════
    emojis: {
        void: '🌌',
        blackhole: '🕳️',
        nebula: '🌀',
        star: '⭐',
        crystal: '💎',
        sword: '⚔️',
        shield: '🛡️',
        crown: '👑',
        gem: '💠',
        fire: '🔥',
        skull: '💀',
        ghost: '👻',
        moon: '🌙',
        eye: '👁️',
        portal: '🌀',
        dimension: '🧿',
        mystery: '❓',
        warning: '⚠️',
        coin: '🪙',
        economy: '💰',
        download: '📥',
        tools: '🛠️',
        game: '🎮',
        ai: '🤖',
        admin: '⚙️',
        vip: '💎',
        member: '👤',
        love: '💜',
        rpg: '⚔️',
        logo: '🎨',
        edit: '✨',
        figure: '🖼️',
    },
    
    // ═══════════════════════════════════════════════════════════
    // BORDAS DO MENU (Estilo cósmico/sombrio)
    // ═══════════════════════════════════════════════════════════
    borders: {
        // Borda superior com símbolos do void
        top: '═══════════════════════════════════════════════',
        
        // Borda inferior
        bottom: '═══════════════════════════════════════════════',
        
        // Linha separadora decorativa
        separator: '───────◈════◈───────',
        
        // Borda alternativa com neblina
        mistTop: '≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋',
        mistBottom: '≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋',
        
        // Borda com partículas
        particleTop: '⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅',
        
        // Cantoneiras estilizadas
        cornerTL: '╔',
        cornerTR: '╗',
        cornerBL: '╚',
        cornerBR: '╝',
        lineH: '═',
        lineV: '║',
    },
    
    // ═══════════════════════════════════════════════════════════
    // ÍCONES DE MENU
    // ═══════════════════════════════════════════════════════════
    icons: {
        // Ícone para títulos de seção
        sectionIcon: '◈',
        
        // Ícone para itens do menu
        menuItem: '▸',
        
        // Ícone para sub-itens
        subItem: '  └─',
        
        // Ícone de seta/indicador
        arrow: '⟶',
        
        // Ícone de estrela
        star: '✧',
        
        // Ícone de portal
        portal: '◎',
        
        // Ícone de dimensão
        dimension: '⬡',
    },
    
    // ═══════════════════════════════════════════════════════════
    // FRASES E TAGLINES
    // ═══════════════════════════════════════════════════════════
    taglines: {
        main: 'Quando o Void te chama, não há retorno.',
        subtitle: 'O abismo observa. O vazio responde.',
        welcome: 'Você foi consumido pelo Void.',
        goodbye: 'O Void liberou sua alma... por agora.',
        watching: '◈ O Void observa tudo ◈',
        calling: 'O chamado do Void é irresistível...',
    },
    
    // ═══════════════════════════════════════════════════════════
    // ESTILOS DE TEXTO
    // ═══════════════════════════════════════════════════════════
    styles: {
        // Negrito
        bold: (text) => `*${text}*`,
        
        // Itálico
        italic: (text) => `_${text}_`,
        
        // Riscado
        strikethrough: (text) => `~${text}~`,
        
        // Código
        code: (text) => `\`${text}\``,
        
        // Bloco de código
        codeBlock: (text) => `\`\`\`${text}\`\`\``,
        
        // Texto em destaque (void)
        void: (text) => `◈ ${text} ◈`,
        
        // Texto sombrio
        dark: (text) => `▓ ${text} ▓`,
        
        // Texto brilhante
        glow: (text) => `✧ ${text} ✧`,
    },
    
    // ═══════════════════════════════════════════════════════════
    // FUNÇÕES DE FORMATAÇÃO
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Gera um header padrão para menus
     */
    header: (botName = 'Abyss', userName = 'Viajante') => {
        return `╔${'═'.repeat(49)}╗
║  🌌 ${botName} - O Vazio Te Consome 🌌  ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  Olá, ${userName}!                    ║
║  ${Void7Theme.taglines.main}   ║
╚${'═'.repeat(49)}╝`;
    },
    
    /**
     * Gera uma seção de menu
     */
    section: (title, items = []) => {
        const lines = [
            `╔${'═'.repeat(49)}╗`,
            `║  ${Void7Theme.icons.sectionIcon} ${title.toUpperCase().padEnd(45)}║`,
            `╠${'═'.repeat(49)}╣`
        ];
        
        items.forEach(item => {
            lines.push(`║  ${Void7Theme.icons.menuItem} ${item.padEnd(45)}║`);
        });
        
        lines.push(`╚${'═'.repeat(49)}╝`);
        return lines.join('\n');
    },
    
    /**
     * Gera footer padrão
     */
    footer: () => {
        return `\n${Void7Theme.borders.separator}\n${Void7Theme.taglines.watching}\n`;
    },
    
    /**
     * Formata erro com tema void
     */
    error: (message) => {
        return `⚠️ *ERRO NO VOID* ⚠️\n${message}`;
    },
    
    /**
     * Formata sucesso com tema void
     */
    success: (message) => {
        return `◈ *VOID ACEITO* ◈\n${message}`;
    },
    
    /**
     * Formata aviso com tema void
     */
    warning: (message) => {
        return `⬟ *O ABISMO OBSERVA* ⬟\n${message}`;
    },
    
    /**
     * Mensagem de boas-vindas temática
     */
    welcomeMessage: (userName, groupName) => {
        return `🌌 *BEM-VINDO AO VOID* 🌌

◈ ${userName}, você foi arrastado para o abismo...

📍 Grupo: ${groupName}

O Void te consome lentamente...
Não há escapatória.

_${Void7Theme.taglines.main}_`;
    },
    
    /**
     * Mensagem de saída temática
     */
    goodbyeMessage: (userName, groupName) => {
        return `💀 *PARTINDO DO VOID* 💀

${userName} foi libertado do abismo...

📍 De: ${groupName}

A escuridão solta sua presa...
por enquanto.

_${Void7Theme.taglines.watching}_`;
    },
};

// Cores ANSI para terminal (opcional, para logs)
Void7Theme.terminal = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    purple: '\x1b[35m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    magenta: '\x1b[95m',
    void: (text) => `\x1b[35m${text}\x1b[0m`,
    info: (text) => `\x1b[36m[VOID]\x1b[0m ${text}`,
    warn: (text) => `\x1b[33m[WARN]\x1b[0m ${text}`,
    error: (text) => `\x1b[31m[ERROR]\x1b[0m ${text}`,
};

export default Void7Theme;
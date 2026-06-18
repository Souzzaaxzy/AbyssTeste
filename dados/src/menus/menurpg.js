export default async function menurpg(prefix, botName = "Abyss", userName = "Viajante", {
    header = `╔══════════════════════════════════════════════╗
║     ⚔️ *MODO RPG - AS PROFUZEIS DO VOID* ⚔️     ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║            Olá, ${userName}!                     ║
║       Mergulhe no abismo... se conseguir.        ║
╚══════════════════════════════════════════════╝`,
    menuTopBorder = "═══════════════════════════════════════════════",
    bottomBorder = "═══════════════════════════════════════════════",
    menuTitleIcon = "◈",
    menuItemIcon = "▸",
    separatorIcon = "─",
    middleBorder = "",
    profileMenuTitle = "👤 PERFIL & STATUS",
    economyMenuTitle = "💰 ECONOMIA & FINANÇAS",
    activitiesMenuTitle = "🎯 ATIVIDADES DIÁRIAS",
    adventureMenuTitle = "🗺️ AVENTURA & EXPLORAÇÃO",
    combatMenuTitle = "⚔️ COMBATE & BATALHAS",
    craftingMenuTitle = "🔨 CRAFTING & EQUIPAMENTOS",
    socialMenuTitle = "💜 SOCIAL & INTERAÇÕES",
    familyMenuTitle = "👨‍👩‍👧‍👦 FAMÍLIA & ADOÇÃO",
    guildMenuTitle = "🏰 CLÃ & COMUNIDADE",
    questMenuTitle = "📜 MISSÕES & CONQUISTAS",
    petsMenuTitle = "🐾 PETS & COMPANHEIROS",
    reputationMenuTitle = "⭐ REPUTAÇÃO & FAMA",
    investmentMenuTitle = "📈 INVESTIMENTOS & BOLSA",
    gamblingMenuTitle = "🎰 CASSINO & APOSTAS",
    evolutionMenuTitle = "🌟 EVOLUÇÃO & PRESTIGE",
    eventsMenuTitle = "🎉 EVENTOS",
    premiumMenuTitle = "💎 LOJA PREMIUM",
    adminMenuTitle = "🔧 ADMIN RPG (DONO)"
} = {}) {
  const h = header.replace(/#user#/g, userName);
    return `

${menuTopBorder}
⚔️ *MENU RPG - AS PROFUZEIS DO VOID*
${menuTopBorder}

◈ ${profileMenuTitle}
▸ ${prefix}perfilrpg    - Ver seu perfil
▸ ${prefix}carteira     - Ver saldo
▸ ${prefix}toprpg       - Ranking global
▸ ${prefix}rankglobal   - Top jogadores
▸ ${prefix}ranklvl      - Ranking de nível
▸ ${prefix}inv          - Inventário
▸ ${prefix}equipamentos - Seus equipamentos
▸ ${prefix}conquistas   - Conquistas

◈ ${evolutionMenuTitle}
▸ ${prefix}evoluir      - Evoluir personagem
▸ ${prefix}prestige     - Prestígio
▸ ${prefix}streak       - Ver sequência
▸ ${prefix}reivindicar  - Reivindicar recompensas
▸ ${prefix}speedup      - Acelerar evolução

◈ ${economyMenuTitle}
▸ ${prefix}dep <valor|all>     - Depositar
▸ ${prefix}sacar <valor|all>   - Sacar
▸ ${prefix}pix @user <valor>   - Transferir
▸ ${prefix}loja               - Abrir loja
▸ ${prefix}comprar <item>     - Comprar item
▸ ${prefix}vender <item> <qtd> - Vender item
▸ ${prefix}vagas              - Ver vagas de emprego
▸ ${prefix}emprego <vaga>     - Trabalhar
▸ ${prefix}desafiosemanal     - Desafio semanal
▸ ${prefix}desafiomensal      - Desafio mensal

◈ ${investmentMenuTitle}
▸ ${prefix}investir           - Ver ações
▸ ${prefix}investir <ação> <qtd> - Investir
▸ ${prefix}sell <ação> <qtd>  - Vender ações

◈ ${gamblingMenuTitle}
▸ ${prefix}dados <valor>           - Jogar dados
▸ ${prefix}coinflip <cara|coroa>   - Cara ou coroa
▸ ${prefix}crash <valor>           - Crash
▸ ${prefix}slots <valor>           - Slots
▸ ${prefix}apostar <valor>         - Apostar
▸ ${prefix}roleta <valor> <cor>    - Roleta
▸ ${prefix}blackjack <valor>       - Blackjack
▸ ${prefix}loteria                - Ver loteria
▸ ${prefix}loteria comprar <qtd>  - Comprar bilhete
▸ ${prefix}topriqueza             - Mais ricos

◈ ${activitiesMenuTitle}
▸ ${prefix}diario      - Recompensa diária
▸ ${prefix}work        - Trabalhar
▸ ${prefix}mine        - Minerar
▸ ${prefix}fish        - Pescar
▸ ${prefix}coletar     - Coletar recursos
▸ ${prefix}caçar       - Caçar
▸ ${prefix}plantar <planta>    - Plantar
▸ ${prefix}cultivar <planta>   - Cultivar
▸ ${prefix}plantacao           - Ver plantação
▸ ${prefix}cook <receita>      - Cozinhar
▸ ${prefix}receitas            - Ver receitas
▸ ${prefix}eat <comida>        - Comer

◈ ${adventureMenuTitle}
▸ ${prefix}explore     - Explorar masmorras
▸ ${prefix}masmorra    - Entrar na masmorra
▸ ${prefix}bossrpg     - Lutar contra boss
▸ ${prefix}eventos     - Ver eventos ativos

◈ ⚔️ CLASSES & PROFISSÕES
▸ ${prefix}class       - Ver classes disponíveis
▸ ${prefix}class <nome> - Escolher classe

◈ 🏠 HOUSING
▸ ${prefix}casa        - Ver sua casa
▸ ${prefix}casa comprar <tipo> - Comprar casa
▸ ${prefix}casa coletar       - Coletar renda

◈ ${combatMenuTitle}
▸ ${prefix}duelrpg @user  - Duelo
▸ ${prefix}arena          - Arena de combate
▸ ${prefix}torneio        - Torneio
▸ ${prefix}assaltar @user - Assaltar jogador
▸ ${prefix}crime          - Commeter crime
▸ ${prefix}desafio        - Criar desafio

◈ ${craftingMenuTitle}
▸ ${prefix}forge <item>   - Forjar item
▸ ${prefix}enchant        - Encantar equipamento
▸ ${prefix}reparar <item> - Reparar
▸ ${prefix}materiais      - Ver materiais

◈ ${socialMenuTitle}
▸ ${prefix}casar @user    - Casar
▸ ${prefix}divorciar      - Divorciar
▸ ${prefix}namorar @user  - Namorar
▸ ${prefix}terminar       - Terminar namoro
▸ ${prefix}relacionamento - Ver relacionamento
▸ ${prefix}abracarrpg @user - Abrçar
▸ ${prefix}beijarrpg @user - Beijar

◈ ${guildMenuTitle}
▸ ${prefix}criarcla <nome>        - Criar clã
▸ ${prefix}cla                    - Ver seu clã
▸ ${prefix}convidar @user         - Convidar
▸ ${prefix}aceitarconvite <clã>   - Aceitar convite
▸ ${prefix}expulsar @user         - Expulsar

◈ ${petsMenuTitle}
▸ ${prefix}pets       - Ver pets
▸ ${prefix}adotar <pet> - Adotar pet
▸ ${prefix}feed <nº>   - Alimentar
▸ ${prefix}petbattle <nº> @user - Batalhar pet

◈ ${reputationMenuTitle}
▸ ${prefix}rep       - Ver reputação
▸ ${prefix}vote @user - Votar

◈ ${premiumMenuTitle}
▸ ${prefix}lojapremium       - Ver loja premium
▸ ${prefix}comprarpremium    - Comprar item premium
▸ ${prefix}boost             - Ver boosts
▸ ${prefix}doar <valor>      - Doar ao clã

${bottomBorder}

◈ *O Void observa suas batalhas* ◈
_"Mergulhe no abismo... se conseguir."_`;
}

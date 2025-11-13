// ===========================
// ECLIPSE LEGENDS - Main Entry Point
// ===========================

// Game initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 ECLIPSE LEGENDS - Initialisation...');

    // Check if first time player
    if (game.state.isNewPlayer || Object.keys(game.state.ownedHeroes).length === 0) {
        showWelcomeScreen();
    } else {
        // Show offline rewards if applicable
        showOfflineRewards();
    }

    // Initialize UI
    ui.init();
    ui.updateAll();

    // Start passive gold generation
    startPassiveGoldGeneration();

    console.log('✅ Jeu initialisé!');
});

// Show welcome screen for new players
function showWelcomeScreen() {
    const welcomeMsg = `
🌑 Bienvenue dans ECLIPSE LEGENDS 🌑

Dans un monde brisé par l'Éclipse Éternelle, vous êtes un Conjurateur capable d'invoquer des héros légendaires.

Vos héros combattent automatiquement, même hors ligne!

🎁 Vous avez reçu 500 💎 Gemmes de départ!
🎁 3 héros de départ vous ont rejoints!

Cliquez sur "▶️ Auto" pour commencer votre aventure!
    `;

    alert(welcomeMsg);

    // Initialize starter heroes
    game.initNewGame();
    ui.updateAll();
}

// Show offline rewards
function showOfflineRewards() {
    const rewards = game.calculateOfflineRewards();

    // Only show if player was offline for more than 5 minutes
    if (rewards.timeAway > 300000) {
        const hours = Math.floor(rewards.timeAway / 3600000);
        const minutes = Math.floor((rewards.timeAway % 3600000) / 60000);

        const offlineMsg = `
┌─────────────────────────────────────┐
│   WELCOME BACK, SUMMONER!           │
├─────────────────────────────────────┤
│ Temps d'absence: ${hours}h ${minutes}m           │
│                                     │
│ 💰 Or gagné: ${ui.formatNumber(rewards.goldEarned)}       │
│ ⚔️  Stages estimés: ${rewards.stagesCleared}        │
│                                     │
│    [Récompenses récupérées!]        │
└─────────────────────────────────────┘
        `;

        console.log(offlineMsg);

        game.applyOfflineRewards(rewards);

        setTimeout(() => {
            alert(`Bon retour!\n\nVous étiez absent ${hours}h ${minutes}m\n\n💰 +${ui.formatNumber(rewards.goldEarned)} Or`);
        }, 500);
    }

    game.state.lastLogin = Date.now();
    game.saveGame();
}

// Passive gold generation (for active play)
function startPassiveGoldGeneration() {
    setInterval(() => {
        if (!combat.isRunning && !combat.isPaused) {
            const goldPerSec = GAME_DATA.goldPerSecond(game.state.progression.currentStage);
            game.addGold(goldPerSec / 10); // Divide by 10 since interval is every 1 second
            ui.updateHeader();
        }
    }, 1000);
}

// Global error handler
window.addEventListener('error', (e) => {
    console.error('❌ Erreur de jeu:', e.error);
});

// Prevent accidental page close
window.addEventListener('beforeunload', (e) => {
    game.saveGame();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Space = toggle auto-progress
    if (e.code === 'Space' && ui.currentScreen === 'combat') {
        e.preventDefault();
        document.getElementById('auto-progress-btn')?.click();
    }

    // T = tap attack
    if (e.code === 'KeyT' && ui.currentScreen === 'combat') {
        e.preventDefault();
        combat.tapAttack();
    }

    // S = speed toggle
    if (e.code === 'KeyS' && ui.currentScreen === 'combat') {
        e.preventDefault();
        document.getElementById('speed-btn')?.click();
    }

    // Numbers 1-5 = switch screens
    const screenKeys = {
        'Digit1': 'combat',
        'Digit2': 'heroes',
        'Digit3': 'summon',
        'Digit4': 'shop',
        'Digit5': 'settings'
    };

    if (screenKeys[e.code]) {
        ui.switchScreen(screenKeys[e.code]);
    }
});

// Console Easter Egg
console.log(`
%c
⚔️ ECLIPSE LEGENDS - Rebirth of the Realms ⚔️

Développé avec ❤️  en JavaScript
Concept: Idle RPG + Gacha

Raccourcis clavier:
- ESPACE: Auto-combat
- T: Tap Attack
- S: Vitesse
- 1-5: Changer d'écran

Bon jeu!
`, 'color: #ffd700; font-size: 14px; font-weight: bold;');

// Development helpers (accessible in console)
window.dev = {
    addGold: (amount) => {
        game.addGold(amount);
        ui.updateHeader();
        console.log(`+${amount} Or`);
    },
    addGems: (amount) => {
        game.addGems(amount);
        ui.updateHeader();
        console.log(`+${amount} Gemmes`);
    },
    addHero: (heroId) => {
        game.addHero(heroId);
        ui.updateAll();
        console.log(`Héros ajouté: ${heroId}`);
    },
    giveAllHeroes: () => {
        Object.keys(GAME_DATA.heroes).forEach(id => {
            game.addHero(id, 10);
        });
        ui.updateAll();
        console.log('Tous les héros ajoutés!');
    },
    resetPity: () => {
        game.state.gacha.pityCounter = 0;
        ui.updateSummonScreen();
        console.log('Pity counter réinitialisé');
    },
    skipToStage: (stage) => {
        game.state.progression.currentStage = stage;
        game.state.progression.highestStage = stage;
        ui.updateAll();
        console.log(`Stage avancé à ${stage}`);
    }
};

console.log('%cMode développeur activé! Tapez "dev" dans la console pour voir les commandes.', 'color: #00ff00');

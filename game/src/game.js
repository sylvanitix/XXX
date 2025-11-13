// ===========================
// ECLIPSE LEGENDS - Game Engine
// ===========================

class GameEngine {
    constructor() {
        this.state = this.getDefaultState();
        this.loadGame();
        this.lastSaveTime = Date.now();
        this.autoSaveInterval = 30000; // Save every 30 seconds
        this.startAutoSave();
    }

    getDefaultState() {
        return {
            // Player data
            player: {
                level: 1,
                exp: 0,
                gold: 0,
                gems: 500, // Starting gems
                essence: 0
            },

            // Progression
            progression: {
                currentStage: 1,
                currentChapter: 1,
                highestStage: 1,
                currentWave: 1
            },

            // Heroes owned
            ownedHeroes: {},

            // Active team (max 5 heroes)
            activeTeam: [],

            // Gacha
            gacha: {
                pityCounter: 0,
                totalSummons: 0
            },

            // Settings
            settings: {
                musicVolume: 50,
                sfxVolume: 50,
                battleSpeed: 1,
                autoProgress: false
            },

            // Stats
            stats: {
                totalDamageDealt: 0,
                totalGoldEarned: 0,
                totalSummons: 0,
                enemiesDefeated: 0
            },

            // Last login time for offline rewards
            lastLogin: Date.now(),

            // First time player flag
            isNewPlayer: true
        };
    }

    // Initialize new game
    initNewGame() {
        this.state = this.getDefaultState();

        // Give starter heroes
        GAME_DATA.starterHeroes.forEach(heroId => {
            this.addHero(heroId, 1);
        });

        // Set active team with starters
        this.state.activeTeam = GAME_DATA.starterHeroes.slice(0, 5);

        this.state.isNewPlayer = false;
        this.saveGame();
    }

    // Add hero to collection
    addHero(heroId, level = 1) {
        const heroData = GAME_DATA.heroes[heroId];
        if (!heroData) return false;

        // If hero already owned, convert to fragments (duplicate system)
        if (this.state.ownedHeroes[heroId]) {
            const fragmentValue = this.getFragmentValue(heroData.rarity);
            this.state.player.essence += fragmentValue;
            return 'duplicate';
        }

        // Create hero instance
        this.state.ownedHeroes[heroId] = {
            id: heroId,
            level: level,
            exp: 0,
            stars: heroData.stars,
            currentHp: this.getHeroStat(heroId, 'hp'),
            inTeam: false
        };

        return true;
    }

    // Get fragment value for duplicate
    getFragmentValue(rarity) {
        const values = {
            common: 10,
            rare: 50,
            epic: 200,
            legendary: 1000
        };
        return values[rarity] || 0;
    }

    // Calculate hero stats based on level
    getHeroStat(heroId, stat) {
        const hero = this.state.ownedHeroes[heroId];
        const baseStats = GAME_DATA.heroes[heroId].baseStats;
        const level = hero ? hero.level : 1;

        // Stats scale by 6% per level
        const growthRate = 0.06;
        const multiplier = 1 + (level - 1) * growthRate;

        return Math.floor(baseStats[stat] * multiplier);
    }

    // Add hero to active team
    addToTeam(heroId) {
        if (this.state.activeTeam.length >= 5) {
            return false;
        }
        if (!this.state.ownedHeroes[heroId]) {
            return false;
        }
        if (this.state.activeTeam.includes(heroId)) {
            return false;
        }

        this.state.activeTeam.push(heroId);
        this.state.ownedHeroes[heroId].inTeam = true;
        return true;
    }

    // Remove hero from team
    removeFromTeam(heroId) {
        const index = this.state.activeTeam.indexOf(heroId);
        if (index > -1) {
            this.state.activeTeam.splice(index, 1);
            this.state.ownedHeroes[heroId].inTeam = false;
            return true;
        }
        return false;
    }

    // Level up hero
    levelUpHero(heroId) {
        const hero = this.state.ownedHeroes[heroId];
        if (!hero) return false;

        const cost = this.getLevelUpCost(hero.level);
        if (this.state.player.gold < cost) return false;

        this.state.player.gold -= cost;
        hero.level++;
        hero.currentHp = this.getHeroStat(heroId, 'hp');

        this.saveGame();
        return true;
    }

    // Get cost to level up
    getLevelUpCost(currentLevel) {
        return Math.floor(100 * Math.pow(currentLevel, 2));
    }

    // Calculate team power
    getTeamPower() {
        let power = 0;
        this.state.activeTeam.forEach(heroId => {
            const hero = this.state.ownedHeroes[heroId];
            if (hero) {
                const stats = GAME_DATA.heroes[heroId].baseStats;
                const level = hero.level;
                // Simple power calculation
                power += (stats.hp + stats.atk * 10 + stats.def * 5) * (level / 10);
            }
        });
        return Math.floor(power);
    }

    // Calculate team DPS
    getTeamDPS() {
        let dps = 0;
        this.state.activeTeam.forEach(heroId => {
            const atk = this.getHeroStat(heroId, 'atk');
            const spd = this.getHeroStat(heroId, 'spd');
            // DPS = ATK * (SPD / 1000)
            dps += atk * (spd / 1000);
        });
        return Math.floor(dps);
    }

    // Add resources
    addGold(amount) {
        this.state.player.gold += amount;
        this.state.stats.totalGoldEarned += amount;
    }

    addGems(amount) {
        this.state.player.gems += amount;
    }

    addEssence(amount) {
        this.state.player.essence += amount;
    }

    // Spend resources
    spendGold(amount) {
        if (this.state.player.gold < amount) return false;
        this.state.player.gold -= amount;
        return true;
    }

    spendGems(amount) {
        if (this.state.player.gems < amount) return false;
        this.state.player.gems -= amount;
        return true;
    }

    // Stage progression
    advanceWave() {
        this.state.progression.currentWave++;
        if (this.state.progression.currentWave > 10) {
            this.advanceStage();
        }
    }

    advanceStage() {
        this.state.progression.currentStage++;
        this.state.progression.currentWave = 1;

        if (this.state.progression.currentStage > this.state.progression.highestStage) {
            this.state.progression.highestStage = this.state.progression.currentStage;
        }

        // Update chapter (every 100 stages)
        this.state.progression.currentChapter = Math.floor((this.state.progression.currentStage - 1) / 100) + 1;
    }

    // Calculate offline rewards
    calculateOfflineRewards() {
        const now = Date.now();
        const lastLogin = this.state.lastLogin;
        const timeDiff = now - lastLogin;

        // Max 12 hours of offline rewards
        const maxOfflineTime = 12 * 60 * 60 * 1000;
        const offlineTime = Math.min(timeDiff, maxOfflineTime);

        // Calculate gold earned
        const goldPerSec = GAME_DATA.goldPerSecond(this.state.progression.currentStage);
        const offlineMultiplier = 0.7; // 70% efficiency offline
        const goldEarned = Math.floor((offlineTime / 1000) * goldPerSec * offlineMultiplier);

        // Calculate stages cleared (approximate)
        const avgStageTime = 60000; // 60 seconds per stage
        const stagesCleared = Math.floor(offlineTime / avgStageTime);

        return {
            timeAway: offlineTime,
            goldEarned: goldEarned,
            stagesCleared: stagesCleared
        };
    }

    // Apply offline rewards
    applyOfflineRewards(rewards) {
        this.addGold(rewards.goldEarned);
        // Don't actually advance stages offline, just show potential
        this.state.lastLogin = Date.now();
    }

    // Save game to localStorage
    saveGame() {
        try {
            const saveData = JSON.stringify(this.state);
            localStorage.setItem('eclipseLegends_save', saveData);
            this.lastSaveTime = Date.now();
            return true;
        } catch (e) {
            console.error('Failed to save game:', e);
            return false;
        }
    }

    // Load game from localStorage
    loadGame() {
        try {
            const saveData = localStorage.getItem('eclipseLegends_save');
            if (saveData) {
                this.state = JSON.parse(saveData);
                return true;
            }
        } catch (e) {
            console.error('Failed to load game:', e);
        }
        return false;
    }

    // Start auto-save
    startAutoSave() {
        setInterval(() => {
            this.saveGame();
        }, this.autoSaveInterval);
    }

    // Reset game
    resetGame() {
        if (confirm('Êtes-vous sûr de vouloir réinitialiser votre progression ?')) {
            localStorage.removeItem('eclipseLegends_save');
            location.reload();
        }
    }

    // Export save
    exportSave() {
        const saveData = JSON.stringify(this.state);
        const blob = new Blob([saveData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'eclipseLegends_save.json';
        a.click();
    }
}

// Create global game instance
const game = new GameEngine();

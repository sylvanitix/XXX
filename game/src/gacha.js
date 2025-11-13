// ===========================
// ECLIPSE LEGENDS - Gacha System
// ===========================

class GachaSystem {
    constructor() {
        this.pityCounter = 0;
        this.pityThreshold = 50;
    }

    // Perform summon
    summon(type, count = 1) {
        const cost = this.getSummonCost(type, count);

        // Check if player has enough gems
        if (!game.spendGems(cost)) {
            alert('Pas assez de gemmes!');
            return null;
        }

        const results = [];

        for (let i = 0; i < count; i++) {
            const hero = this.rollHero(type);
            results.push(hero);

            // Add to collection
            const addResult = game.addHero(hero.id);

            if (addResult === 'duplicate') {
                hero.isDuplicate = true;
            }

            // Update stats
            game.state.gacha.totalSummons++;
            game.state.stats.totalSummons++;
        }

        // Save game
        game.saveGame();

        return results;
    }

    // Get summon cost
    getSummonCost(type, count) {
        if (type === 'major' && count === 10) {
            return GAME_DATA.gachaCosts.major10;
        }
        return GAME_DATA.gachaCosts[type] * count;
    }

    // Roll for a hero
    rollHero(summonType) {
        const rates = GAME_DATA.gachaRates[summonType];

        // Check pity system (for major/sacred summons)
        if ((summonType === 'major' || summonType === 'sacred') && game.state.gacha.pityCounter >= this.pityThreshold) {
            // Guaranteed legendary
            game.state.gacha.pityCounter = 0;
            return this.getRandomHeroByRarity('legendary');
        }

        // Normal roll
        const roll = Math.random() * 100;
        let cumulative = 0;
        let selectedRarity = 'common';

        // Determine rarity
        for (const [rarity, rate] of Object.entries(rates)) {
            cumulative += rate;
            if (roll < cumulative) {
                selectedRarity = rarity;
                break;
            }
        }

        // Update pity counter
        if (summonType === 'major' || summonType === 'sacred') {
            if (selectedRarity === 'legendary') {
                game.state.gacha.pityCounter = 0;
            } else {
                game.state.gacha.pityCounter++;
            }
        }

        return this.getRandomHeroByRarity(selectedRarity);
    }

    // Get random hero of specific rarity
    getRandomHeroByRarity(rarity) {
        const heroesOfRarity = Object.values(GAME_DATA.heroes).filter(h => h.rarity === rarity);

        if (heroesOfRarity.length === 0) {
            // Fallback to common if no heroes of that rarity
            return this.getRandomHeroByRarity('common');
        }

        const randomHero = heroesOfRarity[Math.floor(Math.random() * heroesOfRarity.length)];
        return { ...randomHero };
    }

    // Get all available heroes
    getAllHeroes() {
        return Object.values(GAME_DATA.heroes);
    }

    // Get heroes by faction
    getHeroesByFaction(faction) {
        if (faction === 'all') {
            return this.getAllHeroes();
        }
        return Object.values(GAME_DATA.heroes).filter(h => h.faction === faction);
    }

    // Get owned heroes
    getOwnedHeroes() {
        return Object.keys(game.state.ownedHeroes)
            .map(id => ({
                ...GAME_DATA.heroes[id],
                ...game.state.ownedHeroes[id]
            }));
    }

    // Get hero count by rarity
    getHeroCountByRarity() {
        const owned = this.getOwnedHeroes();
        const counts = {
            common: 0,
            rare: 0,
            epic: 0,
            legendary: 0
        };

        owned.forEach(hero => {
            if (counts[hero.rarity] !== undefined) {
                counts[hero.rarity]++;
            }
        });

        return counts;
    }

    // Summon animation data
    getSummonAnimationData(rarity) {
        const animations = {
            common: {
                color: '#9ca3af',
                duration: 1000,
                particles: 10
            },
            rare: {
                color: '#60a5fa',
                duration: 1500,
                particles: 20
            },
            epic: {
                color: '#a78bfa',
                duration: 2000,
                particles: 40
            },
            legendary: {
                color: '#fbbf24',
                duration: 3000,
                particles: 100
            }
        };

        return animations[rarity] || animations.common;
    }
}

// Create global gacha instance
const gacha = new GachaSystem();

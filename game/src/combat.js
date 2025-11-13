// ===========================
// ECLIPSE LEGENDS - Combat System
// ===========================

class CombatEngine {
    constructor() {
        this.heroes = [];
        this.enemies = [];
        this.isRunning = false;
        this.isPaused = false;
        this.battleSpeed = 1;
        this.currentWave = 1;
        this.maxWaves = 10;
        this.autoProgress = false;
        this.combatInterval = null;
        this.tickRate = 100; // ms per tick
        this.tapDamageMultiplier = 0.3; // Tap does 30% of team DPS
    }

    // Initialize battle
    startBattle() {
        this.currentWave = game.state.progression.currentWave;
        this.loadHeroes();
        this.spawnEnemies();
        this.isRunning = true;
        this.isPaused = false;
        this.startCombatLoop();
        this.logMessage('Combat commencé!', 'info');
    }

    // Load player's heroes
    loadHeroes() {
        this.heroes = [];
        game.state.activeTeam.forEach((heroId, index) => {
            const heroData = GAME_DATA.heroes[heroId];
            const heroState = game.state.ownedHeroes[heroId];

            if (heroData && heroState) {
                this.heroes.push({
                    id: heroId,
                    name: heroData.name,
                    icon: heroData.icon,
                    faction: heroData.faction,
                    level: heroState.level,
                    maxHp: game.getHeroStat(heroId, 'hp'),
                    currentHp: game.getHeroStat(heroId, 'hp'),
                    atk: game.getHeroStat(heroId, 'atk'),
                    def: game.getHeroStat(heroId, 'def'),
                    res: game.getHeroStat(heroId, 'res'),
                    spd: game.getHeroStat(heroId, 'spd'),
                    skills: heroData.skills,
                    cooldowns: {},
                    isAlive: true,
                    position: index
                });

                // Initialize skill cooldowns
                heroData.skills.forEach(skill => {
                    this.heroes[this.heroes.length - 1].cooldowns[skill.name] = 0;
                });
            }
        });
    }

    // Spawn enemies for current wave
    spawnEnemies() {
        this.enemies = [];
        const stage = game.state.progression.currentStage;
        const isBossWave = this.currentWave === 10;

        if (isBossWave) {
            // Boss wave
            const bossTemplate = GAME_DATA.enemies.boss;
            this.enemies.push(this.createEnemy(bossTemplate, stage, true));
        } else {
            // Normal wave - 3 enemies
            const enemyTypes = ['slime', 'goblin', 'skeleton', 'demon'];
            const count = GAME_DATA.enemiesPerWave.normal;

            for (let i = 0; i < count; i++) {
                const randomType = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
                const template = GAME_DATA.enemies[randomType];
                this.enemies.push(this.createEnemy(template, stage, false));
            }
        }
    }

    // Create enemy instance
    createEnemy(template, stage, isBoss) {
        const hpMultiplier = isBoss ? 10 : 1;
        const hp = Math.floor(template.baseHp * Math.pow(template.hpMultiplier, stage / 10) * hpMultiplier);
        const atk = Math.floor(template.baseAtk * Math.pow(template.atkMultiplier, stage / 10));

        return {
            name: template.name,
            icon: template.icon,
            maxHp: hp,
            currentHp: hp,
            atk: atk,
            def: 100 + stage * 10,
            isAlive: true,
            isBoss: isBoss
        };
    }

    // Main combat loop
    startCombatLoop() {
        if (this.combatInterval) {
            clearInterval(this.combatInterval);
        }

        this.combatInterval = setInterval(() => {
            if (!this.isPaused && this.isRunning) {
                this.combatTick();
            }
        }, this.tickRate / this.battleSpeed);
    }

    // Single combat tick
    combatTick() {
        if (!this.isRunning) return;

        // Check win/lose conditions
        if (this.checkBattleEnd()) {
            return;
        }

        // Heroes attack
        this.heroes.forEach(hero => {
            if (hero.isAlive) {
                this.heroAction(hero);
            }
        });

        // Enemies attack
        this.enemies.forEach(enemy => {
            if (enemy.isAlive) {
                this.enemyAction(enemy);
            }
        });

        // Update cooldowns
        this.updateCooldowns();

        // Update UI
        if (window.ui) {
            ui.updateBattleUI(this.heroes, this.enemies);
        }
    }

    // Hero takes action
    heroAction(hero) {
        // Simple attack
        const target = this.getRandomAliveEnemy();
        if (!target) return;

        const damage = this.calculateDamage(hero.atk, target.def);
        this.dealDamage(target, damage, hero);

        // Use skills if off cooldown
        hero.skills.forEach(skill => {
            if (hero.cooldowns[skill.name] <= 0) {
                this.useSkill(hero, skill, target);
                hero.cooldowns[skill.name] = skill.cooldown * 10; // Convert to ticks
            }
        });
    }

    // Enemy takes action
    enemyAction(enemy) {
        const target = this.getRandomAliveHero();
        if (!target) return;

        const damage = this.calculateDamage(enemy.atk, target.def);
        this.dealDamage(target, damage, enemy);
    }

    // Calculate damage
    calculateDamage(atk, def) {
        // Damage formula: ATK * (1 - (DEF / (DEF + 1000)))
        const reduction = def / (def + 1000);
        const damage = Math.floor(atk * (1 - reduction) * (0.95 + Math.random() * 0.1));
        return Math.max(1, damage);
    }

    // Deal damage to unit
    dealDamage(target, damage, attacker) {
        target.currentHp -= damage;

        if (target.currentHp <= 0) {
            target.currentHp = 0;
            target.isAlive = false;
            this.logMessage(`${target.name} a été vaincu!`, 'damage');

            // If enemy died, grant gold
            if (this.enemies.includes(target)) {
                const goldReward = Math.floor(10 * game.state.progression.currentStage);
                game.addGold(goldReward);
                game.state.stats.enemiesDefeated++;
            }
        } else {
            this.logMessage(`${attacker.name || attacker.icon} inflige ${damage} à ${target.name}`, 'damage');
        }

        game.state.stats.totalDamageDealt += damage;
    }

    // Use skill
    useSkill(hero, skill, target) {
        switch (skill.effect) {
            case 'heal':
                // Heal all heroes
                this.heroes.forEach(h => {
                    if (h.isAlive) {
                        const healAmount = Math.floor(h.maxHp * 0.3);
                        h.currentHp = Math.min(h.maxHp, h.currentHp + healAmount);
                        this.logMessage(`${hero.name} utilise ${skill.name}! +${healAmount} HP`, 'heal');
                    }
                });
                break;

            case 'aoe_damage':
                // Damage all enemies
                this.enemies.forEach(enemy => {
                    if (enemy.isAlive) {
                        const damage = this.calculateDamage(hero.atk * 3, enemy.def);
                        this.dealDamage(enemy, damage, hero);
                    }
                });
                this.logMessage(`${hero.name} utilise ${skill.name}!`, 'info');
                break;

            case 'ultimate_aoe':
                // Massive AoE damage
                this.enemies.forEach(enemy => {
                    if (enemy.isAlive) {
                        const damage = this.calculateDamage(hero.atk * 5, enemy.def);
                        this.dealDamage(enemy, damage, hero);
                    }
                });
                this.logMessage(`💥 ${hero.name} utilise ${skill.name}! ULTIMATE!`, 'victory');
                break;

            default:
                // Default single target damage
                const damage = this.calculateDamage(hero.atk * 2, target.def);
                this.dealDamage(target, damage, hero);
        }
    }

    // Tap attack (manual boost)
    tapAttack() {
        const teamDPS = game.getTeamDPS();
        const tapDamage = Math.floor(teamDPS * this.tapDamageMultiplier);

        const target = this.getRandomAliveEnemy();
        if (target) {
            this.dealDamage(target, tapDamage, { name: 'TAP BOOST', icon: '👆' });
            this.logMessage(`💥 TAP BOOST! ${tapDamage} dégâts!`, 'victory');

            // Visual effect
            if (window.ui) {
                ui.showTapEffect();
            }
        }
    }

    // Update cooldowns
    updateCooldowns() {
        this.heroes.forEach(hero => {
            Object.keys(hero.cooldowns).forEach(skillName => {
                if (hero.cooldowns[skillName] > 0) {
                    hero.cooldowns[skillName]--;
                }
            });
        });
    }

    // Check if battle ended
    checkBattleEnd() {
        const heroesAlive = this.heroes.filter(h => h.isAlive).length;
        const enemiesAlive = this.enemies.filter(e => e.isAlive).length;

        if (enemiesAlive === 0) {
            this.victory();
            return true;
        }

        if (heroesAlive === 0) {
            this.defeat();
            return true;
        }

        return false;
    }

    // Victory
    victory() {
        this.isRunning = false;
        clearInterval(this.combatInterval);

        // Rewards
        const goldReward = Math.floor(100 * game.state.progression.currentStage * (this.currentWave / 10));
        game.addGold(goldReward);

        // Advance wave or stage
        if (this.currentWave < this.maxWaves) {
            this.currentWave++;
            game.state.progression.currentWave = this.currentWave;
            this.logMessage(`✅ Victoire! Vague ${this.currentWave}/${this.maxWaves}`, 'victory');

            // Auto-continue if enabled
            if (this.autoProgress) {
                setTimeout(() => {
                    this.startBattle();
                }, 1000);
            }
        } else {
            // Stage completed
            game.advanceStage();
            this.logMessage(`🏆 STAGE ${game.state.progression.currentStage - 1} TERMINÉ!`, 'victory');

            if (this.autoProgress) {
                setTimeout(() => {
                    this.startBattle();
                }, 2000);
            }
        }

        if (window.ui) {
            ui.updateAll();
        }
    }

    // Defeat
    defeat() {
        this.isRunning = false;
        clearInterval(this.combatInterval);
        this.logMessage('💀 Défaite! Améliorez vos héros et réessayez.', 'damage');

        // Reset heroes HP
        setTimeout(() => {
            this.loadHeroes();
            if (window.ui) {
                ui.updateAll();
            }
        }, 2000);
    }

    // Get random alive enemy
    getRandomAliveEnemy() {
        const alive = this.enemies.filter(e => e.isAlive);
        if (alive.length === 0) return null;
        return alive[Math.floor(Math.random() * alive.length)];
    }

    // Get random alive hero
    getRandomAliveHero() {
        const alive = this.heroes.filter(h => h.isAlive);
        if (alive.length === 0) return null;
        return alive[Math.floor(Math.random() * alive.length)];
    }

    // Log combat message
    logMessage(message, type = 'info') {
        if (window.ui) {
            ui.addBattleLog(message, type);
        }
    }

    // Toggle pause
    togglePause() {
        this.isPaused = !this.isPaused;
    }

    // Set battle speed
    setBattleSpeed(speed) {
        this.battleSpeed = speed;
        if (this.isRunning) {
            this.startCombatLoop(); // Restart with new speed
        }
    }

    // Toggle auto-progress
    toggleAutoProgress() {
        this.autoProgress = !this.autoProgress;
        return this.autoProgress;
    }
}

// Create global combat instance
const combat = new CombatEngine();

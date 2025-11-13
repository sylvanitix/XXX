// ===========================
// ECLIPSE LEGENDS - UI Manager
// ===========================

class UIManager {
    constructor() {
        this.currentScreen = 'combat';
        this.battleLogMaxMessages = 50;
    }

    // Initialize UI
    init() {
        this.setupNavigation();
        this.setupButtons();
        this.updateAll();
    }

    // Setup navigation
    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const screen = e.target.dataset.screen;
                this.switchScreen(screen);
            });
        });
    }

    // Switch screens
    switchScreen(screenName) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

        // Show selected screen
        document.getElementById(`${screenName}-screen`).classList.add('active');
        document.querySelector(`[data-screen="${screenName}"]`).classList.add('active');

        this.currentScreen = screenName;

        // Update screen content
        if (screenName === 'heroes') {
            this.updateHeroesScreen();
        } else if (screenName === 'summon') {
            this.updateSummonScreen();
        }
    }

    // Setup all buttons
    setupButtons() {
        // Combat buttons
        document.getElementById('auto-progress-btn')?.addEventListener('click', () => {
            const isAuto = combat.toggleAutoProgress();
            const btn = document.getElementById('auto-progress-btn');
            btn.textContent = isAuto ? '⏸️ Pause' : '▶️ Auto';
            btn.classList.toggle('btn-danger', isAuto);

            if (isAuto && !combat.isRunning) {
                combat.startBattle();
            }
        });

        document.getElementById('speed-btn')?.addEventListener('click', () => {
            const speeds = [1, 2, 4];
            const currentIndex = speeds.indexOf(combat.battleSpeed);
            const nextIndex = (currentIndex + 1) % speeds.length;
            const newSpeed = speeds[nextIndex];

            combat.setBattleSpeed(newSpeed);
            document.getElementById('speed-btn').textContent = `⏩ x${newSpeed}`;
        });

        document.getElementById('tap-attack-btn')?.addEventListener('click', () => {
            if (combat.isRunning) {
                combat.tapAttack();
            }
        });

        // Summon buttons
        document.querySelectorAll('.btn-summon').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.target.dataset.type;
                this.performSummon(type);
            });
        });

        // Hero filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const faction = e.target.dataset.faction;
                this.filterHeroes(faction);
            });
        });

        // Shop buttons
        document.getElementById('daily-reward-btn')?.addEventListener('click', () => {
            game.addGems(100);
            this.updateAll();
            alert('+ 100 💎 Gemmes!');
            // Disable button for demo
            const btn = document.getElementById('daily-reward-btn');
            btn.disabled = true;
            btn.textContent = 'Récupéré!';
        });

        // Settings buttons
        document.getElementById('reset-game-btn')?.addEventListener('click', () => {
            game.resetGame();
        });

        document.getElementById('export-save-btn')?.addEventListener('click', () => {
            game.exportSave();
        });

        // Modal close buttons
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.modal').classList.remove('active');
            });
        });

        // Close modals on background click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });
    }

    // Update all UI elements
    updateAll() {
        this.updateHeader();
        this.updateProgression();
        this.updateTeamPanel();
        this.updateStats();
    }

    // Update header resources
    updateHeader() {
        document.getElementById('player-level').textContent = game.state.player.level;
        document.getElementById('gold-amount').textContent = this.formatNumber(game.state.player.gold);
        document.getElementById('gems-amount').textContent = game.state.player.gems;
        document.getElementById('essence-amount').textContent = game.state.player.essence;
    }

    // Update progression display
    updateProgression() {
        document.getElementById('current-stage').textContent = game.state.progression.currentStage;
        document.getElementById('current-chapter').textContent = game.state.progression.currentChapter;
        document.getElementById('stage-number').textContent = game.state.progression.currentStage;
        document.getElementById('wave-number').textContent = game.state.progression.currentWave;
    }

    // Update team panel
    updateTeamPanel() {
        const teamContainer = document.getElementById('active-team');
        if (!teamContainer) return;

        teamContainer.innerHTML = '';

        // Create 5 slots
        for (let i = 0; i < 5; i++) {
            const slot = document.createElement('div');
            slot.className = 'team-slot';

            if (game.state.activeTeam[i]) {
                const heroId = game.state.activeTeam[i];
                const heroData = GAME_DATA.heroes[heroId];
                const heroState = game.state.ownedHeroes[heroId];

                slot.classList.add('filled');
                slot.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">${heroData.icon}</span>
                        <div style="flex: 1;">
                            <div style="font-size: 0.8rem; font-weight: bold;">${heroData.name.split(',')[0]}</div>
                            <div style="font-size: 0.7rem; color: var(--text-dim);">Niv. ${heroState.level}</div>
                        </div>
                    </div>
                `;
            } else {
                slot.textContent = 'Vide';
            }

            teamContainer.appendChild(slot);
        }
    }

    // Update stats panel
    updateStats() {
        document.getElementById('total-dps').textContent = this.formatNumber(game.getTeamDPS());
        document.getElementById('gold-per-sec').textContent = this.formatNumber(GAME_DATA.goldPerSecond(game.state.progression.currentStage));
        document.getElementById('team-power').textContent = this.formatNumber(game.getTeamPower());
    }

    // Update battle UI
    updateBattleUI(heroes, enemies) {
        this.updateBattleUnits('heroes-battle', heroes, 'hero');
        this.updateBattleUnits('enemies-battle', enemies, 'enemy');
    }

    // Update battle units
    updateBattleUnits(containerId, units, type) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        units.forEach(unit => {
            const card = document.createElement('div');
            card.className = `unit-card ${type}`;
            card.style.borderColor = type === 'hero' ?
                `var(--${GAME_DATA.heroes[unit.id]?.faction})` :
                'var(--accent-red)';

            if (!unit.isAlive) {
                card.classList.add('dying');
            }

            const hpPercent = (unit.currentHp / unit.maxHp) * 100;

            card.innerHTML = `
                <div class="unit-header">
                    <span class="unit-name">${unit.icon} ${unit.name.split(',')[0]}</span>
                    ${unit.level ? `<span class="unit-level">Niv. ${unit.level}</span>` : ''}
                </div>
                <div class="hp-bar-container">
                    <div class="hp-bar" style="width: ${hpPercent}%"></div>
                    <div class="hp-text">${this.formatNumber(unit.currentHp)} / ${this.formatNumber(unit.maxHp)}</div>
                </div>
            `;

            container.appendChild(card);
        });
    }

    // Add battle log message
    addBattleLog(message, type = 'info') {
        const logContainer = document.getElementById('battle-messages');
        if (!logContainer) return;

        const msg = document.createElement('p');
        msg.className = `log-msg ${type}`;
        msg.textContent = message;

        logContainer.appendChild(msg);

        // Keep only last N messages
        while (logContainer.children.length > this.battleLogMaxMessages) {
            logContainer.removeChild(logContainer.firstChild);
        }

        // Auto-scroll to bottom
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    // Update heroes screen
    updateHeroesScreen() {
        this.filterHeroes('all');
    }

    // Filter and display heroes
    filterHeroes(faction) {
        const grid = document.getElementById('heroes-grid');
        if (!grid) return;

        grid.innerHTML = '';

        const ownedHeroes = gacha.getOwnedHeroes();
        const filtered = faction === 'all' ?
            ownedHeroes :
            ownedHeroes.filter(h => h.faction === faction);

        filtered.forEach(hero => {
            const card = this.createHeroCard(hero);
            grid.appendChild(card);
        });

        if (filtered.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-dim);">Aucun héros de cette faction</p>';
        }
    }

    // Create hero card
    createHeroCard(hero) {
        const card = document.createElement('div');
        card.className = `hero-card ${hero.rarity}`;
        card.style.borderColor = `var(--${hero.rarity})`;

        const stars = '⭐'.repeat(hero.stars);

        card.innerHTML = `
            <div class="hero-card-header">
                <span class="hero-stars">${stars}</span>
                <span style="color: var(--${hero.faction})">${FACTIONS[hero.faction].icon}</span>
            </div>
            <div class="hero-avatar" style="border: 2px solid var(--${hero.faction})">
                ${hero.icon}
            </div>
            <h3 style="font-size: 0.9rem; margin-bottom: 0.5rem;">${hero.name.split(',')[0]}</h3>
            <div class="hero-card-footer">
                <span>Niv. ${hero.level}</span>
                <span style="color: var(--${hero.faction})">${FACTIONS[hero.faction].name}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            this.showHeroDetail(hero);
        });

        return card;
    }

    // Show hero detail modal
    showHeroDetail(hero) {
        const modal = document.getElementById('hero-modal');
        const content = document.getElementById('hero-detail-content');

        const heroData = GAME_DATA.heroes[hero.id];
        const stars = '⭐'.repeat(hero.stars);

        content.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 5rem; margin: 1rem 0;">${hero.icon}</div>
                <h2 style="color: var(--${hero.rarity})">${hero.name}</h2>
                <div style="color: var(--accent-gold); font-size: 1.5rem; margin: 0.5rem 0;">${stars}</div>
                <p style="color: var(--${hero.faction}); font-size: 1.1rem;">
                    ${FACTIONS[hero.faction].icon} ${FACTIONS[hero.faction].name}
                </p>
                <p style="font-style: italic; color: var(--text-dim); margin: 1rem 0;">
                    "${heroData.signature}"
                </p>
            </div>

            <div style="margin: 1.5rem 0;">
                <h3 style="color: var(--accent-gold); border-bottom: 2px solid var(--accent-gold); padding-bottom: 0.5rem;">
                    Statistiques (Niveau ${hero.level})
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 1rem;">
                    <div class="stat-item"><span>HP:</span> <span>${this.formatNumber(game.getHeroStat(hero.id, 'hp'))}</span></div>
                    <div class="stat-item"><span>ATK:</span> <span>${this.formatNumber(game.getHeroStat(hero.id, 'atk'))}</span></div>
                    <div class="stat-item"><span>DEF:</span> <span>${this.formatNumber(game.getHeroStat(hero.id, 'def'))}</span></div>
                    <div class="stat-item"><span>RES:</span> <span>${this.formatNumber(game.getHeroStat(hero.id, 'res'))}</span></div>
                    <div class="stat-item"><span>SPD:</span> <span>${this.formatNumber(game.getHeroStat(hero.id, 'spd'))}</span></div>
                    <div class="stat-item"><span>Rôle:</span> <span>${heroData.role}</span></div>
                </div>
            </div>

            <div style="margin: 1.5rem 0;">
                <h3 style="color: var(--accent-gold); border-bottom: 2px solid var(--accent-gold); padding-bottom: 0.5rem;">
                    Compétences
                </h3>
                ${heroData.skills.map(skill => `
                    <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; margin: 0.5rem 0; border-radius: 5px; border-left: 3px solid var(--accent-blue);">
                        <div style="font-weight: bold; color: var(--accent-blue);">${skill.name}</div>
                        <div style="font-size: 0.85rem; color: var(--text-dim);">Cooldown: ${skill.cooldown}s</div>
                    </div>
                `).join('')}
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
                <button class="btn-primary" onclick="ui.levelUpHero('${hero.id}')">
                    ⬆️ Améliorer (${this.formatNumber(game.getLevelUpCost(hero.level))} 💰)
                </button>
                <button class="btn-secondary" onclick="ui.toggleTeamMembership('${hero.id}')">
                    ${hero.inTeam ? '➖ Retirer' : '➕ Ajouter'} Équipe
                </button>
            </div>
        `;

        modal.classList.add('active');
    }

    // Level up hero from modal
    levelUpHero(heroId) {
        if (game.levelUpHero(heroId)) {
            this.updateAll();
            const hero = { ...GAME_DATA.heroes[heroId], ...game.state.ownedHeroes[heroId] };
            this.showHeroDetail(hero);
        } else {
            alert('Pas assez d\'or!');
        }
    }

    // Toggle team membership
    toggleTeamMembership(heroId) {
        const hero = game.state.ownedHeroes[heroId];
        if (hero.inTeam) {
            game.removeFromTeam(heroId);
        } else {
            if (!game.addToTeam(heroId)) {
                alert('Équipe complète (max 5 héros)');
                return;
            }
        }
        this.updateAll();
        const heroFull = { ...GAME_DATA.heroes[heroId], ...game.state.ownedHeroes[heroId] };
        this.showHeroDetail(heroFull);
    }

    // Update summon screen
    updateSummonScreen() {
        const pityCounter = game.state.gacha.pityCounter;
        document.getElementById('pity-counter').textContent = pityCounter;
        document.getElementById('pity-progress').style.width = `${(pityCounter / 50) * 100}%`;
    }

    // Perform summon
    performSummon(type) {
        let count = 1;
        if (type === 'major-10') {
            type = 'major';
            count = 10;
        }

        const results = gacha.summon(type, count);

        if (results) {
            if (count === 1) {
                this.showSummonResult(results[0]);
            } else {
                this.showMultiSummonResults(results);
            }
            this.updateAll();
            this.updateSummonScreen();
        }
    }

    // Show single summon result
    showSummonResult(hero) {
        const modal = document.getElementById('summon-modal');
        const animation = document.getElementById('summon-animation');
        const display = document.getElementById('summon-hero-display');

        modal.classList.add('active');

        // Show crystal animation
        animation.style.display = 'block';
        display.style.display = 'none';

        const animData = gacha.getSummonAnimationData(hero.rarity);

        setTimeout(() => {
            animation.style.display = 'none';
            display.style.display = 'block';

            const stars = '⭐'.repeat(hero.stars);
            const rarityName = RARITIES[hero.rarity].name;

            display.innerHTML = `
                <div style="font-size: 5rem; margin: 1rem 0; animation: summon-appear 0.5s;">${hero.icon}</div>
                <h2 style="color: var(--${hero.rarity}); animation: summon-appear 0.7s;">${hero.name}</h2>
                <div style="color: var(--accent-gold); font-size: 2rem; margin: 1rem 0; animation: summon-appear 0.9s;">${stars}</div>
                <p style="font-size: 1.2rem; color: var(--${hero.rarity})">${rarityName}</p>
                ${hero.isDuplicate ? '<p style="color: var(--accent-purple); margin-top: 1rem;">⚠️ Duplicata converti en Essence!</p>' : ''}
                <button class="btn-primary" style="margin-top: 2rem;" onclick="document.getElementById('summon-modal').classList.remove('active')">
                    Continuer
                </button>
            `;
        }, animData.duration);
    }

    // Show multi-summon results
    showMultiSummonResults(results) {
        const modal = document.getElementById('summon-modal');
        const animation = document.getElementById('summon-animation');
        const display = document.getElementById('summon-hero-display');

        modal.classList.add('active');
        animation.style.display = 'none';
        display.style.display = 'block';

        const legendaryCount = results.filter(h => h.rarity === 'legendary').length;
        const epicCount = results.filter(h => h.rarity === 'epic').length;
        const rareCount = results.filter(h => h.rarity === 'rare').length;

        display.innerHTML = `
            <h2 style="color: var(--accent-gold); margin-bottom: 1.5rem;">Résultats de l'Invocation x10</h2>

            ${legendaryCount > 0 ? `<div style="color: var(--legendary); font-size: 1.5rem; margin: 0.5rem 0;">✨ ${legendaryCount} Légendaire(s)!</div>` : ''}
            ${epicCount > 0 ? `<div style="color: var(--epic); font-size: 1.2rem; margin: 0.5rem 0;">💎 ${epicCount} Épique(s)</div>` : ''}
            ${rareCount > 0 ? `<div style="color: var(--rare); margin: 0.5rem 0;">⚡ ${rareCount} Rare(s)</div>` : ''}

            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; margin: 1.5rem 0;">
                ${results.map(hero => `
                    <div style="background: rgba(0,0,0,0.5); border: 2px solid var(--${hero.rarity}); border-radius: 8px; padding: 0.5rem; text-align: center;">
                        <div style="font-size: 2rem;">${hero.icon}</div>
                        <div style="font-size: 0.7rem; margin-top: 0.3rem;">${'⭐'.repeat(hero.stars)}</div>
                    </div>
                `).join('')}
            </div>

            <button class="btn-primary" style="margin-top: 1rem;" onclick="document.getElementById('summon-modal').classList.remove('active')">
                Continuer
            </button>
        `;
    }

    // Show tap effect
    showTapEffect() {
        const btn = document.getElementById('tap-attack-btn');
        if (btn) {
            btn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 100);
        }
    }

    // Format large numbers
    formatNumber(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(2) + 'B';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return Math.floor(num).toString();
    }
}

// Create global UI instance
const ui = new UIManager();

// Add CSS for summon animation
const style = document.createElement('style');
style.textContent = `
@keyframes summon-appear {
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
`;
document.head.appendChild(style);

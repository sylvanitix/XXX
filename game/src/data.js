// ===========================
// ECLIPSE LEGENDS - Game Data
// ===========================

const GAME_DATA = {
    // Hero Database
    heroes: {
        // LEGENDARY HEROES
        lyria: {
            id: 'lyria',
            name: 'Lyria, Gardienne du Soleil',
            faction: 'solari',
            rarity: 'legendary',
            role: 'soutien',
            icon: '☀️',
            stars: 5,
            baseStats: {
                hp: 25000,
                atk: 1200,
                def: 800,
                res: 1000,
                spd: 900
            },
            skills: [
                { name: 'Éclat Divin', cooldown: 8, effect: 'heal' },
                { name: 'Bouclier Solaire', cooldown: 12, effect: 'shield' },
                { name: 'Résurrection', cooldown: 120, effect: 'revive' }
            ],
            signature: 'La lumière ne s\'éteint jamais.'
        },

        kael: {
            id: 'kael',
            name: 'Kael, Seigneur des Ombres',
            faction: 'umbrath',
            rarity: 'legendary',
            role: 'dps',
            icon: '🌑',
            stars: 5,
            baseStats: {
                hp: 18000,
                atk: 2800,
                def: 500,
                res: 600,
                spd: 1100
            },
            skills: [
                { name: 'Nova Corrompue', cooldown: 6, effect: 'aoe_damage' },
                { name: 'Étreinte du Vide', cooldown: 0, effect: 'lifesteal' },
                { name: 'Apocalypse d\'Éclipse', cooldown: 90, effect: 'ultimate_aoe' }
            ],
            signature: 'Les ténèbres réclament leur dû.'
        },

        vorgrim: {
            id: 'vorgrim',
            name: 'Vorgrim, Seigneur Forgelame',
            faction: 'vorn',
            rarity: 'legendary',
            role: 'dps',
            icon: '🔥',
            stars: 5,
            baseStats: {
                hp: 22000,
                atk: 3000,
                def: 700,
                res: 500,
                spd: 950
            },
            skills: [
                { name: 'Frappe du Titan', cooldown: 5, effect: 'critical_strike' },
                { name: 'Rage du Forgeron', cooldown: 12, effect: 'atk_buff' },
                { name: 'Apocalypse Ardente', cooldown: 90, effect: 'ultimate_aoe' }
            ],
            signature: 'Le métal et le sang.'
        },

        lunara: {
            id: 'lunara',
            name: 'Lunara, Ombre de la Lune',
            faction: 'nivara',
            rarity: 'legendary',
            role: 'assassin',
            icon: '🌙',
            stars: 5,
            baseStats: {
                hp: 16000,
                atk: 2900,
                def: 450,
                res: 550,
                spd: 1400
            },
            skills: [
                { name: 'Danse des Ombres', cooldown: 4, effect: 'fast_attack' },
                { name: 'Voile Lunaire', cooldown: 20, effect: 'stealth' },
                { name: 'Eclipse Mortelle', cooldown: 75, effect: 'ultimate_burst' }
            ],
            signature: 'Dans l\'ombre, je règne.'
        },

        // EPIC HEROES
        thornroot: {
            id: 'thornroot',
            name: 'Thornroot, Gardien Sylvestre',
            faction: 'verdan',
            rarity: 'epic',
            role: 'tank',
            icon: '🌿',
            stars: 4,
            baseStats: {
                hp: 28000,
                atk: 1000,
                def: 1200,
                res: 700,
                spd: 750
            },
            skills: [
                { name: 'Enracinement', cooldown: 8, effect: 'root' },
                { name: 'Peau d\'Écorce', cooldown: 10, effect: 'defense_buff' },
                { name: 'Renouveau', cooldown: 100, effect: 'regen' }
            ],
            signature: 'Les racines tiennent bon.'
        },

        nira: {
            id: 'nira',
            name: 'Nira, Mage de l\'Aether',
            faction: 'aetherion',
            rarity: 'epic',
            role: 'mage',
            icon: '🌌',
            stars: 4,
            baseStats: {
                hp: 13000,
                atk: 2500,
                def: 350,
                res: 750,
                spd: 1100
            },
            skills: [
                { name: 'Projectile Aethérique', cooldown: 4, effect: 'magic_damage' },
                { name: 'Téléportation', cooldown: 15, effect: 'teleport' },
                { name: 'Tempête Cosmique', cooldown: 80, effect: 'ultimate_aoe' }
            ],
            signature: 'Les étoiles m\'obéissent.'
        },

        // RARE HEROES
        ragnar: {
            id: 'ragnar',
            name: 'Ragnar Forgecendre',
            faction: 'vorn',
            rarity: 'rare',
            role: 'dps',
            icon: '⚔️',
            stars: 3,
            baseStats: {
                hp: 15000,
                atk: 1800,
                def: 450,
                res: 400,
                spd: 850
            },
            skills: [
                { name: 'Frappe Enflammée', cooldown: 5, effect: 'physical_damage' },
                { name: 'Cri de Guerre', cooldown: 12, effect: 'atk_buff' }
            ],
            signature: 'Pour la gloire!'
        },

        selene: {
            id: 'selene',
            name: 'Selene la Discrète',
            faction: 'nivara',
            rarity: 'rare',
            role: 'assassin',
            icon: '🗡️',
            stars: 3,
            baseStats: {
                hp: 12000,
                atk: 2000,
                def: 350,
                res: 400,
                spd: 1150
            },
            skills: [
                { name: 'Frappe Fantôme', cooldown: 4, effect: 'poison_attack' },
                { name: 'Invisibilité', cooldown: 20, effect: 'stealth' }
            ],
            signature: 'Rapide comme l\'ombre.'
        },

        // COMMON HEROES (Starters)
        elios: {
            id: 'elios',
            name: 'Elios l\'Initié',
            faction: 'solari',
            rarity: 'common',
            role: 'soutien',
            icon: '🛡️',
            stars: 2,
            baseStats: {
                hp: 10000,
                atk: 600,
                def: 500,
                res: 500,
                spd: 700
            },
            skills: [
                { name: 'Buff Défense', cooldown: 10, effect: 'defense_buff' }
            ],
            signature: 'La lumière guide.'
        },

        mora: {
            id: 'mora',
            name: 'Mora l\'Égarée',
            faction: 'umbrath',
            rarity: 'common',
            role: 'dps',
            icon: '💀',
            stars: 2,
            baseStats: {
                hp: 8000,
                atk: 800,
                def: 300,
                res: 300,
                spd: 800
            },
            skills: [
                { name: 'Attaque Sombre', cooldown: 5, effect: 'dark_attack' }
            ],
            signature: 'Les ténèbres appellent.'
        }
    },

    // Enemy Templates
    enemies: {
        slime: {
            name: 'Slime Corrompu',
            icon: '🟣',
            baseHp: 500,
            baseAtk: 50,
            hpMultiplier: 1.5,
            atkMultiplier: 1.3
        },
        goblin: {
            name: 'Gobelin',
            icon: '👹',
            baseHp: 800,
            baseAtk: 80,
            hpMultiplier: 1.6,
            atkMultiplier: 1.4
        },
        skeleton: {
            name: 'Squelette',
            icon: '💀',
            baseHp: 1000,
            baseAtk: 100,
            hpMultiplier: 1.7,
            atkMultiplier: 1.5
        },
        demon: {
            name: 'Démon Mineur',
            icon: '😈',
            baseHp: 1500,
            baseAtk: 150,
            hpMultiplier: 1.8,
            atkMultiplier: 1.6
        },
        boss: {
            name: 'Boss d\'Éclipse',
            icon: '👿',
            baseHp: 10000,
            baseAtk: 200,
            hpMultiplier: 2.5,
            atkMultiplier: 1.8
        }
    },

    // Gacha Rates
    gachaRates: {
        minor: {
            common: 70,
            rare: 30,
            epic: 0,
            legendary: 0
        },
        major: {
            common: 0,
            rare: 60,
            epic: 30,
            legendary: 10
        },
        sacred: {
            common: 0,
            rare: 0,
            epic: 50,
            legendary: 50
        }
    },

    // Gacha Costs
    gachaCosts: {
        minor: 100,
        major: 300,
        major10: 2700,
        sacred: 500
    },

    // Starter Heroes (given at beginning)
    starterHeroes: ['elios', 'mora', 'ragnar'],

    // Experience required per level
    expCurve: level => Math.floor(100 * Math.pow(level, 1.5)),

    // Gold per second formula
    goldPerSecond: stage => Math.floor(10 * Math.pow(stage, 1.3)),

    // Stage enemy count
    enemiesPerWave: {
        normal: 3,
        boss: 1
    }
};

// Faction info
const FACTIONS = {
    solari: { name: 'Solari', icon: '☀️', color: '#ffd700' },
    umbrath: { name: 'Umbrath', icon: '🌑', color: '#a855f7' },
    verdan: { name: 'Verdan', icon: '🌿', color: '#22c55e' },
    aetherion: { name: 'Aetherion', icon: '🌌', color: '#3b82f6' },
    vorn: { name: 'Vorn', icon: '🔥', color: '#ef4444' },
    nivara: { name: 'Nivara', icon: '🌙', color: '#8b5cf6' }
};

// Rarity info
const RARITIES = {
    common: { name: 'Commun', stars: 2, color: '#9ca3af' },
    rare: { name: 'Rare', stars: 3, color: '#60a5fa' },
    epic: { name: 'Épique', stars: 4, color: '#a78bfa' },
    legendary: { name: 'Légendaire', stars: 5, color: '#fbbf24' }
};

# ⚔️ Système de Combat - ECLIPSE LEGENDS

Ce document détaille toutes les mécaniques de combat, des formules de dégâts aux synergies de faction.

---

## 🎮 Vue d'Ensemble

**Type de Combat :** Auto-battler avec interventions manuelles
**Composition d'Équipe :** 5 héros maximum
**Ennemis :** Vagues de 3-5 ennemis, boss à la vague 10
**Durée Moyenne d'un Stage :** 1-3 minutes (selon vitesse)

---

## 👥 Positionnement et Formation

### Disposition de l'Équipe

```
                ARÈNE DE COMBAT
        ================================

        LIGNE ARRIÈRE (Position 4-5)
        [Soutien] [Mage]     ← Backline
               |      |
        LIGNE MÉDIANE (Position 2-3)
        [DPS] [Assassin]     ← Midline
               |      |
        LIGNE AVANT (Position 1)
           [Tank]            ← Frontline

        ================================

        VS

        ================================
           [Ennemis]
        ================================
```

### Priorités de Ciblage par Position

| Position | Rôle Typique | Cible Prioritaire | Raison |
|----------|-------------|-------------------|--------|
| **Position 1** | Tank | Ennemi le plus proche | Protéger l'équipe |
| **Position 2-3** | DPS / Assassin | Ennemi avec moins de défense / Backline ennemie | Dégâts optimaux |
| **Position 4-5** | Soutien / Mage | Allié avec moins de HP / Groupe d'ennemis | Support / AoE |

---

## 📊 Statistiques de Combat

### Stats Principales

| Stat | Abréviation | Effet | Scaling |
|------|-------------|-------|---------|
| **Points de Vie** | HP | Détermine la survie | Linéaire avec niveau |
| **Attaque** | ATK | Dégâts physiques/magiques de base | Exponentiel avec niveau |
| **Défense** | DEF | Réduit dégâts physiques reçus | Linéaire |
| **Résistance** | RES | Réduit dégâts magiques reçus | Linéaire |
| **Vitesse** | SPD | Fréquence d'attaque | Affecte cooldowns |
| **Taux Critique** | CRIT% | Chance de coup critique | Cap à 100% |
| **Dégâts Critiques** | CRIT DMG | Multiplicateur des critiques | Base 150%, upgradable à 300% |
| **Précision** | ACC | Chance de toucher / infliger debuffs | Contre esquive |
| **Esquive** | EVA | Chance d'éviter une attaque | Cap à 75% |

### Stats Secondaires

| Stat | Effet | Obtenu via |
|------|-------|------------|
| **Drain de Vie** | % des dégâts convertis en HP | Talents, artefacts, héros Umbrath |
| **Réduction Cooldown** | Réduit délai entre compétences | Buffs, artefacts |
| **Pénétration Armure** | Ignore % de DEF | Héros Vorn, équipement |
| **Pénétration Magique** | Ignore % de RES | Héros Aetherion, équipement |

---

## 🗡️ Formules de Dégâts

### Dégâts Physiques de Base

```
Dégâts_Physiques = (ATK * Skill_Multiplier) * (1 - (DEF / (DEF + 1000))) * Random(0.95, 1.05)

Où :
- ATK = Attaque du héros
- Skill_Multiplier = Multiplicateur de la compétence (ex: 250% = 2.5)
- DEF = Défense de la cible
- Random(0.95, 1.05) = Variance aléatoire de ±5%
```

**Exemple :**
- ATK = 5000
- Skill = 250% (2.5)
- DEF cible = 2000
- **Dégâts = (5000 * 2.5) * (1 - (2000 / 3000)) * 1.0 = 4166**

---

### Dégâts Magiques

```
Dégâts_Magiques = (ATK * Skill_Multiplier) * (1 - (RES / (RES + 1000))) * Random(0.95, 1.05)
```

**Identique aux dégâts physiques, mais utilise RES au lieu de DEF.**

---

### Coups Critiques

```
IF Random(0, 100) < CRIT%:
    Dégâts_Final = Dégâts_Base * (CRIT_DMG / 100)
ELSE:
    Dégâts_Final = Dégâts_Base
```

**Exemple :**
- Dégâts de base : 4166
- CRIT% = 50%
- CRIT DMG = 200%
- **Si critique : 4166 * 2.0 = 8332**

---

### Pénétration d'Armure

```
DEF_Effective = DEF * (1 - Pénétration_Armure%)

Exemple :
- DEF = 2000
- Pénétration = 30%
- DEF_Effective = 2000 * 0.7 = 1400
```

---

## 💥 Types de Compétences

### 1. Compétences de Dégâts

#### Single Target (ST)
- Cible un seul ennemi
- Multiplicateur élevé (200-500%)
- Cooldown : 3-5 secondes

**Exemple :** Frappe Enflammée (Ragnar) - 250% ATK

---

#### Area of Effect (AoE)
- Cible tous les ennemis ou plusieurs
- Multiplicateur modéré (150-300%)
- Cooldown : 5-8 secondes

**Exemple :** Nova Corrompue (Kael) - 500% ATK à tous les ennemis

---

#### Damage Over Time (DoT)
- Inflige dégâts sur durée
- Poison, Brûlure, Saignement
- Tick : 1-3 fois par seconde pendant 5-10s

**Exemple :** Frappe Fantôme (Selene) - 300% ATK + Poison (50% ATK/s pendant 5s)

---

### 2. Compétences de Soutien

#### Soins (Heal)
- Restaure HP d'un ou plusieurs alliés
- Basé sur ATK ou HP max du soutien

**Formule :**
```
Heal = ATK_Soutien * Skill_Multiplier
OU
Heal = HP_Max_Cible * Percentage
```

**Exemple :** Éclat Divin (Lyria) - Soigne tous les alliés de 30% de leur HP max

---

#### Buffs
- Augmente stats des alliés temporairement
- Durée : 5-15 secondes

**Types :**
- **ATK Buff :** +20-50% ATK
- **DEF Buff :** +30-60% DEF
- **SPD Buff :** +20-40% Vitesse
- **Bouclier :** Absorbe X dégâts

**Exemple :** Cri de Guerre (Ragnar) - +20% ATK à tous les alliés pendant 5s

---

#### Debuffs
- Réduit stats des ennemis
- Durée : 3-10 secondes

**Types :**
- **ATK Debuff :** -20-50% ATK
- **DEF Break :** -30-70% DEF (très puissant)
- **Stun :** Immobilise l'ennemi
- **Slow :** Réduit vitesse d'attaque

**Exemple :** Apocalypse d'Éclipse (Kael) - Réduit les soins ennemis de 80%

---

### 3. Compétences Ultimes

**Caractéristiques :**
- Cooldown long : 60-120 secondes
- Effets dévastateurs ou game-changing
- Peuvent être activées manuellement

**Exemples :**
- **Résurrection (Lyria) :** Ramène un allié tombé avec 50% HP
- **Apocalypse d'Éclipse (Kael) :** AoE massif + debuff heal
- **Tempête Cosmique (Nira) :** 800% ATK en dégâts AoE

---

## 🔄 Système de Cooldowns

### Cooldown Dynamique

**Formule :**
```
Cooldown_Réel = Cooldown_Base / (1 + (SPD / 1000))

Exemple :
- Cooldown de base : 5 secondes
- SPD = 1000
- Cooldown réel = 5 / (1 + 1) = 2.5 secondes
```

**Impact de la Vitesse :**
- SPD 500 → 33% de cooldown en plus
- SPD 1000 → Cooldown divisé par 2
- SPD 2000 → Cooldown divisé par 3

---

## 🛡️ Systèmes Défensifs

### Réduction de Dégâts

**Formule :**
```
Réduction% = DEF / (DEF + 1000)

Exemples :
- DEF 500 → 33% réduction
- DEF 1000 → 50% réduction
- DEF 2000 → 66% réduction
- DEF 5000 → 83% réduction
```

**Cap :** Pas de cap théorique, mais scaling décroissant.

---

### Esquive (Evasion)

**Mécanisme :**
```
IF Random(0, 100) < (EVA - ACC_Attaquant):
    Attaque_Manquée = TRUE
    Dégâts = 0
```

**Cap :** 75% d'esquive maximum (pour éviter perma-dodge)

---

### Boucliers (Shields)

**Types :**
1. **Bouclier à HP Fixe :** Absorbe X points de dégâts
2. **Bouclier en % HP Max :** Absorbe Y% des HP max de la cible

**Mécanisme :**
```
IF Dégâts_Entrants > Bouclier_Restant:
    Dégâts_aux_HP = Dégâts_Entrants - Bouclier_Restant
    Bouclier_Restant = 0
ELSE:
    Bouclier_Restant -= Dégâts_Entrants
    Dégâts_aux_HP = 0
```

**Expiration :** Les boucliers expirent après leur durée (généralement 5-10s).

---

## 🔥 Synergies de Faction

### Principe

Certains héros possèdent des **passifs de faction** qui se déclenchent si d'autres héros de la même faction sont présents dans l'équipe.

### Tableau des Synergies

| Faction | Synergie (3+ héros) | Synergie (5 héros) |
|---------|---------------------|-------------------|
| **☀️ Solari** | +25% DEF pour tous | +50% DEF + Immunité aux debuffs 1 fois/combat |
| **🌑 Umbrath** | +15% Dégâts aux ennemis <50% HP | +30% Drain de Vie pour tous |
| **🌿 Verdan** | +10% HP regen/s | +20% HP regen + Résurrection automatique 1 fois |
| **🌌 Aetherion** | +20% Dégâts Magiques | +40% Dégâts Magiques + Pénétration Magique 50% |
| **🔥 Vorn** | +10% Taux Critique | +25% Taux Critique + CRIT DMG 250% |
| **🌙 Nivara** | +15% Vitesse d'Attaque | +30% Vitesse + 20% Esquive |

### Synergies Inter-Factions (Avancées)

**Duo Synergies :**
- **Solari + Verdan :** +20% Healing Effectiveness
- **Umbrath + Vorn :** +25% Dégâts Physiques
- **Aetherion + Nivara :** +15% Cooldown Reduction

**Contre-Synergies :**
- **Solari + Umbrath :** -10% Effectiveness (opposés thématiquement)

---

## 👑 Combats de Boss

### Caractéristiques des Boss

| Paramètre | Boss vs Ennemis Normaux |
|-----------|------------------------|
| **HP** | x10 |
| **ATK** | x1.5 |
| **DEF/RES** | x1.3 |
| **Compétences** | 2-3 compétences spéciales |

### Phases de Boss

**Boss Multi-Phases (Boss de Chapitre) :**

```
Phase 1 (100%-70% HP):
  - Compétences normales

Phase 2 (70%-30% HP):
  - Enrage : +30% ATK
  - Invoque 2 adds

Phase 3 (30%-0% HP):
  - Berserk : +50% ATK, +50% SPD
  - Compétence ultime dévastatrice toutes les 15s
```

**Stratégie Recommandée :**
- Phase 1 : Focus boss, build ultimes
- Phase 2 : Éliminer adds rapidement, heal team
- Phase 3 : Burst avec tous les ultimes, survive

---

## 🎯 Méta et Équilibrage

### Rôles Essentiels (Meta Core)

**Pour Progression PvE :**
1. **Tank (1)** : Absorption de dégâts
2. **DPS Principal (1-2)** : Dégâts constants
3. **Healer (1)** : Sustain de l'équipe
4. **Buffer/Debuffer (1)** : Multiplicateurs
5. **Flex (0-1)** : Selon besoin (plus de DPS ou plus de sustain)

**Composition Standard :**
- 1 Tank (Thornroot, Lyria en off-tank)
- 2 DPS (Kael, Ragnar)
- 1 Healer (Lyria)
- 1 Support (Nira pour burst, Selene pour speed)

---

### Balancing par Rareté

**Objectif :** Un héros Légendaire doit être ~3x plus efficace qu'un héros Rare au même niveau.

| Rareté | Power Relative | Stats Multiplier | Compétences |
|--------|----------------|------------------|-------------|
| **Commun ⭐⭐** | 1x | 1.0x | 1 compétence basique |
| **Rare ⭐⭐⭐** | 2x | 1.5x | 2 compétences |
| **Épique ⭐⭐⭐⭐** | 5x | 2.5x | 3 compétences + 1 passif |
| **Légendaire ⭐⭐⭐⭐⭐** | 15x | 5x | 3 compétences + 1 ultime + 2 passifs |

**Justification :**
- Les Légendaires doivent être désirables (gacha hook)
- Les Rares doivent rester viables (F2P friendly)
- Pas de power creep excessif

---

## ⚙️ Systèmes Avancés

### 1. État Ailments (CC - Crowd Control)

| Ailment | Effet | Durée Typique | Résistance |
|---------|-------|---------------|------------|
| **Stun** | Immobilisé, ne peut agir | 1-3s | Possible avec RES élevée |
| **Freeze** | Immobilisé + vulnérabilité (+20% dégâts reçus) | 2-4s | Possible |
| **Poison** | DoT (5-10% HP max/s) | 5-10s | Non résistable |
| **Burn** | DoT (3-8% HP max/s) | 3-8s | Non résistable |
| **Bleed** | DoT (2-5% HP max/s), cumulative | 5s par stack | Non résistable |
| **Sleep** | Immobilisé, réveil si attaqué | 5-10s | Possible |
| **Silence** | Ne peut utiliser compétences | 3-5s | Possible |
| **Blind** | 50% de chance de rater attaques | 5-8s | Possible |

**Résistance aux Ailments :**
```
Chance_Resist% = (RES_Cible - ACC_Attaquant) / 10

Exemple :
- RES = 1500
- ACC = 1000
- Chance_Resist = 50%
```

---

### 2. Système de Combo

**Concept :** Enchaîner des compétences spécifiques déclenche des bonus.

**Exemple de Combo :**
```
1. Debuff DEF (Héros A) → -50% DEF cible
2. DPS AoE (Héros B) → Dégâts augmentés de 30%
3. Ultime DPS (Héros C) → Dégâts augmentés de 50%

Total : Dégâts x1.95 grâce au combo
```

**Feedback Visuel :**
- Affichage "COMBO x2", "COMBO x3" au-dessus des ennemis
- Particules connectant les héros participant au combo

---

### 3. Résurrection

**Mécanismes :**
- **Résurrection Active (Lyria Ultimate) :** Ramène un allié à 50% HP
- **Résurrection Passive (Synergie Verdan 5) :** Résurrection auto à 30% HP, 1 fois/combat
- **Équipement de Résurrection :** Artefact légendaire "Phoenix Feather" → Résurrection à 20% HP

**Limite :** Chaque héros ne peut être ressuscité qu'une seule fois par combat (sauf équipement spécial).

---

## 📈 Scaling et Progression

### Croissance des Stats par Niveau

**Formule :**
```
Stat_Niveau_N = Stat_Base * (1 + (N * Growth_Rate))

Où :
- Stat_Base = stat au niveau 1
- N = niveau actuel
- Growth_Rate = taux de croissance (0.05 = +5% par niveau)
```

**Taux de Croissance par Stat :**
- HP : 8% par niveau
- ATK : 6% par niveau
- DEF : 5% par niveau
- RES : 5% par niveau
- SPD : 2% par niveau (scaling plus lent)

---

### Système d'Éveil (Awakening)

**Éveiller un héros augmente ses caps de niveau et débloquer de nouvelles compétences.**

| Éveil | Niveau Max | Bonus | Coût (Essence d'Aether) |
|-------|------------|-------|-------------------------|
| **Base (5⭐)** | 50 | - | - |
| **+1 (6⭐)** | 60 | +10% Stats | 500 |
| **+2 (7⭐)** | 70 | +25% Stats | 1000 |
| **+3 (8⭐)** | 80 | +45% Stats | 2000 |
| **+4 (9⭐)** | 90 | +70% Stats + Nouvelle Compétence | 4000 |
| **+5 (10⭐)** | 100 | +100% Stats + Ultime Améliorée | 8000 |

**Coût Total pour 10⭐ :** 15,500 Essence d'Aether

---

## 🏆 PvP - Arène

### Différences avec PvE

**Adaptations pour PvP :**
- HP des héros réduit de 20% (combats plus rapides)
- Compétences de contrôle (stun, freeze) durée réduite de 50%
- Pas de résurrection (sauf passifs)
- Temps limite : 3 minutes par combat

### Méta PvP

**Top Tier (S-Tier) :**
- **Kael (Umbrath)** : Burst damage + heal reduction
- **Selene (Nivara)** : Speed + burst sur backline
- **Lyria (Solari)** : Sustain + boucliers

**Compteurs :**
- **vs Kael :** Tank avec high RES + heal dispel immunity
- **vs Selene :** Thornroot (tank) + compétences AoE
- **vs Lyria :** Kael (heal reduction)

---

## 🧪 Testing et Balancing

### Métriques de Performance

**Pour chaque héros, suivre :**
- **Pick Rate :** % d'utilisation
- **Win Rate :** % de victoires quand utilisé
- **Ban Rate (PvP)** : % de fois banni
- **Damage Share :** % des dégâts totaux de l'équipe

**Indicateurs de Déséquilibre :**
- Pick Rate > 60% → Nerf potentiel
- Win Rate > 55% → Trop fort
- Win Rate < 45% → Trop faible

---

## 🚀 Conclusion

Le système de combat d'**ECLIPSE LEGENDS** allie :
- ✅ **Accessibilité :** Auto-combat pour casual
- ✅ **Profondeur :** Synergies, combos, timing d'ultimes
- ✅ **Équilibrage :** Rareté vs skill, F2P competitiveness
- ✅ **Évolutivité :** Scaling infini via prestige et éveil

**Objectif final :** Créer une expérience de combat satisfaisante, stratégique, et équitable pour tous les types de joueurs.

---

**Document Version :** 1.0
**Dernière Mise à Jour :** Novembre 2025

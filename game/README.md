# 🎮 ECLIPSE LEGENDS - Rebirth of the Realms
## Jeu Jouable (Prototype Web)

**Un RPG Idle-Gacha inspiré de Tap Titans, Summoners War et Raid Shadow Legends**

---

## 🚀 Lancer le Jeu

### Option 1 : Ouvrir directement
1. Ouvrez le fichier `index.html` dans votre navigateur web
2. Le jeu se charge automatiquement !

### Option 2 : Serveur local (recommandé)
```bash
# Avec Python 3
cd game
python3 -m http.server 8000

# Puis ouvrir : http://localhost:8000
```

### Option 3 : Live Server (VS Code)
1. Installer l'extension "Live Server"
2. Clic droit sur `index.html` → "Open with Live Server"

---

## 🎮 Comment Jouer

### Premiers Pas
1. **Lancez le combat** : Cliquez sur "▶️ Auto" pour activer le mode automatique
2. **Tap Boost** : Cliquez sur "👆 TAP BOOST" pour infliger des dégâts bonus
3. **Invoquez des héros** : Allez dans l'onglet "🎲 Invocation" (vous avez 500 💎 de départ)
4. **Gérez votre équipe** : Onglet "👥 Héros" pour voir et améliorer vos héros

### Mécaniques Principales

#### ⚔️ Combat Idle
- Les héros combattent automatiquement
- 10 vagues par stage, la vague 10 est un boss
- Cliquez sur "👆 TAP BOOST" pour aider vos héros (30% du DPS total)
- Vitesse de combat : x1, x2, x4 (bouton "⏩")

#### 🎲 Système Gacha
**3 types de cristaux :**
- 💎 **Cristal Mineur** (100 gemmes) : Commun 70%, Rare 30%
- 💎 **Cristal Majeur** (300 gemmes) : Rare 60%, Épique 30%, Légendaire 10%
- 💎 **Cristal Sacré** (500 gemmes) : Épique 50%, Légendaire 50%

**Système de Pity** : Légendaire garanti après 50 invocations sans en obtenir

#### 👥 Héros

**10 héros disponibles :**
- ⭐⭐⭐⭐⭐ **Légendaires** : Lyria, Kael, Vorgrim, Lunara
- ⭐⭐⭐⭐ **Épiques** : Thornroot, Nira
- ⭐⭐⭐ **Rares** : Ragnar, Selene
- ⭐⭐ **Communs** : Elios, Mora (héros de départ)

**6 factions :**
- ☀️ Solari (Tank/Soutien)
- 🌑 Umbrath (DPS/Drain)
- 🌿 Verdan (Régénération)
- 🌌 Aetherion (Mage/Burst)
- 🔥 Vorn (DPS Physique)
- 🌙 Nivara (Assassin/Speed)

#### 💰 Ressources
- **💰 Or** : Améliorer les héros, se génère passivement
- **💎 Gemmes** : Invoquer des héros (monnaie premium)
- **✨ Essence** : Obtenue des duplicatas, utilisée pour éveils

#### 📈 Progression
- **Stages infinis** : Difficulté croissante
- **Amélioration des héros** : Montez leur niveau avec de l'or
- **Composition d'équipe** : Max 5 héros actifs
- **Récompenses hors ligne** : Jusqu'à 12h de progression passive

---

## ⌨️ Raccourcis Clavier

| Touche | Action |
|--------|--------|
| **ESPACE** | Toggle Auto-combat |
| **T** | Tap Attack |
| **S** | Changer vitesse |
| **1** | Écran Combat |
| **2** | Écran Héros |
| **3** | Écran Invocation |
| **4** | Écran Boutique |
| **5** | Écran Options |

---

## 🛠️ Commandes Développeur

Ouvrez la console (F12) et tapez :

```javascript
// Ajouter de l'or
dev.addGold(1000000);

// Ajouter des gemmes
dev.addGems(10000);

// Obtenir tous les héros
dev.giveAllHeroes();

// Ajouter un héros spécifique
dev.addHero('kael');
dev.addHero('lyria');

// Avancer au stage 100
dev.skipToStage(100);

// Réinitialiser le pity counter
dev.resetPity();
```

---

## 📂 Structure du Code

```
game/
├── index.html          # Page principale
├── src/
│   ├── styles.css      # Styles Dark Fantasy
│   ├── data.js         # Base de données (héros, ennemis)
│   ├── game.js         # Moteur de jeu (state, sauvegarde)
│   ├── combat.js       # Système de combat idle
│   ├── gacha.js        # Système d'invocation
│   ├── ui.js           # Gestion de l'interface
│   └── main.js         # Point d'entrée
└── assets/             # Assets futurs
```

---

## 🎯 Fonctionnalités

### ✅ Implémentées
- ✅ Combat idle automatique
- ✅ Système gacha complet avec pity
- ✅ 10 héros jouables avec stats et compétences
- ✅ 6 factions distinctes
- ✅ Progression infinie (stages)
- ✅ Système de ressources (or, gemmes, essence)
- ✅ Amélioration de héros
- ✅ Gestion d'équipe (5 slots)
- ✅ Tap boost (attaque manuelle)
- ✅ Vitesses de combat (x1, x2, x4)
- ✅ Sauvegarde automatique (localStorage)
- ✅ Récompenses hors ligne
- ✅ Interface dark fantasy
- ✅ Animations et effets visuels

### 🚧 À Venir (Extensions Possibles)
- 🚧 Plus de héros (24 au total dans le concept)
- 🚧 Système de prestige (Renaissance Cosmique)
- 🚧 Artefacts et équipements
- 🚧 Tours de défi
- 🚧 Mode PvP
- 🚧 Guildes et raids
- 🚧 Événements quotidiens
- 🚧 Effets sonores et musique
- 🚧 Plus d'animations de compétences

---

## 💾 Sauvegarde

Le jeu sauvegarde automatiquement :
- Toutes les 30 secondes
- À chaque action importante
- Avant de fermer la page

**Réinitialiser :** Onglet Options → "🔄 Réinitialiser le Jeu"

**Exporter :** Onglet Options → "💾 Exporter Sauvegarde"

---

## 🎨 Personnalisation

### Modifier les Stats des Héros
Éditez `src/data.js` dans la section `GAME_DATA.heroes`

### Changer les Couleurs
Éditez les variables CSS dans `src/styles.css` (section `:root`)

### Ajuster la Difficulté
Modifiez les formules dans `src/combat.js` :
- `calculateDamage()` : Formule de dégâts
- `createEnemy()` : Stats des ennemis

---

## 🐛 Bugs Connus

Aucun bug critique connu pour le moment.

Si vous trouvez un bug, vérifiez la console (F12) pour les erreurs.

---

## 🎓 Crédits

**Concept & Développement :** Inspiré de Tap Titans, Summoners War, Raid Shadow Legends
**Technologies :** HTML5, CSS3, JavaScript Vanilla
**Icônes :** Emojis Unicode natifs

---

## 📜 Licence

Ce prototype est un proof-of-concept éducatif.
Utilisable librement pour apprendre et expérimenter.

---

## 🎉 Bon Jeu !

**Que la lumière guide votre chemin à travers l'Éclipse. ⚡**

---

**Version :** 1.0.0 (Prototype Jouable)
**Date :** Novembre 2025

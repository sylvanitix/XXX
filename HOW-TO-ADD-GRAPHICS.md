# 🎨 GUIDE : Ajouter des Graphismes Modernes à ECLIPSE LEGENDS

Ce guide vous montre comment remplacer les emojis par de **vraies images** modernes et professionnelles.

---

## 🎯 ÉTAPE 1 : Trouver des Assets Gratuits Modernes

### 🌟 Meilleurs Sites d'Assets Gratuits

#### Pour les Personnages de Héros
1. **Freepik** (gratuit avec attribution)
   - https://www.freepik.com/free-photos-vectors/fantasy-character
   - Cherchez "fantasy hero portrait", "RPG character", "knight warrior"
   - Format : PNG avec fond transparent

2. **Vecteezy** (gratuit avec attribution)
   - https://www.vecteezy.com
   - Cherchez "fantasy character vector"
   - Téléchargez en PNG haute résolution

3. **CleanPNG**
   - https://www.cleanpng.com/free/fantasy-character.html
   - Images PNG déjà transparentes

4. **Game-Icons.net**
   - https://game-icons.net
   - Icônes SVG gratuits pour compétences et UI

#### Pour les Effets VFX
1. **OpenGameArt**
   - https://opengameart.org/art-search?keys=vfx
   - Sprites d'effets magiques, particules

2. **Itch.io**
   - https://itch.io/game-assets/free/tag-vfx
   - Packs VFX gratuits

#### Pour l'Interface UI
1. **Kenney.nl** (100% gratuit, commercial OK)
   - https://kenney.nl/assets/ui-pack
   - https://kenney.nl/assets/ui-pack-rpg-extension
   - Boutons, cadres, icônes

2. **OpenGameArt - Fantasy GUI**
   - https://opengameart.org/content/free-fantasy-game-gui
   - Interface fantasy complète

---

## 📥 ÉTAPE 2 : Télécharger et Organiser

### Structure de Dossiers Recommandée

```
game/
└── assets/
    ├── heroes/
    │   ├── lyria.png          (Portrait Lyria)
    │   ├── kael.png           (Portrait Kael)
    │   ├── vorgrim.png        (Portrait Vorgrim)
    │   ├── lunara.png         (Portrait Lunara)
    │   └── ... (autres héros)
    ├── vfx/
    │   ├── attack.png         (Effet d'attaque)
    │   ├── heal.png           (Effet de soin)
    │   ├── explosion.png      (Explosion)
    │   └── summon-burst.gif   (Animation d'invocation)
    ├── ui/
    │   ├── button.png         (Bouton)
    │   ├── panel.png          (Panneau)
    │   └── frame.png          (Cadre)
    └── backgrounds/
        ├── combat-arena.jpg   (Arène de combat)
        └── summon-bg.jpg      (Fond d'invocation)
```

### Tailles d'Images Recommandées

| Type | Taille Optimale | Format |
|------|-----------------|--------|
| **Portrait de Héros** | 400x600px | PNG transparent |
| **Icône de Héros (mini)** | 128x128px | PNG |
| **Effet VFX** | 256x256px | PNG transparent ou sprite sheet |
| **Background d'arène** | 1920x1080px | JPG ou PNG |
| **Bouton UI** | Variable | PNG transparent (9-slice) |

---

## 💻 ÉTAPE 3 : Intégrer dans le Jeu

### Méthode 1 : Modifier le fichier `data.js`

Ouvrez `game/src/data.js` et ajoutez les chemins d'images :

```javascript
const GAME_DATA = {
    heroes: {
        lyria: {
            id: 'lyria',
            name: 'Lyria, Gardienne du Soleil',
            faction: 'solari',
            rarity: 'legendary',
            role: 'soutien',
            icon: '☀️',  // ← Garder l'emoji comme fallback
            image: 'assets/heroes/lyria.png',  // ← AJOUTER CECI
            portrait: 'assets/heroes/lyria-portrait.png',  // ← Image grande
            // ... reste des stats
        },
        // ... autres héros
    }
};
```

### Méthode 2 : Modifier `ui.js` pour Afficher les Images

Dans `game/src/ui.js`, trouvez la fonction `createHeroCard` et modifiez :

**AVANT :**
```javascript
card.innerHTML = `
    <div class="hero-avatar">
        ${hero.icon}  // ← Emoji
    </div>
`;
```

**APRÈS :**
```javascript
card.innerHTML = `
    <div class="hero-avatar" style="background-image: url('${hero.image || hero.portrait}'); background-size: cover;">
        ${!hero.image ? hero.icon : ''}  // ← Emoji seulement si pas d'image
    </div>
`;
```

---

## 🎨 ÉTAPE 4 : CSS pour Images de Qualité

Ajoutez dans `src/styles.css` :

```css
/* Images de héros avec effets */
.hero-avatar {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

/* Effet de brillance sur hover */
.hero-avatar::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
    );
    transform: rotate(45deg);
    transition: all 0.5s;
}

.hero-avatar:hover::before {
    left: 100%;
}

/* Bordure selon la faction */
.hero-avatar.solari { border: 3px solid var(--solari); }
.hero-avatar.umbrath { border: 3px solid var(--umbrath); }
.hero-avatar.verdan { border: 3px solid var(--verdan); }
.hero-avatar.aetherion { border: 3px solid var(--aetherion); }
.hero-avatar.vorn { border: 3px solid var(--vorn); }
.hero-avatar.nivara { border: 3px solid var(--nivara); }
```

---

## 🚀 ÉTAPE 5 : Effets VFX Animés

### Ajouter des Sprite Sheets

Si vous téléchargez un sprite sheet d'animation (ex: explosion en 8 frames) :

```css
.vfx-explosion {
    width: 128px;
    height: 128px;
    background: url('assets/vfx/explosion-sheet.png');
    animation: play-sprite 0.8s steps(8) 1;
}

@keyframes play-sprite {
    from { background-position: 0 0; }
    to { background-position: -1024px 0; } /* 8 frames * 128px */
}
```

### Ajouter dans le Combat

Dans `combat.js`, modifiez `dealDamage` :

```javascript
dealDamage(target, damage, attacker) {
    target.currentHp -= damage;

    // AJOUTER L'EFFET VFX
    const targetElement = document.querySelector(`[data-unit-id="${target.id}"]`);
    if (targetElement) {
        const vfx = document.createElement('div');
        vfx.className = 'vfx-explosion';
        vfx.style.position = 'absolute';
        vfx.style.top = '50%';
        vfx.style.left = '50%';
        vfx.style.transform = 'translate(-50%, -50%)';
        targetElement.appendChild(vfx);

        setTimeout(() => vfx.remove(), 800);
    }

    // ... reste du code
}
```

---

## 🎁 PACK D'ASSETS RECOMMANDÉS (Gratuits)

### 🔥 PACK COMPLET TOUT-EN-UN

**"Fantasy Hero Portraits Pack"** (Exemple)
1. Allez sur Freepik : https://www.freepik.com
2. Cherchez "fantasy RPG character portrait pack"
3. Téléchargez un pack de 10-20 personnages
4. Renommez selon vos héros : `lyria.png`, `kael.png`, etc.
5. Placez dans `game/assets/heroes/`

**"Magic VFX Pack"** (Exemple)
1. Allez sur OpenGameArt : https://opengameart.org
2. Cherchez "magic spell effects"
3. Téléchargez un pack d'effets
4. Placez dans `game/assets/vfx/`

**"Fantasy UI Complete"** (Kenney.nl)
1. Allez sur https://kenney.nl/assets/ui-pack-rpg-extension
2. Téléchargez le pack (gratuit, commercial OK)
3. Extrayez et placez dans `game/assets/ui/`

---

## ⚡ ÉTAPE 6 : Version Simplifiée (Drag & Drop)

Pour les moins techniques, créez un dossier `custom-assets/` :

```
game/
└── custom-assets/
    └── PUT_YOUR_IMAGES_HERE.txt
```

Puis modifiez `data.js` pour chercher automatiquement :

```javascript
// Auto-detect images
const heroImagePath = (heroId) => {
    const customPath = `custom-assets/${heroId}.png`;
    const defaultPath = `assets/heroes/${heroId}.png`;
    // Le navigateur chargera celle qui existe
    return customPath;
};
```

---

## 🎨 EXEMPLES CONCRETS

### Exemple 1 : Remplacer Lyria par une Vraie Image

1. **Téléchargez une image** de paladin/prêtresse blonde
2. **Renommez-la** en `lyria.png`
3. **Placez-la** dans `game/assets/heroes/lyria.png`
4. **Modifiez `data.js`** :
   ```javascript
   lyria: {
       // ...
       image: 'assets/heroes/lyria.png',
   }
   ```
5. **Rechargez le jeu** → L'image apparaît !

### Exemple 2 : Ajouter Effet de Feu sur Vorgrim

1. **Téléchargez** un sprite de flammes
2. **Placez** dans `assets/vfx/fire.png`
3. **Modifiez `combat.js`** dans `useSkill` :
   ```javascript
   case 'critical_strike':
       // Ajouter effet visuel
       showVFX(hero, 'fire');
       break;
   ```

---

## 📚 RESSOURCES SUPPLÉMENTAIRES

### Tutoriels Vidéo Recommandés
- "How to Add Sprites to HTML5 Game" (YouTube)
- "CSS Sprite Sheets Animation Tutorial"

### Outils Utiles
- **GIMP** (gratuit) : Redimensionner/éditer images
- **Aseprite** (payant) : Créer sprite sheets
- **TexturePacker** : Combiner images en atlas

### Communauté
- r/gamedev (Reddit)
- r/gameassets (Reddit)
- OpenGameArt Forums

---

## ✅ CHECKLIST FINALE

- [ ] Assets téléchargés et organisés
- [ ] `data.js` modifié avec chemins d'images
- [ ] `ui.js` modifié pour afficher images
- [ ] CSS ajusté pour styling
- [ ] VFX intégrés dans `combat.js`
- [ ] Testé dans le navigateur
- [ ] Images optimisées (< 500KB chacune)

---

## 🚀 RÉSULTAT FINAL

Après avoir suivi ce guide, votre jeu aura :
✅ Des portraits de héros professionnels
✅ Des effets VFX animés lors des combats
✅ Une UI moderne avec boutons stylisés
✅ Des backgrounds d'arène immersifs
✅ Un aspect visuel digne de Raid Shadow Legends !

---

## 💡 ASTUCE PRO

**Utilisez l'IA pour générer des assets !**
- Midjourney, Stable Diffusion, DALL-E
- Prompt : "fantasy RPG character portrait, knight, dark background, professional game art"
- Générez vos héros uniques en quelques minutes !

---

**Version :** 1.0
**Dernière Mise à Jour :** Novembre 2025

**Bon développement ! 🎨✨**

# ECLIPSE LEGENDS – Rebirth of the Realms
## Game Design Document (GDD)

---

## 📋 Informations Générales

**Titre du Jeu:** ECLIPSE LEGENDS – Rebirth of the Realms
**Genre:** Idle RPG / Gacha / Collection
**Plateforme:** Mobile (iOS & Android)
**Cible:** Joueurs de 13+ ans, fans de RPG mobile, collectionneurs
**Modèle économique:** Free-to-Play avec achats intégrés
**Inspirations:** Tap Titans, Summoners War, Raid Shadow Legends

---

## 🎮 Pitch Global

Dans un monde brisé par une **éclipse éternelle**, six royaumes légendaires s'affrontent pour restaurer la lumière et rétablir l'équilibre cosmique. Le joueur incarne un **Conjurateur** mystérieux, doté du pouvoir unique d'invoquer des héros issus de chaque faction à travers les Cristaux d'Éclipse.

Ces héros combattent automatiquement les forces des ténèbres pendant que le pouvoir cosmique et les ressources s'accumulent, même lorsque vous êtes hors ligne. Constituez votre équipe parfaite, découvrez des synergies entre factions, et percez les mystères de l'Éclipse pour devenir le champion ultime des Royaumes.

**ECLIPSE LEGENDS** offre une expérience mi-idle mi-gacha unique, mêlant :
- 🎯 **Stratégie** : composition d'équipe et synergies de faction
- 🎲 **Collection** : invocation de héros rares et légendaires
- ⚡ **Progression continue** : montée en puissance constante, idle rewards
- ⚔️ **Action** : combats automatiques avec possibilité de boosts manuels

---

## 🎨 Style Visuel

### Direction Artistique

**Dark Fantasy Stylisée** avec une esthétique semi-réaliste inspirée de Raid Shadow Legends et Summoners War.

**Caractéristiques visuelles:**
- 🌟 Couleurs riches et saturées avec contrastes marqués
- ✨ Effets de lumière magiques spectaculaires (particules, auras, éclairs)
- 🛡️ Armures et équipements très détaillés avec textures PBR
- 🌌 Atmosphères cosmiques et mystiques (nébuleuses, étoiles, portails)
- 💫 Animations d'invocation cinématiques avec effets visuels époustouflants
- ⚔️ Arènes dynamiques avec éléments interactifs et effets environnementaux

### Palette de Couleurs par Faction

| Faction | Couleurs Principales | Ambiance |
|---------|---------------------|----------|
| **Solari** | Or & Blanc | Lumière divine, pureté |
| **Umbrath** | Noir & Pourpre | Ténèbres corrompues, puissance |
| **Verdan** | Vert & Cuivre | Nature sauvage, vitalité |
| **Aetherion** | Bleu & Argent | Magie pure, mystère |
| **Vorn** | Rouge & Acier | Forge ardente, guerre |
| **Nivara** | Violet & Cyan | Lune mystique, illusions |

### Interface Utilisateur

- **Style:** Moderne avec ornements fantasy
- **Disposition:** Intuitive, optimisée pour mobile
- **Animations:** Fluides et réactives (60 FPS minimum)
- **Feedback:** Visuel et audio immédiat sur chaque action
- **Accessibilité:** Options de taille de police, contraste, daltonisme

---

## 🌍 Univers et Lore

### L'Éclipse Éternelle

Il y a mille ans, les six royaumes vivaient en harmonie sous la lumière de deux astres : le **Soleil Éternel** et la **Lune des Ombres**. Mais un rituel interdit déclencha la **Grande Éclipse**, fusionnant les deux astres en une entité corrompue qui plongea le monde dans un crépuscule permanent.

Depuis, les royaumes se sont fragmentés, chacun développant sa propre philosophie pour survivre dans ce monde déséquilibré. Des failles cosmiques sont apparues, permettant l'invocation de héros légendaires du passé et d'autres dimensions.

Vous êtes un **Conjurateur**, l'un des rares élus capables de maîtriser les **Cristaux d'Éclipse** pour invoquer ces champions et unifier les royaumes contre la corruption qui menace de tout consumer.

---

## ⚔️ Les Six Factions

### 1. ☀️ SOLARI – Chevaliers du Soleil

**Couleurs:** Or & Blanc
**Philosophie:** L'ordre, la justice et la lumière divine
**Style de Combat:** Tank et Soutien, protection d'équipe
**Caractéristiques:**
- Armures lourdes dorées avec motifs solaires
- Boucliers et épées rayonnantes
- Auras de lumière protectrices
- Sorts de guérison et de buff

**Forces:** Haute défense, soins, protection d'alliés
**Faiblesses:** DPS modéré, vulnérables aux debuffs

---

### 2. 🌑 UMBRATH – Démons de l'Éclipse

**Couleurs:** Noir & Pourpre
**Philosophie:** La puissance par la corruption, l'ambition sans limite
**Style de Combat:** DPS élevé avec drain de vie
**Caractéristiques:**
- Armures organiques sombres avec cristaux pourpres
- Armes imprégnées d'énergie corrompue
- Ailes démoniaquesou cornes
- Sorts de dégâts de zone et malédictions

**Forces:** DPS massif, drain de vie, debuffs puissants
**Faiblesses:** Défense faible, consomment leur propre santé

---

### 3. 🌿 VERDAN – Esprits Sylvestres

**Couleurs:** Vert & Cuivre
**Philosophie:** L'équilibre naturel, la régénération perpétuelle
**Style de Combat:** Tank avec régénération et contrôle
**Caractéristiques:**
- Armures de bois vivant, lianes et feuillages
- Armes naturelles (branches, épines, pierres)
- Familiers animaux ou créatures végétales
- Sorts d'enracinement et de régénération

**Forces:** Régénération constante, contrôle de zone, durabilité
**Faiblesses:** Dégâts modérés, vulnérables au feu

---

### 4. 🌌 AETHERION – Mages Célestes

**Couleurs:** Bleu & Argent
**Philosophie:** La connaissance absolue, la magie pure
**Style de Combat:** Mage burst avec téléportation
**Caractéristiques:**
- Robes flottantes avec runes lumineuses
- Bâtons et orbes magiques
- Effets de téléportation et portails
- Sorts de projectiles d'énergie pure

**Forces:** Burst damage élevé, mobilité, buffs magiques
**Faiblesses:** Très fragile, dépendant du mana

---

### 5. 🔥 VORN – Guerriers Forgelames

**Couleurs:** Rouge & Acier
**Philosophie:** L'honneur martial, la discipline de guerre
**Style de Combat:** DPS physique avec coups critiques
**Caractéristiques:**
- Armures de plaques avec ornements de forge
- Armes massives (haches, marteaux, épées à deux mains)
- Cicatrices de bataille et tatouages de guerre
- Buffs d'attaque et rage

**Forces:** DPS physique élevé, critiques dévastateurs
**Faiblesses:** Défense moyenne, pas de mobilité

---

### 6. 🌙 NIVARA – Ombres Lunaires

**Couleurs:** Violet & Cyan
**Philosophie:** La furtivité, les illusions et les secrets
**Style de Combat:** Assassin avec attaques rapides
**Caractéristiques:**
- Armures légères avec motifs lunaires
- Dagues, lames courbes, shurikens
- Capacité d'invisibilité et clones
- Attaques rapides et poison

**Forces:** Attaque speed, invisibilité, poison/bleed
**Faiblesses:** Très fragile, inefficace contre les tanks

---

## 🎮 Gameplay – Mécaniques Idle

### Principe de Base

Les héros du joueur combattent **automatiquement** les vagues d'ennemis dans des campagnes progressives. Le combat continue même lorsque le joueur ferme l'application, accumulant récompenses et progression.

### Mécaniques Idle Core

#### 1. **Auto-Battler**
- Les héros attaquent automatiquement selon leur vitesse d'attaque
- Utilisation automatique des compétences selon l'IA
- Rotation optimale des héros en fonction de leurs cooldowns

#### 2. **Offline Rewards**
- Le jeu continue de progresser hors ligne (jusqu'à 12h de récompenses)
- À la reconnexion, le joueur reçoit un récapitulatif des gains
- Bonus quotidien pour les connexions régulières

#### 3. **Tap Boost** (Inspiration Tap Titans)
- Le joueur peut **cliquer/taper** pour infliger des dégâts bonus
- Chaque tap génère une attaque cosmique instantanée
- DPS manuel = 10% du DPS des héros (au début)
- Déblocage d'upgrades pour augmenter l'efficacité du tap

#### 4. **Compétences Spéciales Manuelles**
- Le joueur peut activer manuellement les ultimes des héros
- Cooldowns partagés pour éviter le spam
- Crucial pour les combats de boss

#### 5. **Progression Continue**
- Avancement à travers des stages (1 à ∞)
- Chaque stage = 10 vagues + 1 boss
- Difficulté exponentielle encourageant le prestige

---

## 🎲 Mécaniques Gacha

### Système d'Invocation

Les héros sont obtenus via le **système de Cristaux d'Éclipse**, la mécanique gacha principale du jeu.

### Types de Cristaux

| Type | Coût | Rarités Disponibles |
|------|------|---------------------|
| **Cristal Mineur** | 100 gemmes | Commun, Rare |
| **Cristal Majeur** | 300 gemmes | Rare, Épique, Légendaire |
| **Cristal Sacré** | 500 gemmes | Épique, Légendaire (taux ↑) |
| **Invocation x10** | 2700 gemmes | 1 Épique+ garanti |

### Taux de Drop

| Rareté | Taux | Étoiles | Puissance Relative |
|--------|------|---------|-------------------|
| **Commun** | 60% | ⭐⭐ | Base |
| **Rare** | 30% | ⭐⭐⭐ | 2x |
| **Épique** | 8% | ⭐⭐⭐⭐ | 5x |
| **Légendaire** | 2% | ⭐⭐⭐⭐⭐ | 15x |

### Système de Pity

- **Pity Counter:** Après 50 invocations sans Légendaire, garantie d'obtention
- **Pity partiel:** Chaque 10 invocations garantit 1 Rare minimum
- **Compteur persistant:** Le pity ne se réinitialise pas

### Cinématiques d'Invocation

Les invocations de héros Légendaires déclenchent des **cinématiques spectaculaires** :
- Animation de cristal explosant avec effets de lumière
- Apparition dramatique du héros avec voix et signature
- Showcase des compétences et caractéristiques
- Option de skip après première visualisation

### Événements d'Invocation Thématiques

**Rotation hebdomadaire par faction:**
- Lundi: Solari Rate-Up (taux doublé pour héros Solari)
- Mardi: Umbrath Rate-Up
- Mercredi: Verdan Rate-Up
- Jeudi: Aetherion Rate-Up
- Vendredi: Vorn Rate-Up
- Samedi: Nivara Rate-Up
- Dimanche: All Factions Rate-Up

**Événements spéciaux mensuels:**
- Nouvelle série de héros limités
- Thèmes saisonniers (Halloween, Noël, etc.)
- Collaborations potentielles

---

## 💎 Ressources Principales

### 1. 💰 Or (Gold)

**Obtention:**
- Idle rewards (passif)
- Complétion de stages
- Vente d'équipement
- Missions quotidiennes

**Utilisation:**
- Montée de niveau des héros
- Amélioration d'équipement
- Déblocage de talents

**Particularité:** Ressource abondante, scaling exponentiel

---

### 2. 💎 Cristaux d'Éclipse (Premium Currency)

**Obtention:**
- Achat réel (IAP)
- Récompenses de progression (limité)
- Événements et succès
- Connexion quotidienne

**Utilisation:**
- Invocations de héros
- Achat de ressources rares
- Speed-up de timers
- Achat de skins cosmétiques

**Particularité:** Ressource premium, encourager l'achat mais jouable en F2P

---

### 3. ✨ Essence d'Aether

**Obtention:**
- Complétion de chapitres
- Dismantle de héros dupliqués
- Tours de défi hebdomadaires
- Raids d'alliance

**Utilisation:**
- Déblocage et upgrade de talents
- Éveil de héros (augmentation de rareté)
- Achat d'artefacts légendaires

**Particularité:** Bottleneck intentionnel pour progression end-game

---

### 4. ⚡ Énergie (Energy)

**Obtention:**
- Régénération passive (1 énergie / 5 min, max 100)
- Objets consommables
- Achat avec gemmes

**Utilisation:**
- Expéditions de ressources
- Donjons spéciaux
- Raids de boss

**Particularité:** Limite l'engagement quotidien, encourage les sessions multiples

---

### 5. 👻 Fragments d'Âme (Soul Fragments)

**Obtention:**
- Dismantle de héros
- Événements de faction
- Récompenses PvP

**Utilisation:**
- Fusion de héros (5 héros Rare → 1 Épique)
- Évolution de rareté
- Déblocage de héros spécifiques dans le Soul Shop

**Particularité:** Permet une progression garantie pour les unlucky players

---

## 📈 Progression du Joueur

### Niveaux de Progression

#### 1. **Niveau de Compte (Player Level)**
- XP gagnée via toutes les activités
- Débloque features progressivement
- Augmente les limites d'énergie et de ressources

#### 2. **Progression de Campagne**
- 10 Chapitres principaux, chacun avec 100 stages
- Chaque stage = 10 vagues + 1 boss
- Débloque des modes de jeu et fonctionnalités

#### 3. **Power Level (Puissance Totale)**
- Somme de la puissance de tous les héros possédés
- Indicateur de progression globale
- Utilisé pour matchmaking PvP

---

### Systèmes de Progression Avancée

#### 🌟 Prestige: Renaissance Cosmique

**Concept:**
Réinitialisation volontaire de la progression de campagne en échange de **bonus permanents**.

**Mécanisme:**
- Disponible après avoir atteint le Stage 500
- Réinitialise : niveaux de héros, or, progression de campagne
- Conserve : héros, équipement, talents, artefacts
- Octroie : **Points Cosmiques** (CP)

**Points Cosmiques:**
- Utilisés dans l'**Arbre Cosmique** pour des bonus permanents:
  - +% DPS global
  - +% Or obtenu
  - +% Vitesse de progression hors ligne
  - Déblocage de nouvelles compétences de héros
  - Réduction des cooldowns

**Nombre de Prestiges:**
- Scaling exponentiel (chaque prestige plus long que le précédent)
- Objectif: créer une progression infinie

---

#### 🗼 Tours de Défi (Challenge Towers)

**Tower of Eclipse:**
- 100 étages, difficulté croissante
- Réinitialisation mensuelle
- Récompenses: Essence d'Aether, Équipement Légendaire
- Chaque étage a des contraintes uniques (faction requirement, etc.)

**Tower of Eternity:**
- Progression infinie
- Leaderboard global
- Récompenses basées sur le rang

---

#### 🛡️ Raids d'Alliance

**Système:**
- Rejoindre ou créer une Alliance (guilde)
- Boss mondiaux avec points de vie énormes
- Dégâts contributifs de tous les membres
- Classement par Alliance

**Récompenses:**
- Monnaie d'Alliance
- Équipement exclusif de raid
- Essence d'Aether en masse

---

#### ⚔️ Arène PvP

**Modes:**
1. **Arène Classée** : Matchmaking par Power Level
2. **Arène en Temps Réel** : Combat synchrone (optionnel)
3. **Tournois Hebdomadaires** : Brackets à élimination

**Récompenses:**
- Fragments d'Âme
- Skins exclusifs
- Titres et cadres de profil

---

#### 🏆 Système de Succès (Achievements)

- Centaines de succès à débloquer
- Récompenses: Gemmes, Titres, Cadres, Skins
- Catégories: Collection, Combat, Progression, Social, Événements

---

## 👥 Héros Exemples

### ⭐⭐⭐⭐⭐ Légendaires

#### ☀️ Lyria, Gardienne du Soleil
- **Faction:** Solari
- **Rôle:** Soutien / Healer
- **Compétences:**
  - **Éclat Divin:** Soigne tous les alliés de 30% de leur HP max
  - **Bouclier Solaire:** Crée un bouclier absorbant 50% des dégâts pendant 5s
  - **Résurrection (Ultimate):** Ramène un allié tombé avec 50% HP
- **Synergie:** Augmente la défense des héros Solari de 25%
- **Signature:** "La lumière ne s'éteint jamais."

---

#### 🌑 Kael, Seigneur des Ombres
- **Faction:** Umbrath
- **Rôle:** DPS / Drain de Vie
- **Compétences:**
  - **Nova Corrompue:** AoE infligeant 500% d'ATK en dégâts
  - **Étreinte du Vide:** Absorbe 20% des dégâts infligés en HP
  - **Apocalypse d'Éclipse (Ultimate):** Frappe tous les ennemis et réduit leurs soins de 80%
- **Synergie:** +15% de dégâts aux ennemis sous 50% HP
- **Signature:** "Les ténèbres réclament leur dû."

---

### ⭐⭐⭐⭐ Épiques

#### 🌿 Thornroot, Gardien Sylvestre
- **Faction:** Verdan
- **Rôle:** Tank / Régénération
- **Compétences:**
  - **Enracinement:** Immobilise un ennemi pendant 3s
  - **Peau d'Écorce:** Réduit les dégâts reçus de 40%
  - **Renouveau (Ultimate):** Régénère 5% HP/s pendant 10s
- **Synergie:** Augmente la régénération HP de l'équipe de 10%

---

#### 🌌 Nira, Mage de l'Aether
- **Faction:** Aetherion
- **Rôle:** Mage / Burst
- **Compétences:**
  - **Projectile Aethérique:** Tire 3 projectiles infligeant 200% ATK chacun
  - **Téléportation:** Se téléporte derrière l'ennemi le plus fort
  - **Tempête Cosmique (Ultimate):** 800% ATK en dégâts AoE
- **Synergie:** +20% de dégâts magiques pour l'équipe

---

### ⭐⭐⭐ Rares

#### 🔥 Ragnar Forgecendre
- **Faction:** Vorn
- **Rôle:** DPS Physique
- **Compétences:**
  - **Frappe Enflammée:** 250% ATK avec 30% chance de critique
  - **Cri de Guerre:** +20% ATK à tous les alliés pendant 5s
- **Synergie:** +10% taux critique pour les héros Vorn

---

#### 🌙 Selene la Discrète
- **Faction:** Nivara
- **Rôle:** Assassin
- **Compétences:**
  - **Frappe Fantôme:** 300% ATK avec poison
  - **Invisibilité:** Devient intouchable pendant 2s
- **Synergie:** +15% vitesse d'attaque pour les héros Nivara

---

### ⭐⭐ Communs

#### ☀️ Elios l'Initié
- **Faction:** Solari
- **Rôle:** Soutien débutant
- **Compétence:** +10% défense à un allié
- **Usage:** Héros de départ, fodder pour fusion

---

#### 🌑 Mora l'Égarée
- **Faction:** Umbrath
- **Rôle:** Debuffer
- **Compétence:** -15% ATK à un ennemi
- **Usage:** Héros de départ, fodder pour fusion

---

## 🎵 Ambiance Sonore

### Direction Musicale

**Style:** Orchestral épique avec influences mystiques

**Éléments clés:**
- 🎻 Orchestrations riches (cordes, cuivres, bois)
- 👥 Chœurs mystiques et chants en latin imaginaire
- 🥁 Percussions tribales et célestes
- 🎹 Synthés atmosphériques pour les passages cosmiques

### Musiques par Contexte

| Contexte | Style | Émotions |
|----------|-------|----------|
| **Menu Principal** | Ambiance mystique, chœurs | Majesté, mystère |
| **Combats Normaux** | Rythme soutenu, percussions | Dynamisme, tension |
| **Boss Fight** | Intensité maximale, cuivres | Épique, héroïsme |
| **Invocation** | Crescendo orchestral | Anticipation, émerveillement |
| **Victoire** | Fanfare triomphale | Satisfaction, accomplissement |
| **Défaite** | Cordes mélancoliques | Détermination, retry |

### Effets Sonores (SFX)

- ⚔️ **Attaques:** Impacts distincts par arme (épée, magie, flèches)
- 💥 **Compétences:** SFX unique par héros et capacité
- 🎲 **Gacha:** Son de cristal se brisant, écho cosmique
- 💎 **Récompenses:** Jingle satisfaisant avec variation selon la valeur
- 🔔 **Notifications:** Sons agréables et non intrusifs

### Doublage Vocal

- **Héros Légendaires:** Voix doublées pour les ultimes et invocations
- **Annonceur:** Voix narrative pour événements importants
- **Langues:** Anglais par défaut, japonais optionnel (style anime)

---

## 🎯 Émotions et Expérience Visées

### Boucle Émotionnelle Centrale

1. **Collecte (Satisfaction passive)**
   - Plaisir de voir les ressources s'accumuler
   - Sentiment de progression continue
   - Reward même pour sessions courtes

2. **Invocation (Anticipation → Émerveillement)**
   - Tension avant l'ouverture du cristal
   - Explosion de joie pour un Légendaire
   - "Just one more pull" addiction loop

3. **Optimisation (Stratégie)**
   - Plaisir de théoriser compositions
   - Découverte de synergies cachées
   - Personnalisation de l'équipe

4. **Progression (Accomplissement)**
   - Sentiment de puissance croissante
   - Déblocage de nouveaux contenus
   - Comparaison avec autres joueurs

5. **Collection (Complétionnisme)**
   - Fierté de collectionner tous les héros
   - Chase pour les héros rares
   - Achievement hunting

### Valeurs de Game Design

- **Respect du temps du joueur:** Progression même AFK
- **Générosité F2P:** Possible de progresser sans payer
- **Fairness PvP:** Pas de pure P2W, skill matters
- **Long-term engagement:** Contenu infini via prestige
- **Social:** Encouragement de la communauté (guildes, sharing)

---

## 📱 Spécifications Techniques

### Plateformes Cibles

- **iOS:** 12.0 et supérieur
- **Android:** 8.0 (API Level 26) et supérieur

### Performance

- **FPS Cible:** 60 FPS constant
- **Taille du jeu:** < 500 MB (téléchargement initial)
- **Assets additionnels:** Streaming pour voix et cinématiques HD
- **Batterie:** Optimisé pour session longue, mode économie d'énergie

### Moteur Recommandé

**Unity** ou **Unreal Engine 4/5**
- Excellent support mobile
- Asset Store riche
- Pipeline pour effets VFX spectaculaires
- Cross-platform facile

### Backend

- **Base de données:** Cloud-based (Firebase, AWS, Azure)
- **Sécurité:** Authentification, anti-cheat, encryptage des sauvegardes
- **Live Ops:** Capacité de pousser événements et hotfixes à chaud

---

## 💰 Modèle de Monétisation

### Free-to-Play Friendly

**Principes:**
- Tous les contenus accessibles en F2P (avec temps)
- Pas de paywalls durs
- Generosity early pour fidéliser

### Sources de Revenus

#### 1. **Vente de Gemmes (Cristaux d'Éclipse)**

| Pack | Gemmes | Prix | Bonus |
|------|--------|------|-------|
| Starter | 100 | $0.99 | +20 |
| Small | 500 | $4.99 | +100 |
| Medium | 1200 | $9.99 | +300 |
| Large | 2500 | $19.99 | +700 |
| Mega | 6500 | $49.99 | +2000 |
| Ultimate | 14000 | $99.99 | +5000 |

#### 2. **Passes Mensuels**

- **Passe Quotidien ($4.99/mois):** 100 gemmes/jour pendant 30 jours
- **Passe Premium ($9.99/mois):** Double rewards + skins exclusifs

#### 3. **Battle Pass Saisonnier**

- **Gratuit:** Récompenses basiques
- **Premium ($9.99):** Héros exclusif + skins + ressources premium

#### 4. **Packs Événementiels**

- Offres limitées avec excellent value
- Packs de démarrage pour nouveaux joueurs
- Packs thématiques (factions, saisons)

#### 5. **Cosmétiques**

- Skins de héros ($2.99-$9.99)
- Effets d'invocation personnalisés
- Cadres et titres de profil

### Équilibrage P2W vs F2P

- **PvP:** Matchmaking par Power Level (pas de whale vs F2P direct)
- **PvE:** Contenu complétable en F2P (plus long)
- **QoL:** Les achats accélèrent, ne créent pas de contenu exclusif fort

---

## 🚀 Roadmap de Développement

### Phase 1: Pre-Production (Mois 1-2)
- ✅ Finalisation du GDD
- Création de prototypes de combat
- Tests de gameplay idle vs tap
- Concept art des 6 factions

### Phase 2: Vertical Slice (Mois 3-5)
- Développement du premier chapitre complet
- Implémentation du système gacha
- 12 héros jouables (2 par faction)
- UI/UX complète

### Phase 3: Production (Mois 6-12)
- Contenu complet: 5 chapitres, 50 héros
- Systèmes avancés (prestige, tours, raids)
- PvP et systèmes sociaux
- Intégration monétisation

### Phase 4: Soft Launch (Mois 13-14)
- Launch dans pays test (Canada, Philippines)
- Collecte de données et feedback
- Ajustements d'équilibrage
- Optimisation technique

### Phase 5: Global Launch (Mois 15)
- Lancement mondial
- Campagne marketing
- Support multi-langues
- Live Ops continu

### Post-Launch
- Nouveaux héros mensuels
- Événements hebdomadaires
- Nouvelles factions (extension)
- Collaborations

---

## 📊 Métriques de Succès (KPIs)

### Engagement
- **DAU/MAU Ratio:** > 30%
- **Session Length:** 15-20 min moyenne
- **Retention D1:** > 50%
- **Retention D7:** > 25%
- **Retention D30:** > 10%

### Monétisation
- **ARPU:** $2-5
- **ARPPU:** $15-30
- **Conversion Rate:** 3-5%
- **LTV:** $50-100

### Social
- **Guild Join Rate:** > 60%
- **Social Shares:** Tracking des partages d'invocations
- **Referral:** Programme de parrainage

---

## ✨ Points Différenciateurs

### Ce qui rend ECLIPSE LEGENDS unique:

1. **Fusion Idle-Gacha Équilibrée**
   - Ni trop idle (pas assez engaging), ni trop actif (trop demanding)
   - Flexibilité de jouer hardcore ou casuel

2. **Système de Factions Profond**
   - 6 factions distinctes avec identités fortes
   - Synergies inter-factions encourageant la diversité

3. **Prestige Infini**
   - Contenu endgame véritablement sans fin
   - Progression permanente via Points Cosmiques

4. **Qualité Visuelle AAA Mobile**
   - Graphismes comparables à Raid
   - Animations et VFX spectaculaires

5. **Générosité F2P**
   - Système de Fragments d'Âme permettant progression garantie
   - Pity system protégeant contre la malchance

6. **Lore Cohérent**
   - Univers riche et extensible
   - Storytelling via événements et quêtes

---

## 📞 Conclusion

**ECLIPSE LEGENDS – Rebirth of the Realms** est conçu pour capturer le meilleur des genres idle et gacha, en offrant une expérience accessible mais profonde, casual mais stratégique, généreuse mais monétisable.

L'objectif est de créer un jeu mobile capable de fidéliser une communauté passionnée sur le long terme, tout en atteignant la rentabilité via un modèle F2P éthique et respectueux.

---

**Document Version:** 1.0
**Dernière Mise à Jour:** Novembre 2025
**Status:** Concept Complet – Prêt pour Pre-Production

---


# 🎲 Mécaniques Gacha - ECLIPSE LEGENDS

Ce document détaille le système d'invocation (gacha) qui est au cœur de l'expérience de collection d'**ECLIPSE LEGENDS**.

---

## 🎯 Philosophie du Système Gacha

**Objectifs :**
- ✨ Créer des moments d'émerveillement et d'excitation
- 🎁 Système équitable avec protection anti-malchance (pity)
- 💎 Monétisation éthique (F2P viable)
- 🎮 Encourager la collection complète tout en respectant les joueurs

---

## 💎 Types de Cristaux d'Invocation

### Tableau Récapitulatif

| Cristal | Coût (Gemmes) | Coût (Réel) Equiv. | Rarités Disponibles | Pity Compteur | Recommandé Pour |
|---------|---------------|---------------------|---------------------|---------------|-----------------|
| **Cristal Mineur** | 100 | ~$1 | Commun (70%), Rare (30%) | Non | Débutants, éviter après niveau 20 |
| **Cristal Majeur** | 300 | ~$3 | Rare (60%), Épique (30%), Légendaire (10%) | Oui (1/50) | Usage principal |
| **Cristal Sacré** | 500 | ~$5 | Épique (50%), Légendaire (50%) | Oui (1/25) | Whales, événements |
| **Invocation x10** | 2700 | ~$27 (-10%) | Comme Majeur | Oui + 1 Épique+ garanti | Optimal F2P |

---

## 📊 Taux de Drop Détaillés

### Cristal Mineur (Early Game)

| Rareté | Taux | Étoiles | Utilité |
|--------|------|---------|---------|
| **Commun** | 70% | ⭐⭐ | Fodder pour fusion |
| **Rare** | 30% | ⭐⭐⭐ | Héros early-game |

**Aucun Légendaire possible** - Cristal à éviter après niveau 20.

---

### Cristal Majeur (Standard)

| Rareté | Taux | Taux avec Pity (45+) | Étoiles | Power Relative |
|--------|------|----------------------|---------|----------------|
| **Rare** | 60% | 50% | ⭐⭐⭐ | 2x Commun |
| **Épique** | 30% | 30% | ⭐⭐⭐⭐ | 5x Commun |
| **Légendaire** | 10% | 20% (à 50) | ⭐⭐⭐⭐⭐ | 15x Commun |

**Pity :**
- Compteur augmente à chaque invocation sans Légendaire
- À 50 pulls, garantie d'un Légendaire
- Compteur se réinitialise après obtention d'un Légendaire

---

### Cristal Sacré (Premium)

| Rareté | Taux | Taux avec Pity (20+) | Étoiles |
|--------|------|----------------------|---------|
| **Épique** | 50% | 30% | ⭐⭐⭐⭐ |
| **Légendaire** | 50% | 70% (à 25) | ⭐⭐⭐⭐⭐ |

**Pity :**
- Compteur séparé du Cristal Majeur
- Garantie à 25 pulls
- Recommandé uniquement pour chasse de héros spécifiques

---

### Invocation x10 (Best Value)

**Caractéristiques :**
- Coût : 2700 gemmes (économie de 10% vs 10x Majeur)
- Taux : Identiques au Cristal Majeur
- **Bonus Garanti :** 1 héros Épique minimum dans les 10
- Le Pity compte pour 10 pulls d'un coup

**Recommandation :** Toujours privilégier les x10 plutôt que les pulls simples.

---

## 🎰 Système de Pity (Anti-Malchance)

### Pity Standard (Cristaux Majeurs)

**Fonctionnement :**
```
Compteur_Pity = 0

FOR EACH invocation:
  IF héros obtenu == Légendaire:
    Compteur_Pity = 0
  ELSE:
    Compteur_Pity += 1

  IF Compteur_Pity >= 50:
    Force_Légendaire = TRUE
    Compteur_Pity = 0
```

**Affichage au Joueur :**
```
┌────────────────────────────────────┐
│  CRISTAL MAJEUR                    │
├────────────────────────────────────┤
│  [============================]    │
│   32/50 vers Légendaire Garanti    │
└────────────────────────────────────┘
```

**Transparence :**
- Le compteur est toujours visible
- Historique des 10 dernières invocations consultable
- Aucun "soft pity" caché, système totalement transparent

---

### Pity Partiel (Mini-Garanties)

**Garantie Rare (Tous Cristaux) :**
- Chaque 10 invocations garantit au moins 1 Rare (pour Mineurs)
- Chaque 5 invocations garantit au moins 1 Épique (pour Majeurs)

**Garantie x10 :**
- L'invocation x10 garantit toujours au moins 1 Épique
- Si pity principal à 45+, x10 garantit 1 Légendaire dans le lot

---

## 🎬 Cinématiques d'Invocation

### Système d'Animation

**Séquence Standard (2-3 secondes) :**
```
1. Cristal apparaît et flotte (0.5s)
2. Joueur tape sur le cristal
3. Cristal se fissure avec particules (0.5s)
4. Explosion de lumière, couleur selon rareté (1s)
5. Héros apparaît avec pose signature (1s)
6. Affichage des stats et nom (2s)
```

**Couleurs par Rareté :**
- **Commun :** Lumière blanche/grise
- **Rare :** Lumière bleue
- **Épique :** Lumière violette avec éclairs
- **Légendaire :** Explosion dorée avec rayons cosmiques + shake screen

---

### Cinématique Légendaire Étendue (5-8 secondes)

**Pour les héros Légendaires uniquement :**

```
1. Cristal apparaît, aura dorée pulsante (1s)
2. Joueur tape, cristal explose en slow-motion (1.5s)
3. Portail cosmique s'ouvre avec effets spectaculaires (2s)
4. Héros émerge du portail avec animation unique (2s)
5. Voix du héros prononçant sa signature (1s)
   → Lyria : "La lumière ne s'éteint jamais."
   → Kael : "Les ténèbres réclament leur dû."
6. Showcase tournant du héros 3D (2s)
7. Affichage des stats avec effets dorés (2s)
```

**Option de Skip :**
- Skip disponible après avoir vu une fois
- "Skip All" après 10 invocations du même héros

---

### Easter Eggs et Variations

**Teasing de Rareté :**
- Si Légendaire : cristal pulse en doré avant même de taper
- Si Épique : cristal pulse en violet
- Si Rare ou moins : aucune pulsation

**Faux Espoirs (Fun) :**
- 1% de chance d'avoir une lumière bleue qui devient violette (Rare upgrade vers Épique)
- 0.1% de chance d'avoir une lumière violette qui devient dorée (Épique upgrade vers Légendaire - bonus)

---

## 🎪 Événements d'Invocation

### Rotation Hebdomadaire par Faction

**Système de Rate-Up :**
Chaque jour de la semaine met en avant une faction avec **taux doublés** pour ses héros.

| Jour | Faction | Bonus Rate-Up | Utilité |
|------|---------|---------------|---------|
| **Lundi** | ☀️ Solari | x2 taux Solari | Farmers de soutien/tank |
| **Mardi** | 🌑 Umbrath | x2 taux Umbrath | Farmers de DPS |
| **Mercredi** | 🌿 Verdan | x2 taux Verdan | Farmers de sustain |
| **Jeudi** | 🌌 Aetherion | x2 taux Aetherion | Farmers de burst |
| **Vendredi** | 🔥 Vorn | x2 taux Vorn | Farmers de DPS physique |
| **Samedi** | 🌙 Nivara | x2 taux Nivara | Farmers d'assassins |
| **Dimanche** | 🌈 All Factions | Tous taux égaux +10% | Invocation générale |

**Affichage :**
```
┌────────────────────────────────────────┐
│  🌑 UMBRATH RATE-UP EVENT!             │
│  Jusqu'au : 23:59:59                   │
├────────────────────────────────────────┤
│  Taux Umbrath x2                       │
│  Kael, Seigneur des Ombres : 0.5% → 1%│
│  Mora l'Égarée : 10% → 20%             │
└────────────────────────────────────────┘
```

---

### Événements Spéciaux Mensuels

#### 1. **Nouvelle Série de Héros Limitée**

**Fréquence :** 1 fois par mois
**Durée :** 2 semaines

**Exemple : "Série des Héros Célestes"**
- 3 nouveaux héros Légendaires exclusifs
- Taux cumulés : 0.5% chacun (1.5% total de les obtenir)
- Après l'événement : ajoutés au pool standard à taux réduit (0.2% chacun)

**Motivation :** FOMO (Fear Of Missing Out) modéré, mais héros restent accessibles après.

---

#### 2. **Événements Saisonniers**

**Exemples :**
- **Halloween :** Série "Ombres d'Halloween" (skins et héros thème citrouille/fantôme)
- **Noël :** Série "Givre Éternel" (héros de glace avec skins festifs)
- **Anniversaire du jeu :** Banner avec tous les Légendaires à taux augmenté

---

#### 3. **Banner de Sélection (Player's Choice)**

**Concept :**
- Les joueurs votent pour leurs 5 héros Légendaires préférés
- Banner spécial avec uniquement ces 5 héros en pool Légendaire
- Taux : 2% par héros (10% total Légendaire)

**Durée :** 1 semaine par mois

---

## 💸 Économie de Gemmes

### Sources de Gemmes (F2P)

| Source | Fréquence | Montant (Gemmes) |
|--------|-----------|------------------|
| **Connexion Quotidienne** | Jour 1-7 | 50-500 |
| **Missions Quotidiennes** | Chaque jour | 150 |
| **Missions Hebdomadaires** | Chaque semaine | 500 |
| **Progression de Campagne** | Par chapitre complété | 100-300 |
| **Tours de Défi** | Par palier (tous les 10 étages) | 50-200 |
| **Arène PvP** | Récompenses hebdomadaires | 200-1000 (selon rang) |
| **Événements Temporaires** | Variable | 500-2000 |
| **Succès (Achievements)** | One-time | 50-500 par succès |
| **Maintenance Compensations** | Occasionnel | 100-300 |

**Total F2P Mensuel Estimé : 10,000-15,000 gemmes/mois**
- Soit : 3-5 invocations x10 par mois
- Soit : 30-50 Cristaux Majeurs par mois

---

### Pricing des Gemmes (IAP)

| Pack | Gemmes | Bonus | Prix (USD) | Valeur/$ |
|------|--------|-------|------------|----------|
| **Starter Pack** | 100 | +20 | $0.99 | 121 gemmes/$ |
| **Small Pack** | 500 | +100 | $4.99 | 120 gemmes/$ |
| **Medium Pack** | 1200 | +300 | $9.99 | 150 gemmes/$ |
| **Large Pack** | 2500 | +700 | $19.99 | 160 gemmes/$ |
| **Mega Pack** | 6500 | +2000 | $49.99 | 170 gemmes/$ |
| **Ultimate Pack** | 14000 | +5000 | $99.99 | 190 gemmes/$ |

**Bonus First Purchase :**
- Chaque pack offre **x2 gemmes** lors du premier achat
- Incentive fort pour conversion des F2P en light spenders

---

### Passes Mensuels

#### **Passe Quotidien ($4.99/mois)**
```
┌────────────────────────────────────┐
│  DAILY GEM PASS                    │
├────────────────────────────────────┤
│  100 gemmes par jour pendant 30j   │
│  Total : 3000 gemmes               │
│  Valeur : $30 de gemmes pour $5    │
└────────────────────────────────────┘
```
**Meilleur rapport qualité/prix** pour spenders réguliers.

---

#### **Passe Premium ($9.99/mois)**
```
┌────────────────────────────────────┐
│  PREMIUM PASS                      │
├────────────────────────────────────┤
│  ✓ 100 gemmes/jour (3000/mois)     │
│  ✓ Double récompenses idle         │
│  ✓ Vitesse x8 débloquée            │
│  ✓ Skin exclusif du mois           │
│  ✓ VIP Status (icône profil)       │
└────────────────────────────────────┘
```

---

## 🎁 Système de Pity Points (Bonus Loyalty)

### Concept : Shop de Pity

Chaque invocation (peu importe le résultat) donne des **Pity Points** échangeables dans un shop dédié.

**Gains :**
- Cristal Mineur : 1 Pity Point
- Cristal Majeur : 3 Pity Points
- Cristal Sacré : 5 Pity Points
- Invocation x10 : 30 Pity Points (Majeur) ou 50 (Sacré)

---

### Shop de Pity Points

| Objet | Coût (Pity Points) | Limite |
|-------|-------------------|--------|
| **Cristal Mineur** | 100 | Illimité |
| **Cristal Majeur** | 300 | Illimité |
| **Héros Épique Spécifique** | 1500 | 1 par héros |
| **Héros Légendaire Spécifique** | 5000 | 1 par héros |
| **Skin Exclusif** | 2000 | Limité |
| **Équipement Légendaire** | 1000 | Illimité |

**Utilité :**
- Permet une progression **garantie** même avec malchance extrême
- Limite le P2W : même les whales doivent farmer des points
- F2P peuvent obtenir leur héros favori en farmant (5000 points ≈ 1666 Majeurs ≈ 166 x10)

---

## 🔄 Système de Duplication

### Que se passe-t-il si on obtient un héros déjà possédé ?

**Options automatiques :**

#### 1. **Conversion en Fragments d'Âme**
- Commun : 10 Fragments
- Rare : 50 Fragments
- Épique : 200 Fragments
- Légendaire : 1000 Fragments

**Utilité des Fragments :**
- Utilisés dans le **Soul Shop** pour échanger contre des héros garantis
- Fusion : 5 Rares → 1 Épique aléatoire (coût: 250 Fragments)

---

#### 2. **Système de Limit Break (Éveil)**

**Alternative :** Garder le duplicata pour **éveiller** le héros existant.

**Mécanisme :**
```
Héros de base : 5⭐ (Légendaire)
+ 1 duplicata : 6⭐ (+10% stats)
+ 2 duplicatas : 7⭐ (+25% stats)
+ 3 duplicatas : 8⭐ (+45% stats)
+ 4 duplicatas : 9⭐ (+70% stats + nouvelle compétence)
+ 5 duplicatas : 10⭐ (MAX, +100% stats + compétence ultime améliorée)
```

**Choix Stratégique :**
- **Conversion :** Pour obtenir d'autres héros via Shop
- **Éveil :** Pour maxout un héros favori (meta)

---

## 📜 Transparence et Loot Box Regulations

### Conformité Légale

**ECLIPSE LEGENDS** respecte les réglementations internationales sur les loot boxes :

1. **Affichage des Taux :**
   - Tous les taux sont affichés clairement dans le jeu
   - Page "Drop Rates" accessible depuis l'écran d'invocation
   - Historique des invocations consultable

2. **Pas de Gambling pour Mineurs :**
   - Âge minimum : 13+ (Teen rating)
   - Pas de mécaniques de "double or nothing"
   - Gemmes non échangeables contre argent réel

3. **Contrôles Parentaux :**
   - Possibilité de désactiver les IAP via paramètres
   - Notifications de dépenses aux comptes parentaux (iOS/Android)

---

### Affichage Obligatoire des Taux

**Page accessible depuis menu Invocation :**

```
┌───────────────────────────────────────────┐
│  DROP RATES - CRISTAL MAJEUR              │
├───────────────────────────────────────────┤
│  Legendary Heroes (10.0%)                 │
│  ├─ Lyria, Gardienne du Soleil : 0.5%     │
│  ├─ Kael, Seigneur des Ombres : 0.5%      │
│  └─ ... (autres Légendaires)              │
│                                           │
│  Epic Heroes (30.0%)                      │
│  ├─ Thornroot : 1.5%                      │
│  └─ ...                                   │
│                                           │
│  Rare Heroes (60.0%)                      │
│  └─ ...                                   │
└───────────────────────────────────────────┘
```

---

## 🎯 Balancing F2P vs P2W

### Objectif : Viable en F2P, Confortable en P2P

**Comparaison :**

| Aspect | F2P Player (6 mois) | Light Spender (6 mois, $50 total) | Whale (6 mois, $1000+) |
|--------|---------------------|-----------------------------------|------------------------|
| **Légendaires** | 5-8 | 10-15 | 25-40 |
| **Héros 10⭐** | 0 | 1-2 | 5+ |
| **Progression** | Stage 300-400 | Stage 500-600 | Stage 800+ |
| **PvP Rank** | Top 30% | Top 10% | Top 1% |

**Garanties F2P :**
- Obtention d'au moins 1 Légendaire dans les 2 premières semaines (starter bonuses)
- 1 Légendaire garanti par mois (via pity et gemmes quotidiennes)
- Tous les contenus PvE accessibles (plus lent)

**Avantages P2P :**
- Accélération de la progression (pas de contenu exclusif)
- Plus de choix stratégiques (roster large)
- Domination PvP (mais matchmaking par Power Level)

---

## 🧪 A/B Testing et Optimisation

### Métriques à Surveiller

**Engagement :**
- **Pull Rate :** Nombre moyen d'invocations par joueur/jour
- **Conversion Rate :** % de joueurs achetant des gemmes
- **Retention Post-Pull :** Rétention après obtention d'un Légendaire

**Monétisation :**
- **ARPPU :** Revenue moyen par paying user
- **Whale Ratio :** % de revenus venant des top 1% spenders

**Satisfaction :**
- **Pity Satisfaction :** % de joueurs atteignant pity avant Légendaire (doit être <30%)
- **Pull Regret :** Taux de support tickets sur "unfair rates" (objectif <1%)

---

### Ajustements Dynamiques

**En fonction des data :**
- Si taux de frustration élevé : réduire pity à 40 pulls
- Si conversion trop basse : augmenter bonus first purchase
- Si whale ratio >70% : augmenter récompenses F2P pour équilibrer

---

## 🚀 Roadmap Gacha

### Post-Launch Améliorations

**Mois 1-3 :**
- Monitoring et ajustements de taux si nécessaire
- Premiers événements de rate-up

**Mois 4-6 :**
- Introduction du **Selector Ticket** (choix d'un Légendaire spécifique)
- Expansion du Soul Shop

**Mois 7-12 :**
- Système de **Trading** limité (échanger Fragments entre amis)
- Nouveaux types de cristaux (Cristal Ancestral, Cristal de Faction)

---

## ✨ Conclusion

Le système gacha d'**ECLIPSE LEGENDS** est conçu pour être :
- ✅ **Excitant** : Cinématiques, effets visuels, rareté
- ✅ **Équitable** : Pity system, transparence totale
- ✅ **Généreux** : Viable en F2P, pas de hard paywalls
- ✅ **Durable** : Économie équilibrée pour long-terme

**L'objectif final** : Que chaque joueur ressente la satisfaction de collectionner et d'améliorer des héros, qu'il dépense ou non.

---

**Document Version :** 1.0
**Dernière Mise à Jour :** Novembre 2025

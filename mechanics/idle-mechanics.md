# ⏱️ Mécaniques Idle - ECLIPSE LEGENDS

Ce document détaille tous les systèmes idle du jeu, permettant une progression passive continue.

---

## 🎯 Philosophie du Système Idle

**Objectif :** Permettre aux joueurs de progresser même lorsqu'ils ne jouent pas activement, tout en récompensant l'engagement actif.

**Équilibre :**
- **Progression passive :** 70% de l'efficacité active
- **Progression active (avec taps) :** 100% de l'efficacité
- **Offline rewards :** Cap à 12 heures de récompenses

---

## 🤖 Auto-Combat System

### Logique de Combat Automatique

#### Phase 1 : Initialisation
```
1. L'équipe de 5 héros est positionnée selon leur rôle
   - Tanks en première ligne
   - DPS et Mages en ligne médiane
   - Soutiens en ligne arrière

2. Les ennemis apparaissent par vagues
   - Vagues 1-9 : 3-5 ennemis normaux
   - Vague 10 (Boss) : 1 boss + 0-2 adds
```

#### Phase 2 : Boucle de Combat
```
FOR EACH frame (60 FPS):
  FOR EACH héros:
    IF cooldown_attaque == 0:
      - Sélectionner cible selon priorité de rôle
      - Infliger dégâts = ATK * multiplicateurs
      - Réinitialiser cooldown_attaque

    IF cooldown_compétence == 0:
      - Utiliser compétence selon IA
      - Appliquer effets (dégâts, buff, debuff, heal)
      - Réinitialiser cooldown_compétence

  FOR EACH ennemi:
    - Même logique que héros

  IF tous_ennemis_morts:
    - Distribuer récompenses de vague
    - Passer à vague suivante

  IF tous_héros_morts:
    - Fin du stage, calculer récompenses partielles
```

### Système de Ciblage IA

| Rôle du Héros | Priorité de Cible |
|---------------|-------------------|
| **Tank** | Ennemi le plus proche |
| **DPS Physique** | Ennemi avec le moins de défense |
| **DPS Magique** | Ennemi avec le moins de résistance magique |
| **Assassin** | Ennemi avec le plus d'ATK (backline) |
| **Soutien** | Allié avec le moins de HP % |

### Utilisation Automatique des Compétences

**Règles d'IA par type :**

**Compétences de Dégâts (DPS) :**
- Utilisées dès que disponibles
- Priorité : Ultimes > Compétences AoE > Compétences Single-Target

**Compétences de Soin (Healer) :**
- Déclenchées si un allié < 60% HP
- Priorité : Tank > DPS > Autres Soutiens

**Compétences de Buff :**
- Utilisées en début de combat ou après résurrection d'un allié
- Renouvelées avant expiration

**Compétences de Debuff :**
- Utilisées sur le boss ou l'ennemi avec le plus de HP

---

## 💰 Système de Ressources Passives

### Génération Passive d'Or

**Formule :**
```
Or_par_seconde = Base_Gold_Rate * Stage_Multiplier * Offline_Efficiency * Buffs

Où :
- Base_Gold_Rate = 10 * (Stage_Numéro ^ 1.5)
- Stage_Multiplier = 1.0 (online) ou 0.7 (offline)
- Offline_Efficiency = 1.0 (actif) ou 0.7 (idle)
- Buffs = somme des bonus (talents, artefacts, prestige)
```

**Exemple :**
- Stage 100, actif : 10 * (100^1.5) * 1.0 * 1.0 = 10,000 or/seconde
- Stage 100, offline : 10 * (100^1.5) * 0.7 * 0.7 = 4,900 or/seconde

### Drops de Ressources

**Pendant le Combat Actif :**

| Source | Fréquence | Ressources |
|--------|-----------|------------|
| **Vague normale** | Chaque vague | Or (100% chance), Équipement (5% chance) |
| **Vague 5** | Tous les 5 vagues | Or doublé, Essence d'Aether (10% chance) |
| **Boss (vague 10)** | Fin de stage | Or triplé, Équipement garanti (Rare+), Fragments (20% chance) |

**Offline (12h maximum) :**
- Accumulation continue d'or
- Pas de drops d'équipement ou fragments
- Récompense packagée à la reconnexion

---

## 📴 Offline Rewards System

### Calcul des Récompenses Hors Ligne

**Paramètres :**
```
Time_Offline = temps écoulé depuis dernière connexion (max 12h)
Highest_Stage = stage le plus haut atteint

Offline_Gold = Gold_Per_Second * Time_Offline * 0.7
Offline_Progress = min(Highest_Stage + 50, Highest_Stage * 1.1)
```

**Affichage au Retour :**
```
┌─────────────────────────────────────┐
│   WELCOME BACK, SUMMONER!           │
├─────────────────────────────────────┤
│ Time Away: 8h 32m                   │
│                                     │
│ 💰 Gold Earned: 4,582,193           │
│ ⚔️  Stages Cleared: 42               │
│ 🎁 Bonus Chest: Available           │
│                                     │
│    [COLLECT REWARDS]                │
└─────────────────────────────────────┘
```

**Bonus Chest :**
- 1 bonus chest par 4 heures offline (max 3)
- Contient : Gemmes (10-50), Essence d'Aether, Équipement aléatoire

---

## 👆 Système de Tap Boost (Tap Titans Style)

### Mécanique de Tap

**Principe :**
Le joueur peut taper sur l'écran pour infliger des dégâts supplémentaires manuellement, augmentant temporairement le DPS total.

**Formule de Dégâts de Tap :**
```
Tap_Damage = (Total_Heroes_DPS * Tap_Multiplier) + Tap_Upgrades

Où :
- Total_Heroes_DPS = somme des DPS de tous les héros
- Tap_Multiplier = 0.1 (au début), upgradable jusqu'à 1.0
- Tap_Upgrades = bonus flat des talents cosmiques
```

**Exemple :**
- DPS des héros : 1,000,000
- Tap Multiplier : 0.3
- Tap Upgrades : +50,000
- **Dégâts par Tap : 350,000**

### Optimisations du Tap

**Via l'Arbre Cosmique (Prestige) :**

| Talent | Effet | Coût (Points Cosmiques) |
|--------|-------|-------------------------|
| **Frappe Puissante I** | +0.05 Tap Multiplier | 10 CP |
| **Frappe Puissante II** | +0.1 Tap Multiplier | 50 CP |
| **Frappe Puissante III** | +0.2 Tap Multiplier | 200 CP |
| **Multi-Tap** | Chaque tap compte double | 500 CP |
| **Frappe Cosmique** | +100,000 dégâts flat par tap | 1000 CP |

**Via Artefacts :**
- **Gant de Force Titanesque** : +25% Tap Damage
- **Anneau de Rapidité** : +50% Tap Speed (cooldown réduit)

### Tap Speed et Cooldown

**Limitation :**
- Cooldown de 0.1 seconde entre chaque tap (10 taps/seconde maximum)
- Peut être réduit à 0.05s avec artefacts

**Feedback Visuel :**
- Explosion de particules cosmiques au point de tap
- Dégâts flottants affichant le montant
- Shake screen léger sur tap critique

---

## ⚡ Compétences Manuelles (Ultimes)

### Activation Manuelle

Bien que le jeu soit idle, le joueur peut **manuellement activer les ultimes** des héros pour optimiser les combats, notamment contre les boss.

**Interface :**
```
┌──────────────────────────────────────────┐
│  [Lyria]   [Kael]   [Thornroot]  [Nira]  │
│   🔆        🌑       🌿          🌌      │
│   READY     45s      READY       12s     │
│  [USE]      [...]    [USE]       [...]   │
└──────────────────────────────────────────┘
```

**Cooldown Partagé :**
- Les ultimes ont un cooldown individuel (60-120s)
- Pas de cooldown global partagé (tous peuvent être activés simultanément si prêts)

**Moment Optimal d'Utilisation :**
- **Vagues de Boss :** Utiliser tous les ultimes DPS
- **Urgence :** Utiliser ultimes de soin/protection si équipe basse HP
- **Burst :** Combiner plusieurs ultimes pour synergie (ex: debuff + DPS)

---

## 🏃 Vitesse de Progression

### Vitesse de Jeu

**Modes de Vitesse :**

| Mode | Multiplicateur | Déblocage |
|------|----------------|-----------|
| **x1** | Vitesse normale | Par défaut |
| **x2** | Double speed | Niveau joueur 10 |
| **x4** | Quadruple speed | Niveau joueur 25 |
| **x8** | Octuple speed (Premium) | Passe Premium uniquement |

**Impact :**
- Accélère les animations de combat
- Accélère la génération de ressources actives
- Ne change pas la difficulté

### Auto-Progression

**Fonctionnalité :**
Le jeu progresse automatiquement de stage en stage tant que l'équipe peut vaincre les ennemis.

**Conditions d'Arrêt :**
1. Équipe vaincue (tous les héros morts)
2. Boss infranchissable après 3 tentatives
3. Énergie épuisée (pour certains modes)
4. Joueur pause manuellement

**Reprise Automatique :**
- Après upgrade de héros : proposition de retry auto
- Après prestige : redémarrage auto au Stage 1

---

## 📊 Optimisation de l'Idle

### Maximiser les Gains Passifs

**Stratégies Recommandées :**

1. **Équilibrer l'équipe :**
   - 1 Tank (survie)
   - 2 DPS (clears rapides)
   - 1 Healer (sustain)
   - 1 Buffer/Debuffer (efficacité)

2. **Investir dans les Talents Idle :**
   - +% Or offline
   - +% Vitesse de combat
   - Augmentation de la limite offline (12h → 24h)

3. **Artefacts Idle :**
   - **Horloge Éternelle** : +50% vitesse offline
   - **Coffre du Collectionneur** : +30% or offline
   - **Sablier Cosmique** : +12h de limite offline

4. **Prestige Régulier :**
   - Prestiger dès que la progression ralentit
   - Viser 2-3 prestiges par semaine pour gains optimaux

---

## 🎁 Récompenses et Incitations

### Connexion Quotidienne

**Système de Streaks :**

| Jour | Récompense |
|------|------------|
| Jour 1 | 50 gemmes + 10K or |
| Jour 2 | 100 gemmes + Équipement Rare |
| Jour 3 | 150 gemmes + Essence d'Aether (50) |
| Jour 4 | 200 gemmes + Cristal Mineur |
| Jour 5 | 250 gemmes + Équipement Épique |
| Jour 6 | 300 gemmes + Cristal Majeur |
| Jour 7 | **500 gemmes + Cristal Sacré + Héros Épique Garanti** |

**Reset de Streak :**
- Si 2 jours consécutifs manqués : reset à Jour 1
- Possibilité d'acheter un "Streak Saver" (gemmes)

### Missions Quotidiennes Idle

**3 Missions Passives par Jour :**

1. **Générer 1,000,000 d'or** → Récompense : 50 gemmes
2. **Compléter 50 stages** → Récompense : Essence d'Aether (20)
3. **Être connecté pendant 30 min cumulées** → Récompense : Fragments d'Âme (10)

**Bonus Hebdomadaire :**
- Compléter 20 missions quotidiennes dans la semaine : Cristal Majeur gratuit

---

## 🔧 Paramètres de Réglage Idle

### Options Accessibles au Joueur

**Menu Paramètres → Idle :**

```
┌─────────────────────────────────────────┐
│  IDLE SETTINGS                          │
├─────────────────────────────────────────┤
│ ☑ Auto-Progression                      │
│ ☑ Use Ultimates Automatically           │
│ ☑ Auto-Sell Equipment (< Epic)          │
│ ☑ Collect Offline Rewards on Login      │
│ ☐ Notifications for Offline Milestones  │
│                                         │
│ Battle Speed: [x1] [x2] [x4] [x8]      │
│                                         │
│ Retry Failed Stages: [3] times         │
└─────────────────────────────────────────┘
```

**Personnalisation Avancée (Premium) :**
- Choix des compétences à auto-utiliser
- Priorité de farm (or vs équipement vs progression)
- Notifications push personnalisées

---

## 📈 Balancing et Tuning

### Courbe de Difficulté

**Objectif :**
- Le joueur doit sentir une progression constante
- Mur de difficulté tous les 50-100 stages pour inciter à l'optimisation

**Formule de Puissance des Ennemis :**
```
Enemy_HP = Base_HP * (Stage_Number ^ 1.6)
Enemy_ATK = Base_ATK * (Stage_Number ^ 1.55)

Boss_HP = Enemy_HP * 10
Boss_ATK = Enemy_ATK * 1.5
```

**Points de Friction Intentionnels :**
- Stage 50 : Premier mur, incite à améliorer héros
- Stage 100 : Deuxième mur, introduction du prestige
- Stage 250 : Mur mid-game, nécessite héros Épiques+
- Stage 500 : Mur late-game, premier prestige recommandé

---

## 🚀 Conclusion

Le système idle d'**ECLIPSE LEGENDS** est conçu pour :
- ✅ Respecter le temps du joueur (progression même AFK)
- ✅ Récompenser l'engagement actif (taps, ultimes manuels)
- ✅ Créer une addiction saine (daily rewards, offline bonuses)
- ✅ Permettre un gameplay flexible (casual ou hardcore)

**La clé du succès :** Trouver l'équilibre parfait entre passif et actif, pour que chaque type de joueur y trouve son compte.

---

**Document Version :** 1.0
**Dernière Mise à Jour :** Novembre 2025

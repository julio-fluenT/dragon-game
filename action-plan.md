# Phase 1 : Mise en place du projet ~ 5 minutes

- Création du projet avec Vite, React et TypeScript
- Ajout de shadcn pour le style
- Init Git
- Installation des composants shadcn :
  - pnpm dlx shadcn@latest add button
    pnpm dlx shadcn@latest add card
    pnpm dlx shadcn@latest add dialog
    pnpm dlx shadcn@latest add progress
    pnpm dlx shadcn@latest add input

# Phase 2 : Organisation du projet ~ 3 minutes

- Mise en place des dossiers
  /components
  /hooks
  /types
  /context
  /utils
  /assets
  /lib

- Création des types pour les objets du jeu
  Joueur:{ pseudo: string}
  Objet:{
  name: string;
  chanceBonus: number;
  description?: string;
  }

- Données mock pour faire des tests OBJ001, OBJ002, OBJ003

# Phase 3 : Logique principale du jeu (10 minutes)

- Contexte + Reducer pour gérer les états du jeu
  Action Types :

  - ADD_ITEM
  - HUNT_DRAGON
  - RESET_GAME or ITEM_REMOVED

  State : on aura le joueur, la liste des items, le total des chances (pour (de)normaliser), l'historique des chasses(if have time) et les items disponibles(depuis le mock)

- Composant inventaire pour voir les objets récoltés (card list)

- Scanner QR code pour choper des objets (input)

# Phase 4 : Sauvegarde des données (5 minutes)

- Hook localStorage pour sauvegarder automatiquement (auto sync)

# Phase 5 : Mécaniques de chasse (10 minutes)

- Composant pour tenter de chasser le dragon

- Intégration de la chasse avec le state global du jeu

# Phase 6 : Historique et stats (? minutes)

- Tracking des anciennes chasses

- Affichage des résultats passés et des stats

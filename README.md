# Guide du jeu Chasse au Dragon

## Présentation

Ce mini-jeu simule une chasse au dragon où vous devez collecter des objets pour augmenter vos chances de succès. Chaque objet vous donne un bonus de chance, et plus votre chance totale est élevée, plus vous avez de chances de réussir votre chasse.

## Installation

Pour installer et lancer le jeu :

1. Clonez le dépôt

   ```bash
   git clone https://github.com/julio-fluenT/dragon-game.git
   cd dragon-game
   ```

2. Installez les dépendances

   ```bash
   npm install
   ```

3. Lancez l'application

   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement http://localhost:5173)

## Comment jouer

### 1. Collecter des objets

Pour collecter des objets, utilisez le scanner de QR code (simulé par saisie manuelle) :

1. Entrez l'un des codes suivants dans le champ de saisie :
   - `OBJ001` : Lame des Sept Mers
   - `OBJ002` : Cuirasse Antique
   - `OBJ003` : Collier de Durée
   - `OBJ004` : Bottes de Rapidité
   - `OBJ005` : Hache Sanglante
2. Cliquez sur le bouton "Scanner"
3. L'objet est ajouté à votre inventaire

Attention : vous ne pouvez pas ajouter deux fois le même objet.

### 2. Consulter votre inventaire

Votre inventaire affiche :

- La liste des objets que vous avez ajoutés
- Le bonus de chance apporté par chaque objet
- Votre chance totale (somme des bonus de tous vos objets)

### 3. Chasser le dragon

Une fois que vous avez collecté des objets :

1. Cliquez sur le bouton "Partir à la chasse"
2. Le jeu génère un nombre aléatoire entre 0 et 100
3. Si ce nombre est inférieur ou égal à votre chance totale, vous gagnez !
4. Sinon, vous perdez...

L'historique de vos chasses est affiché sous le bouton de chasse.

## Persistance des données

Votre progression est automatiquement sauvegardée dans le navigateur. Si vous fermez et rouvrez la page, vous retrouverez votre inventaire et votre historique de chasses.

## Réinitialiser le jeu

Pour recommencer à zéro, vous pouvez effacer les données du navigateur (localStorage).

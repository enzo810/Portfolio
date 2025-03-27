## Portfolio

Ce projet est réalisé avec Next.js

## Installation

Plusieurs étapes sont nécessaires pour démarrer le projet en local :

1. `pnpm i` pour installer les dépendances du projet

2. Récupérer la clé API de la base de donné Neon auprès d'un développeur de l'équipe

3. Créer un fichier .env et y ajouter la clé récupérée dans une variable `DATABASE_URL`

4. `npx prisma generate` pour initialiser le client prisma

5. `npx prisma migrate dev` synchroniser la base de donnée avec les migrations locales

## Lancer le projet

Exécuter la commande `npm next dev` dans le terminal

## Mise à jour du projet

Après chaque pull, 2 commandes sont nécessaires :

1. `pnpm i` pour mettre à jour les dépendances

2. `npx prisma migrate dev` pour appliquer les potentielles nouvelles migrations sur la base de donnée

## Modification du schéma de base de données

1. Modifier le fichier `prisma/schema.prisma`

2. `npx prisma migrate dev --name <nom-de-la-migration>` pour créer une nouvelle migration et appliquer les changements

# Kasa

Application web de location d'appartements entre particuliers, développée en **React**.
Projet réalisé dans le cadre de la formation Développeur Web (OpenClassrooms).

## Stack technique

- [React 18](https://react.dev/)
- [React Router 6](https://reactrouter.com/) pour la navigation
- [Vite](https://vitejs.dev/) comme bundler
- [Sass](https://sass-lang.com/) pour les styles

## Fonctionnalités

- Page d'accueil avec la galerie des logements
- Page d'un logement (carrousel d'images, note, tags, hôte, description, équipements)
- Page « À propos » avec menus déroulants (Collapse)
- Page d'erreur 404 et redirection des routes inexistantes
- Carrousel circulaire (boucle aux extrémités, masqué s'il n'y a qu'une image)
- Menus déroulants animés en CSS
- Design responsive conforme aux maquettes Figma

## Installation

```bash
npm install
```

## Lancer le projet en développement

```bash
npm start
```

L'application est servie sur [http://localhost:5173](http://localhost:5173).

## Générer la version de production

```bash
npm run build
```

## Structure du projet

```
src/
├── assets/        Images et icônes
├── components/    Composants réutilisables (Header, Footer, Card, Collapse, Slideshow…)
├── data/          Données des logements (logements.json)
├── pages/         Pages de l'application (Home, About, Housing, Error)
├── router/        Configuration des routes
└── styles/        Variables, mixins et styles globaux Sass
```

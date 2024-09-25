# Projet application web pour la réservation de e_tickets des Jeux Olympiques 2024 

## Description
L'application permet aux utilisateur de parcourir différents événement liés à des sports spécifique, de se connect ou s'inscrire pour réserver leur tickets et de recevoir les tickets avec un QR code.

## Technologies utilisées
- **Backend** : Django, Python, Django REST Framework 
- **Frontend** : React 
- **Base de données** : PostgreSQL
- **Déploiement** :
  - Backend déployé sur Render.
  - Base de données PostgreSQL hébergée sur Render.
  - Frontend déployé sur Netlify.


## Composant principaux
Le projet est composé de plusieur composants:

- **Header** : Affiche la navigation principale avec les liens vers les différentes pages (Accueil, Panier, Connexion, inscription...).
- **Footer** : Contient des informations générales et les liens vers les différentes pages.
- **CategorieCard** : Affiche chaque catégorie de sport avec nom et description.
- **Categories** : Liste toutes les catégories de sports.
- **Event** : Affiche les détails de cahque événement(nom, description, offres, date, lieu...).
- **EventsPage** : Liste toutes les événements d'un sports.
- **SignUp** : Formulaire pour l'inscription.
- **Login** : Page de connexion.
- **CartPage** : Affiche les articles ajoutés au panier. Les utilisateurs peuvent visualiser et retirer des articles avant d'acheter'.
- **ticketsPage** : Affiche les différentes tickets générer avec QR codes.


## Configuration du projet
### Pré-requis
- Node.js
- npm

### Installation
1. Clonez le projet :
   git clone https://github.com/jad-la/jeux_olympic_front.git

2. npm install

### Configurer les variables d'environnement
- Créez un fichier .env et ajoutez vos variables d'environnement pour l'API

### Lancer le serveur
- npm start

### Déploiement
-->Frontend (React)
Le frontend est déployé sur Netlify. Voici les étapes pour effectuer le déploiement :

- Connectez-vous à Netlify ou créez un compte.
- Sélectionnez "Add new site" et connectez votre dépôt GitHub contenant le projet frontend.


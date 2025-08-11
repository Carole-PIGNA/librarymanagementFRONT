# Library Management System

## Améliorations en cours

Ce projet est en constante évolution et plusieurs fonctionnalités sont encore en développement. Vous pouvez consulter les **issues ouvertes** pour voir les fonctionnalités en cours, à améliorer ou à finaliser.

### Issues en cours :
- **Page s'enregistrer**:https://github.com/Carole-PIGNA/librarymanagementFRONT/issues/12
- **Page se connecter**: https://github.com/Carole-PIGNA/librarymanagementFRONT/issues/13
-**securisation route post (sur la PageAdmin)**:https://github.com/Carole-PIGNA/librarymanagementFRONT/issues/14 : Seul un utilisateur avec le Rôle Admin aura accès à la page Admin pour ajouter un livre
- **securisation route post/Emprunt**: Seuls les utilisateurs connectés peuvent emprunter
- **securisation route get/ (Emprunt)**: Seul l'utilisateur connecté peut voir ses emprunts


---

## Description

Le **Library Management System** est une application de gestion de bibliothèque en ligne permettant aux utilisateurs de consulter, emprunter et lire des livres. Ce projet fait partie de mon portfolio et présente mes compétences en développement web. Le projet se compose de deux parties :
- le **frontend**, développé avec **Angular**,
- le **backend**, géré avec **Spring Boot** et accessible sur [librarymanagementBack](https://github.com/Carole-PIGNA/librarymanagementBack).

### Fonctionnalités principales

1. **Gestion des livres** :  
   Le backend permet l'ajout, la suppression et la récupération des livres dans la base de données.

2. **Gestion des livres empruntés** :  
   Les utilisateurs peuvent emprunter des livres et les retourner via l'API. La gestion des emprunts est encore en cours d'implémentation.

3. **CORS et sécurité** :  
   La configuration **CORS** permet aux requêtes provenant du frontend Angular (exécuté sur `localhost:4200`) d'interagir avec l'API Spring Boot sur `localhost:8081`. Cette configuration sécurise les échanges entre le frontend et le backend.

---

## Technologies utilisées

### Frontend :
- **Angular** : Framework pour construire l'interface utilisateur dynamique et interactive.
- **RxJS** : Bibliothèque pour gérer les flux de données asynchrones et les événements.
- **HTML, CSS** : Pour le style et la mise en page de l'application.

### Backend :
- **Spring Boot** : Framework Java pour construire l'API REST et gérer la logique backend.
- **Spring Data JPA** : Utilisé pour la persistance des données avec **Hibernate**.
- **MySQL** : Base de données relationnelle pour stocker les informations de l'application.

---

## Lien vers le Backend

Le backend du projet, qui gère la logique de gestion des livres, des emprunts et des utilisateurs (travail en cours), est disponible sur [GitHub - Backend](https://github.com/Carole-PIGNA/librarymanagementBack).

---

## Installation

### Frontend

Pour tester l'application frontend localement, suivez ces étapes :

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Carole-PIGNA/librarymanagementFRONT-main.git

2. Allez dans le dossier du projet :cd librarymanagementFRONT-main
3. Installez les dépendances :  npm install
4. Lancez l'application : ng serve

### Backend
1. Clonez le backend du projet : git clone https://github.com/Carole-PIGNA/librarymanagementBack.git
2. Allez dans le dossier du backend : cd librarymanagementBack
3. Installez les dépendances Maven et lancez le serveur Spring Boot : mvn spring-boot:run

Le backend sera accessible à `localhost:8081`.

**Note** : Assurez-vous que MySQL est installé et que la base de données librarymanagement_db est configurée. Vous devrez également configurer le mot de passe dans le fichier .env ou directement dans application.properties

Auteur:
Aimée Carole PIGNA - Développeuse principale

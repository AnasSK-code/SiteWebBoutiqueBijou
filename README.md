Sk Excellence - Site de Bijouterie
Un projet React complet pour un site de joaillerie en ligne, intégrant des animations, une gestion du panier et un
formulaire de contact fonctionnel via EmailJS.
## Aperçu du Projet
Ce projet est une application e-commerce pour la bijouterie "Sk Excellence". Il offre une interface moderne et réactive
avec :
- Une **Navbar** dynamique pour la navigation entre les pages.
- Un système de **gestion du panier** avec notifications pour l'ajout de produits.
- Des composants produits (**ProductCard**) affichant des détails, images et évaluations.
- Un **formulaire de contact** qui utilise EmailJS pour envoyer des messages directement depuis l'application.
- Un catalogue de produits diversifié (bagues, colliers, montres, boucles d'oreilles).
## Fonctionnalités
- **Interface Animée :** Utilisation de Framer Motion pour des transitions fluides.
- **Gestion du Panier :** Ajout, suppression et mise à jour des produits via le Context API.
- **Catalogue de Produits :** Affichage détaillé de produits avec images, descriptions et prix.
- **Formulaire de Contact :** Envoi de messages via EmailJS.
- **Responsive Design :** Adapté aux mobiles et aux ordinateurs.
## Installation
1. **Cloner le dépôt :**
```
git clone https://github.com/votre-utilisateur/sk-excellence.git
cd sk-excellence
```
2. **Installer les dépendances :**
```
npm install
```
ou
```
yarn install
```
3. **Démarrer l'application :**
```
npm start
```
ou
```
yarn start
```
## Configuration d'EmailJS
1. **Créer un compte** sur EmailJS.
2. **Configurer un Service et un Template** :
 - Créez un **service** correspondant à votre source d'envoi.
 - Créez un **template** pour le message que vous souhaitez envoyer.
3. **Ajouter vos paramètres EmailJS dans `Contact.tsx` :**
```
const serviceID = 'votre_service_id';
const templateID = 'votre_template_id';
const userID = 'votre_user_id';
```
## Contribution
Les contributions sont les bienvenues !
1. **Fork** ce dépôt.
2. Créez une branche pour votre fonctionnalité :
```
git checkout -b feature/ma-fonctionnalité
```
3. **Committez** vos modifications :
```
git commit -m "Ajout de ma fonctionnalité"
```
4. **Poussez** votre branche :
```
git push origin feature/ma-fonctionnalité
```
5. Ouvrez une Pull Request.

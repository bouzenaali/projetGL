# DZ MOUHAMI
⚖️ this is the backend of the dz-mouhami application

## Vue Globale
Un annuaire web d'avocats est un site web qui répertorie les avocats d'une région ou d'un pays. Il fournit généralement des informations de base sur les avocats, telles que leurs noms, coordonnées, domaines de spécialisation, etc. Certains annuaires peuvent également fournir des informations plus détaillées, telles que des avis de clients, des articles écrits par l'avocat ou des liens vers son site web personnel.
Les annuaires web d'avocats sont un outil utile pour les personnes qui recherchent un avocat. Ils permettent de trouver rapidement et facilement un avocat dans une région donnée, spécialisé dans un domaine particulier. Ils peuvent également être utilisés pour comparer les avocats et leurs tarifs. Les annuaires web d'avocats sont généralement gratuits pour les utilisateurs. Les avocats, quant à eux, paient généralement une redevance pour y être répertoriés.
Exemples: https://www.avvo.com/ ou https://consultation.avocat.fr/ 

Votre mission est de développer un annuaire Web DZ-Mouhami permettant de recenser les avocats algériens et de les rechercher.

## Spécifications fonctionnelles :
### Inscription et Profils d'Avocats :
- Le système doit permettre la création de comptes pour les avocats avec des informations telles que nom, spécialité, coordonnées, etc.
- Le système doit permettre l’affichage de profils détaillés présentant les compétences, expériences et domaines de pratique de chaque avocat.
- Le système doit permettre l’affichage de la carte géographique de l'adresse de l’avocat dans sa page profil .
### Recherche avancée :
- Le système doit permettre la Fonction de recherche avancée permettant aux utilisateurs de filtrer par spécialité, localisation, langue, etc.
- Le système doit permettre la recherche avec des filtres multiples pour trouver des avocats spécifiques.
### Gestion des Rendez-vous :
- Le système doit permettre la planification de rendez-vous en ligne avec les avocats.
- Le système doit permettre la possibilité pour les utilisateurs de choisir des créneaux horaires disponibles.
### Évaluation et Commentaires :
- Le système doit permettre la possibilité de notation et de commentaires permettant aux clients de donner leur avis sur les avocats.
- Le système doit permettre d’aider les utilisateurs à choisir un avocat en fonction des expériences précédentes.
### Administration
- Le système doit permettre à l’administrateur de gérer la liste des avocats inscrits 


## Spécifications non fonctionnelles :
- Initialiser l’annuaire avec données scrapés à partir de https://avocatalgerien.com/ 
- Temps de chargement rapide des profils et des résultats de recherche pour une expérience utilisateur fluide.
- Interface responsive pour une accessibilité optimale sur différents appareils (ordinateurs, tablettes, smartphones).
- Support de deux langues pour atteindre un public plus large, notamment en arabe, français.
- Système de sauvegarde régulière des données pour éviter toute perte en cas de problème technique.
- Le backend doit être développé avec Python. 
- Le frontend doit être développé avec React. 
- Utiliser un SGBD relationnel (Ne pas utiliser un SGBD NoSQL)
- Un utilisateur ou l’administrateur doit s’authentifier avec son compte Google (authentification SSO).
- L’interface doit être conviviale et facile à utiliser
- La documentation du code doit être générée avec un outil de génération de documentation
- Implémenter 3 tests unitaires, les étudiants sont libres de choisir les tests en question
- Implémenter un test fonctionnel automatisé avec Selenium (ou un autre outil de test) de la fonctionnalité
« Inscription d’un avocat »
- Le code doit être hébergé sur GitHub
- Le push sur GitHub doit se faire de manière régulière et ne pas attendre la date de livraison
- Travailler en quadrinôme du même groupe
- Les groupes qui veulent être constitués de 5 membres, doivent en plus réaliser le déploiement du projet avec Docker 



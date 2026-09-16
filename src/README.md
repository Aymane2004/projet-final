SAS Progress Console
Description

SAS Progress Console est une application JavaScript exécutée avec Node.js.
Elle permet de gérer des apprenants fictifs, leurs résultats journaliers et leur progression.

Les niveaux affichés sont uniquement des indicateurs pédagogiques et ne constituent pas une décision d'admission.

Fonctionnalités

Ajouter et rechercher des apprenants.

Ajouter ou modifier les résultats d'une journée.

Valider les données saisies.

Calculer la progression et les challenges terminés.

Filtrer par niveau.

Trier par progression ou par nom.

Afficher un tableau de bord dans la console.

Niveaux

Solide : ≥ 80 %

En progression : 50 % à 79 %

À renforcer : < 50 %

La progression est calculée avec :

(exercices terminés / exercices proposés) × 100


Les journées non renseignées ne sont pas prises en compte.

Structure
projet-final/
├── README.md
├── src/
│   ├── data.js
│   ├── progression.js
│   └── index.js
└── tests/
    └── scenarios.js

Lancer le projet
node src/index.js

Lancer les tests
node tests/scenarios.js

Tests

Les tests vérifient notamment :

l'ajout d'un apprenant ;

la mise à jour d'un résultat ;

le calcul de la progression ;

le refus d'un identifiant en doublon ;

le refus de données invalides.

Technologies

JavaScript

Node.js

Git

Aucune dépendance externe
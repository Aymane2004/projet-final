# SAS Progress Console

Application JavaScript en ligne de commande permettant de gérer des apprenants fictifs, leurs résultats journaliers et leur progression.

## 📋 Description

**SAS Progress Console** est un projet final de synthèse réalisé avec **JavaScript et Node.js**.

L'application permet à un formateur de :

* gérer une liste d'apprenants ;
* ajouter des apprenants ;
* enregistrer ou modifier les résultats d'une journée ;
* rechercher un apprenant par identifiant ou par nom ;
* calculer automatiquement sa progression ;
* filtrer les apprenants selon leur niveau ;
* trier les apprenants par progression ;
* trier les apprenants par ordre alphabétique ;
* afficher un tableau de bord pédagogique.

Les données utilisées dans le projet sont fictives.

> Les niveaux affichés (`Solide`, `En progression`, `À renforcer`) décrivent uniquement les résultats enregistrés dans l'application. Ils ne constituent pas une décision d'admission.

---

## 🎯 Objectifs du projet

Ce projet permet de mettre en pratique les notions JavaScript étudiées pendant les sept journées du SAS :

* variables et types ;
* conditions ;
* boucles ;
* fonctions ;
* chaînes de caractères ;
* tableaux ;
* objets ;
* recherche ;
* filtrage ;
* tri ;
* validation des données ;
* calculs ;
* manipulation de données.

L'objectif est de construire une application simple, claire et fonctionnelle exécutée directement dans la console.

---

## 🛠️ Technologies utilisées

* **JavaScript**
* **Node.js**
* **ES Modules**
* **prompt-sync**

### Installation de la dépendance

```bash
npm install prompt-sync
```

---

## 📁 Structure du projet

```text
projet-final/
│
├── README.md
│
├── src/
    ├── data.js
    ├── Functions.js
    └── index.js

```

### `src/data.js`

Contient les données fictives des apprenants et leurs résultats journaliers.

Exemple :

```js
{
    id: 1,
    nomComplet: "Sara Dev",
    ville: "Nador",
    resultats: [
        {
            jour: 1,
            exercicesTermines: 18,
            totalExercices: 20,
            challengeTermine: true
        }
    ]
}
```

### `src/Functions.js`

Contient les principales fonctions de traitement des données :

* `normaliserNom()`
* `validerResultat()`
* `ajouterApprenant()`
* `enregistrerResultat()`
* `rechercherApprenant()`
* `calculerProgression()`
* `filtrerParNiveau()`
* `trierParProgression()`
* `trierParOrdreAlphabetique()`
* `afficherTableauDeBord()`
* `afficherApprenants()`

### `src/index.js`

Contient le menu principal et permet à l'utilisateur d'interagir avec l'application dans la console.

---

# 🚀 Installation et lancement

## 1. Cloner le projet

```bash
git clone URL_DU_DEPOT
```

Puis entrer dans le dossier :

```bash
cd projet-final
```

## 2. Installer les dépendances

```bash
npm install
```

## 3. Lancer l'application

```bash
node src/index.js
```

Le menu principal s'affiche ensuite dans la console.

---

# 📌 Fonctionnalités

## 1. Afficher le tableau de bord

Affiche :

* le nombre total d'apprenants ;
* la progression de chaque apprenant ;
* la progression moyenne du groupe ;
* le nombre de profils `Solide` ;
* le nombre de profils `En progression` ;
* le nombre de profils `À renforcer` ;
* les journées non renseignées ;
* les challenges non terminés.

---

## 2. Afficher la liste des apprenants

Affiche pour chaque apprenant :

* son identifiant ;
* son nom complet ;
* sa ville.

---

## 3. Ajouter un apprenant

L'utilisateur saisit :

* le nom complet ;
* la ville.

Le nom est automatiquement nettoyé grâce à `normaliserNom()`.

Par exemple :

```text
"   Sara     Dev  "
```

devient :

```text
"Sara Dev"
```

---

## 4. Consulter un apprenant par identifiant

L'utilisateur saisit un identifiant.

L'application recherche ensuite l'apprenant correspondant.

---

## 5. Ajouter ou modifier le résultat d'une journée

L'utilisateur saisit :

* l'identifiant de l'apprenant ;
* le numéro de la journée ;
* le nombre total d'exercices proposés ;
* le nombre d'exercices terminés ;
* si le challenge est terminé (`oui/non`).

Si la journée n'existe pas encore, le résultat est ajouté.

Si la journée existe déjà, son résultat est mis à jour.

Cela permet d'éviter d'avoir deux résultats pour la même journée.

---

## 6. Rechercher un apprenant par nom

La recherche accepte :

* le nom complet ;
* une partie du nom ;
* des majuscules ou minuscules.

Exemple :

```text
sara
```

peut retrouver :

```text
Sara Dev
```

---

## 7. Filtrer par niveau

Les apprenants peuvent être filtrés selon trois niveaux :

```text
Solide
En progression
À renforcer
```

---

## 8. Trier par progression

Les apprenants sont triés selon leur pourcentage de progression.

La progression est calculée automatiquement à partir des résultats enregistrés.

---

## 9. Trier par ordre alphabétique

Les apprenants sont triés selon leur `nomComplet`.

Le tri utilise :

```js
localeCompare()
```

---

# 📊 Calcul de la progression

La progression est calculée avec la formule :

```text
Progression = (Total exercices terminés / Total exercices proposés) × 100
```

### Exemple

Un apprenant termine :

```text
18 + 14 = 32 exercices
```

sur :

```text
20 + 20 = 40 exercices proposés
```

La progression est donc :

```text
(32 / 40) × 100 = 80 %
```

## Indicateurs calculés

Pour chaque apprenant, l'application calcule :

| Indicateur           | Description                         |
| -------------------- | ----------------------------------- |
| Exercices terminés   | Somme des exercices terminés        |
| Exercices proposés   | Somme des exercices proposés        |
| Progression          | Pourcentage d'exercices terminés    |
| Challenges terminés  | Nombre de challenges terminés       |
| Journées renseignées | Nombre de journées enregistrées     |
| Niveau               | Niveau correspondant au pourcentage |

---

# 📈 Niveaux de progression

| Niveau             | Condition        |
| ------------------ | ---------------- |
| **Solide**         | ≥ 80 %           |
| **En progression** | ≥ 50 % et < 80 % |
| **À renforcer**    | < 50 %           |

Lorsque aucun exercice n'est proposé, la progression est initialisée à :

```text
0 %
```

afin d'éviter une division par zéro.

---

# ✅ Validation des données

Avant d'enregistrer un résultat, plusieurs contrôles sont effectués.

### Jour

Le jour doit être compris entre :

```text
1 et 7
```

### Exercices proposés

Le nombre doit être supérieur à `0`.

### Exercices terminés

Le nombre doit être supérieur ou égal à `0`.

Il ne peut pas dépasser le nombre d'exercices proposés.

Exemple refusé :

```text
Exercices proposés : 20
Exercices terminés : 25
```

### Challenge

La valeur doit être un booléen :

```js
true
```

ou :

```js
false
```

Dans le menu, l'utilisateur saisit :

```text
oui
```

ou :

```text
non
```

---

# 🧪 Tests

Le projet doit être vérifié avec plusieurs scénarios afin de contrôler le fonctionnement des principales fonctionnalités.

## Scénario 1 — Ajouter un apprenant

### Entrée

```text
Nom : Ahmed
Ville : Casablanca
```

### Résultat attendu

Un nouvel apprenant est ajouté à la liste.

---

## Scénario 2 — Enregistrer une nouvelle journée

### Exemple

```text
Identifiant : 1
Jour : 3
Exercices proposés : 20
Exercices terminés : 16
Challenge : oui
```

### Résultat attendu

Le résultat du jour 3 est ajouté aux résultats de l'apprenant.

---

## Scénario 3 — Modifier une journée existante

Si le jour existe déjà, le résultat doit être modifié au lieu d'ajouter un deuxième résultat pour la même journée.

### Résultat attendu

La journée reste unique et ses valeurs sont mises à jour.

---

## Scénario 4 — Données invalides

### Exemple

```text
Jour : 8
```

### Résultat attendu

L'application refuse l'entrée et affiche un message d'erreur.

Autre exemple :

```text
Exercices proposés : 20
Exercices terminés : 25
```

### Résultat attendu

Le résultat est refusé car le nombre d'exercices terminés dépasse le nombre proposé.

---

## Scénario 5 — Recherche

### Exemple

```text
Recherche : sara
```

### Résultat attendu

L'application retrouve :

```text
Sara Dev
```

La recherche ne dépend pas des majuscules/minuscules.

---

# 🖥️ Menu principal

L'application propose le menu suivant :

```text
=================================
       SAS PROGRESS CONSOLE
=================================
1. Afficher le tableau de bord
2. Afficher la liste des apprenants
3. Ajouter un apprenant
4. Consulter un apprenant par identifiant
5. Ajouter ou modifier le résultat d'une journée
6. Rechercher un apprenant par nom
7. Filtrer les apprenants par niveau
8. Trier les apprenants par progression décroissante
9. Trier les apprenants par ordre alphabétique
0. Quitter
```

Après chaque opération, le programme revient au menu principal.

---

# 🧠 Organisation du code

Le projet est séparé en plusieurs responsabilités :

```text
data.js
   ↓
Données des apprenants

Functions.js
   ↓
Traitement des données
Validation
Recherche
Calcul
Tri
Filtrage
Affichage

index.js
   ↓
Menu et interaction avec l'utilisateur
```

Cette organisation permet de séparer les données, la logique métier et l'interface console.

---

# 🔧 Gestion des données absentes

Une journée sans résultat enregistré est considérée comme une **journée non renseignée**.

Elle est différente d'un challenge non terminé.

Par exemple :

```text
Jour 3 : aucun résultat
```

signifie que la journée est non renseignée.

Alors que :

```text
Jour 2 : résultat enregistré
Challenge : false
```

signifie que la journée est renseignée mais que le challenge n'a pas été terminé.

La progression est calculée uniquement à partir des journées qui possèdent un résultat enregistré.

---

# 📚 Notions JavaScript utilisées

Le projet utilise notamment :

### Variables

```js
let
const
```

### Conditions

```js
if
else if
else
```

### Boucles

```js
for
for...of
do...while
```

### Tableaux

```js
push()
find()
filter()
sort()
reduce()
some()
```

### Chaînes de caractères

```js
trim()
toLowerCase()
replace()
replaceAll()
includes()
localeCompare()
```

### Objets

Les apprenants et leurs résultats sont représentés sous forme d'objets JavaScript.

### Modules

Le projet utilise les modules ES :

```js
import
export
```

---

# 📝 Git

Les différentes étapes du projet doivent être enregistrées avec des commits compréhensibles.

Exemple :

```bash
git add .
git commit -m "ajouter la gestion des apprenants"
```

```bash
git commit -m "ajouter le calcul de progression"
```

```bash
git commit -m "ajouter le tableau de bord"
```

```bash
git commit -m "ajouter la recherche et le tri"
```

Puis :

```bash
git push
```

---

# 👨‍💻 Auteur

**Aymane Taleb**

Projet réalisé dans le cadre du **SAS JavaScript / YouCode**.

---

# 📌 Conclusion

**SAS Progress Console** permet de centraliser les résultats journaliers d'apprenants fictifs et de produire automatiquement des indicateurs de progression.

Le projet met en pratique les principales notions JavaScript étudiées pendant le SAS tout

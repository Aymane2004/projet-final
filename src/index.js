import apprenants from './data.js';
import { ajouterApprenant, afficherApprenants, afficherTableauDeBord, rechercherApprenant, enregistrerResultat, filtrerParNiveau, trierParProgression, calculerProgression } from './Functions.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

do {
    console.log('=================================')
    console.log('       SAS PROGRESS CONSOLE    ')
    console.log('=================================')
    console.log('1. Afficher le tableau de bord')
    console.log('2. Afficher la liste des apprenants')
    console.log('3. Ajouter un apprenant')
    console.log('4. Consulter un apprenant par identifiant')
    console.log("5. Ajouter ou modifier le résultat d'une journée")
    console.log('6. Rechercher un apprenant par nom')
    console.log('7. Filtrer les apprenants par niveau')
    console.log('8. Trier les apprenants par progression décroissante')
    console.log('9. Trier les apprenants par ordre alphabétique')
    console.log('0. Quitter')

    let choix = Number(prompt('votre choix :'))

    switch (choix) {
        case 0:
            break;
        case 1:
            afficherTableauDeBord();
            break;
        case 2:
            afficherApprenants();
            break;
        case 3:
            console.log('=====Ajout apprenant=====')
            let nomC = prompt("saisi nom complet :")
            if (nomC.length < 3) {
                console.log('le nom doit etre plus grand!')
                break;
            }

            let ville = prompt("saisi la ville :")

            ajouterApprenant(nomC, ville);
            console.log('ajouter avec success!')
            break;
        case 4:
            break;
        case 5:
            break
        case 6:
            break

    }


} while (choix != 0)
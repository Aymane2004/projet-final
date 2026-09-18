import apprenants from './data.js';
import { ajouterApprenant, afficherApprenants, afficherTableauDeBord, rechercherApprenant, enregistrerResultat, filtrerParNiveau, trierParProgression, calculerProgression } from './Functions.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let choix;

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

    choix = Number(prompt('votre choix :'))

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
            let id = Number(prompt("Veuiller saisir l'identifiant :"));
            if (!isNaN(id)) {
                console.log(rechercherApprenant(id));
            }else{
                console.log('doit etre un nombre !!')
            }
            
            break;

        case 5:
            let idE = Number(prompt("Veuiller saisir l'identifiant :"));
            if (isNaN(idE)) {
                console.log("l'id doit etre un nombre");
                break;
            }
            let jour = Number(prompt("Veuiller saisir le jour: "))
            if(isNaN(jour) || jour>7 || jour<1){
                console.log("le jour doit etre un nombre et compris entre 1 et 7 !!")
                break;
            }
            let propose = Number(prompt("Veuiller saisir total des exercices: "))
            let termine = Number(prompt("Veuiller saisir le nombre des exercices termines: "))
            let challenge = prompt("challenge termines (oui/non): ")
            let ch;
                if(challenge.toLowerCase() == 'oui'){
                    ch = true;
                }else if(challenge.toLowerCase() == 'non'){
                    ch = false;
                }else{
                    console.log('doit etre oui ou non!!')
                    break;
                }
            console.log(enregistrerResultat(idE,jour,propose,termine,ch))
            break
        case 6:
            let nom = prompt("le nom de l'apprenant : ")
            if(!isNaN(nom)){
                console.log('doit etre un chaine de caractere !!')
                break;
            }
            console.log(rechercherApprenant(nom))

            break;
        case 7:
            

    }


} while (choix != 0)
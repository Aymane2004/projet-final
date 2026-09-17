import apprenants from './data.js'


export default function normaliserNom(nom){
    let x = nom.trim().replaceAll(',','').replace(/\s+/g, ' ');
    return x
}
console.log(normaliserNom('   ayman    taleb  '))

export default function validerResultat(jour, propose, termine, challenge){
    if (isNaN(jour) || jour > 7 || jour < 1) {
        return 'Veuillez saisir un jour entre 1 et 7';
    }

    if (isNaN(propose) || propose <= 0) {
        return "Veuillez saisir un nombre d'exercices proposés valide";
    }

    if (isNaN(termine) || termine < 0) {
        return "Veuillez saisir un nombre d'exercices terminés valide";
    }

    if (termine > propose) {
        return "Le nombre d'exercices terminés ne peut pas dépasser le nombre proposé";
    }

    if (typeof challenge !== 'boolean') {
        return 'Veuillez saisir true ou false pour le challenge';
    }

    return true;

}

export default function ajouterApprenant(nom, ville){
    let id = apprenants.length + 1;
    let nomC = normaliserNom(nom)
    apprenants.push({
        id:id,
        nomComplet:nomC,
        ville:ville,
        resultats:[]})
    return apprenants
}

export default function enregistrerResultat(id, jour, propose, termine, challenge){
    let a = apprenants.find(i=>i.id == id)
    if(a){
        if(validerResultat(jour,propose,termine,challenge)){
            a.resultats.push(jour,propose,termine,)
        }
    }
}

export default function rechercherApprenant(){
    
}

console.log(parseInt(5))

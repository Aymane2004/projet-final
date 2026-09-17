import apprenants from './data.js'


export function normaliserNom(nom){
    let x = nom.trim().replaceAll(',','').replace(/\s+/g, ' ');
    return x
}
console.log(normaliserNom('   ayman    taleb  '))

export function validerResultat(jour, propose, termine, challenge){
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
console.log(validerResultat(5,20,21,true))

export function ajouterApprenant(nom, ville){
    let id = apprenants.length + 1;
    let nomC = normaliserNom(nom)
    apprenants.push({
        id:id,
        nomComplet:nomC,
        ville:ville,
        resultats:[]})
    return apprenants
}
console.log(ajouterApprenant('ahmed','Casablanca'))

export function enregistrerResultat(id, jour, propose, termine, challenge){
    let a = apprenants.find(i=>i.id == id)
    if(a){
        if(validerResultat(jour,propose,termine,challenge)){
            a.resultats.push({jour:jour,totalExercices:propose,exercicesTermines:termine,challengeTermine:challenge})
            return a
        }
    }
}
console.log(enregistrerResultat(3,4,20,15,true))

export function rechercherApprenant(profil){
    let a = []
    if(!isNaN(profil)){
        a = apprenants.filter(i => i.id == profil)
        return a
    }else{
        let nom = profil.toLowerCase().trim();
        a = apprenants.filter(i => i.nomComplet.toLowerCase().trim().includes(nom))
        return a
    }
}
console.log(rechercherApprenant(2))

export function calculerProgression(id){
    let a = rechercherApprenant(id)[0];
    let exercicesT = a.resultats.reduce((a,b)=>a+b.exercicesTermines,0)
    let exercicesP = a.resultats.reduce((a,b)=>a+b.totalExercices,0)
    let progression = (exercicesT/exercicesP)*100
    let challengeT = 0;
    a.resultats.forEach(element => {
        if(element.challengeTermine == true){
            challengeT++
        }
    });
    let JourneesR = a.resultats.length

    return (`La progression est : ${progression}, et il a terminer ${challengeT} challenges, ${JourneesR} journees enregisterer.`)
}

console.log(calculerProgression(2))

export function filtrerParNiveau(){
    
}
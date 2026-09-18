import apprenants from './data.js'


export function normaliserNom(nom) {
    let x = nom.trim().replaceAll(',', '').replace(/\s+/g, ' ');
    return x
}

export function validerResultat(jour, propose, termine, challenge) {
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
// console.log(validerResultat(5, 20, 21, true))

export function ajouterApprenant(nom, ville) {
    let id = apprenants.length + 1;
    let nomC = normaliserNom(nom)
    apprenants.push({
        id: id,
        nomComplet: nomC,
        ville: ville,
        resultats: []
    })
    return apprenants
}
// console.log(ajouterApprenant('ahmed', 'Casablanca'))

export function enregistrerResultat(id, jour, propose, termine, challenge) {
    let a = apprenants.find(i => i.id == id)
    if (a) {
        let existeJ = a.resultats.find(i => i.jour == jour)
        if (!existeJ && validerResultat(jour, propose, termine, challenge)) {
            a.resultats.push({ jour: jour, totalExercices: propose, exercicesTermines: termine, challengeTermine: challenge })
            return a
        }else if(existeJ && validerResultat(jour, propose, termine, challenge)){
            existeJ.totalExercices=propose
            existeJ.exercicesTermines=termine
            existeJ.challengeTermine=challenge
            return a
        }
    }else{
        return 'apprenant pas trouver'
    }
}
// console.log(enregistrerResultat(3, 4, 20, 15, true))

export function rechercherApprenant(profil) {
    let a = []
    if (!isNaN(profil)) {
        let p = Number(profil)
        a = apprenants.filter(i => i.id == p)
        return a
    } else {
        let nom = profil.toLowerCase().trim();
        a = apprenants.filter(i => i.nomComplet.toLowerCase().trim().includes(nom))
        return a
    }
}
// console.log(rechercherApprenant(2))

export function calculerProgression(id) {
    let a = rechercherApprenant(id)[0];
    let exercicesT = a.resultats.reduce((a, b) => a + b.exercicesTermines, 0)
    let exercicesP = a.resultats.reduce((a, b) => a + b.totalExercices, 0)
    let progression = 0;
    if (exercicesP > 0)
        progression = (exercicesT / exercicesP) * 100
    let challengeT = 0;
    a.resultats.forEach(element => {
        if (element.challengeTermine == true) {
            challengeT++
        }
    });
    let journeesR = a.resultats.length
    let niveau = '';
    if (progression >= 80 && progression <= 100) {
        niveau = 'Solide';
    } else if (progression >= 50 && progression <= 79) {
        niveau = 'En progression'
    } else if (progression < 50 && progression >= 0) {
        niveau = 'A renforcer'
    } else {
        niveau = 'Non reconnu'
    }

    return {
        exercicesT: exercicesT,
        exercicesP: exercicesP,
        progression: progression,
        niveau: niveau,
        challengeT: challengeT,
        journeesR: journeesR
    }
}

// console.log(calculerProgression(2))

export function filtrerParNiveau(niveau) {
    let a = apprenants.filter(i => {
        let cal = calculerProgression(i.id)
        if (cal.niveau.toLowerCase() == niveau.toLowerCase()) {
            return i
        }
    })

    return a
}

// console.log(filtrerParNiveau('solide'))


export function trierParProgression() {
    let a = apprenants.sort((a, b) => {
        let x = calculerProgression(a.id)
        let y = calculerProgression(b.id)
        return x.progression - y.progression
    })
    return a
}
// console.log(trierParProgression())
// console.log(apprenants);

export function trierParOrdreAlphabetique(){
    let a= apprenants.sort((a,b) =>{
        return a.nomComplet.localeCompare(b.nomComplet)
    })
    return a
}

export function afficherTableauDeBord() {
    console.log(`Nombre Total d'apprenant : ${apprenants.length}`)
    let progressionSomme = 0;
    let solide = 0;
    let enProgression = 0;
    let aRenforcer = 0;
    for (let a of apprenants) {
        let cal = calculerProgression(a.id)
        if (cal.niveau.toLowerCase() == 'solide') {
            solide++
        } else if (cal.niveau.toLowerCase() == 'en progression') {
            enProgression++
        } else if (cal.niveau.toLowerCase() == 'a renforcer') {
            aRenforcer++
        }
        let journeeManquants = [];
        let challengeManquants = [];
        for (let i = 1; i <= 7; i++) {
            let existeJ = a.resultats.some(e => e.jour == i)
            if (!existeJ) {
                journeeManquants.push(`jour ${i}`)
            }
        }
        for (let res of a.resultats) {
            if (res.challengeTermine == false) {
                challengeManquants.push(`jour ${res.jour}`)
            }
        }

        progressionSomme += cal.progression
        console.log('===========Apprenant===========');
        console.log(`le nom complet : ${a.nomComplet}`);
        console.log(`le pourcentage : ${cal.progression}`);
        console.log(`les journees monquants : ${journeeManquants}`);
        console.log(`les challenges monquants : ${challengeManquants}`);
        console.log('===============================');

    }
    let progressionM = progressionSomme / apprenants.length

    console.log(`la progression moyen est : ${progressionM.toFixed(2)}`)
    console.log(`le nombre des profils Solide : ${solide}`)
    console.log(`le nombre des profils En progression : ${enProgression}`)
    console.log(`le nombre des profils A renforcer : ${aRenforcer}`)

}

// console.log('================================')
// afficherTableauDeBord()


export function afficherApprenants() {
    for (let a of apprenants) {
        console.log(`l'identifiant : ${a.id}`)
        console.log(`le nom complet : ${a.nomComplet}`)
        console.log(`la ville : ${a.ville}`)
        console.log('=========================')
    }
}
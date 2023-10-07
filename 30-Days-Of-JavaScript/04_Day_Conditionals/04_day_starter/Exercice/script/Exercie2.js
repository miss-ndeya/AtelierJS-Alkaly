// Écrivez un code qui peut donner des notes aux étudiants en fonction de leurs scores :
let score = parseFloat(prompt("Entrez votre score :"));

if (score >= 90) {
    console.log("Votre note est : A");
} else if (score >= 80) {
    console.log("Votre note est : B");
} else if (score >= 70) {
    console.log("Votre note est : C");
} else if (score >= 60) {
    console.log("Votre note est : D");
} else {
    console.log("Votre note est : F");
}

// Vérifiez si la saison est l'automne, l'hiver, le printemps ou l'été. Si la saisie de l'utilisateur est :

let mois = prompt("Entrez un mois");

let saison
if (mois === "octobre" || mois === "Septembre" || mois ===  "novembre")  {
    console.log(`la saison est l'automne.`);
}else if (mois === "Décembre" || mois === "janvier" || mois === "février") {
    console.log(`la saison est l'hiver.`);
} else if (mois ===  "Mars" || mois === "avril" || mois === "mai") {
    console.log(`la saison est printemps.`);
} else if (mois === "Juin" || mois === "juillet" || mois ===  août ) {
    console.log(`la saison est l'été.`);
} 

// Vérifiez si un jour est un jour de week-end ou un jour ouvrable. Votre script prendra une journée en entrée.
let jour = prompt("Entrez un jour");

if (jour === "samdi" || jour === "dimanche") {
    console.log(`${jour} est un weekend`);
} else {
    console.log(`${jour} est un jour ouvrable`);
}

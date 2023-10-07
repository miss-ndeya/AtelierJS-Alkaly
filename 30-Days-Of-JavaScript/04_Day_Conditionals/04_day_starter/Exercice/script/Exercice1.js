// Obtenez les commentaires de l'utilisateur à l'aide de l'invite (« Entrez votre âge : »).
// Si l'utilisateur a 18 ans ou plus, donnez un feedback : "Vous êtes assez vieux pour
// conduire", mais s'il n'a pas 18 ans, donnez un autre feedback indiquant d'attendre
// le nombre d'années dont il a besoin pour atteindre 18 ans.

let age = parseFloat(prompt("Entrez votre âge :"));
console.log(age);
let ageRestant = 18 - age;

age =
  age >= 18
    ? "Vous êtes assez vieux pour conduire"
    : `Il vous reste ${ageRestant} ans pour conduire.`;

console.log(age);

// Comparez les valeurs de myAge et yourAge en utilisant if… else. Sur la base de la comparaison, 
// enregistrez le résultat sur la console en indiquant qui est le plus âgé (moi ou vous). 
// Utilisez prompt ("Entrez votre âge :") pour obtenir l'âge en entrée.

let yourAge = parseFloat(prompt("Entrez votre âge :"));
let myAge = 24;
let ageDePlus = yourAge - myAge
let ageDeMoins = myAge - yourAge

if(yourAge > myAge) {
    console.log(`Vous avez ${ageDePlus} ans de plus que moi.`);
} else {
    console.log(`J'ai ${ageDeMoins} ans de plus que vous`);
}

// Si a est supérieur à b, renvoyez « a est supérieur à b », sinon 
// « a est inférieur à b ». Essayez de le mettre en œuvre de manière

let a = 10;
let b = 222;

// Avec else if
if(a > b) {
    console.log(`${a} est superieur à ${b}`);
} else {
    console.log(`${a} est nferieur à ${b}`);
}

// Avec les condition tertiares
compare = a > b ? `${a} est superieur à ${b}` : `${a} est nferieur à ${b}`
console.log(compare);


// Les nombres pairs sont divisibles par 2 et le reste est nul. 
// Comment vérifier si un nombre est pair ou non en utilisant JavaScript ?

let number = parseFloat(prompt("Entrez un nombre :"));

if (number % 2 == 0) {
    console.log(`${number} est un nombre pair`);
} else {
    console.log(`${number} est un nombre impair`);
}

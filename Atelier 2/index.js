// Exercice 1:
// "numAverage" est une fonction JavaScript qui permet de calculer la moyenne de
// plusieurs nombres listés dans un tableau à passer en argument de la fonction.

let tab = [1, 1, 2, 3];
let somme = 0;
let moyenne;

function tableau(tab) {
  for (var i = 0; i < tab.length; i++) {
    somme += tab[i++];
  }
  moyenne = somme / tab.length;
  console.log("la moyenne du tableau est ", moyenne);
}
tableau(tab);


// Correction exercice avec  coach
function numAverage(numArray) {
  let moyenne = 0;
  let somme = 0;
  for (let valeur of numArray) {
    somme = somme + valeur;
  }
  moyenne = somme / numArray.length;
  return moyenne;
}
const notes = [0, 1, 5];
const result = numAverage(notes);
console.log("La moyenne de la classe est " + result);


//  Autre methode
function ageAvarage(monTableau) {
  let moyenneAge = 0;
  let sommmeAge = 0;

  for (let index = 0; index < monTableau.length; index++) {
    sommmeAge = sommmeAge + monTableau[index];
  }
  moyenneAge = sommmeAge / monTableau.length;
  return moyenneAge;
}
let lesages = [1, 1, 2, 3];

const moyenneAgeHorsFonction = ageAvarage(lesages);
console.log(Math.floor(moyenneAgeHorsFonction));

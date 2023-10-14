console.log("============Level 1==============");

// créer un set vide
const set = new Set();
console.log(set);

// Créez un ensemble contenant
// 0 à 10 en utilisant la boucle
for (let i = 0; i <= 10; i++) {
  set.add(i);
}
console.log(set);

// Supprimer un élément d'un ensemble
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);
console.log(setOfNumbers.size);
setOfNumbers.delete(3);
console.log(setOfNumbers.size);

// Effacer un ensemble
setOfNumbers.clear();
console.log(setOfNumbers.size);

// Créer un ensemble de 5 éléments de chaîne à partir d'un tableau
const companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
setOfCompanies = new Set(companies);
console.log(setOfCompanies);

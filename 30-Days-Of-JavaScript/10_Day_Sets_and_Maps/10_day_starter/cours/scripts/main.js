// Set  est une collection d'éléments
// ne peut contenir que des éléments uniques,

// Créer un Set vide
const companies = new Set();
console.log(companies);

// Création d'un Set à partir d'un tableau
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

// Set est un objet itérable et nous
// pouvons parcourir chaque élément.
for (const language of setOfLanguages) {
  console.log(language);
}

// Ajouter un élément à un Set
console.log(companies.size); // 0

companies.add("Google");
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size);
console.log(companies);

// Nous pouvons également utiliser une boucle
// pour ajouter un élément à un Set.
setOfCompanies = new Set();
for (const company of companies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies);

// Supprimer un élément d'un set

// Nous pouvons supprimer un élément d’un
// set en utilisant une méthode delete.
console.log(companies.delete("Google"));
console.log(companies.size); // 4 elements left in the set

// Vérifier un élément dans set

// La méthode has peut aider à savoir
// si un certain élément existe dans un set
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true

// clear : Il supprime tous les éléments d'un set.
companies.clear();
console.log(companies);

// Voir l'exemple ci-dessous pour
// savoir comment utiliser set
const langSet = new Set(languages);
console.log(langSet);
console.log(langSet.size);

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang);
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

//   Autre cas d'utilisation de set.
// Par exemple pour compter un élément
// unique dans un tableau.
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);
console.log(setOfNumbers);

// Union d'ensembles
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C);

// Intersection d'ensembles
c = a.filter((num) => B.has(num));
C = new Set(c);

console.log(C);

// Différence d'ensembles
c = a.filter((num) => !B.has(num));
C = new Set(c);
console.log(C);

// Créer une map vide
const map = new Map();
console.log(map);

// Création d'une map à partir d'un tableau
countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const maps = new Map(countries);
console.log(maps);
console.log(maps.size);

// Ajout de valeurs à la map
const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(countriesMap);
console.log(countriesMap.size);

// Obtenir une valeur de Map
console.log(countriesMap.get("Finland"));

// Vérification de la clé dans map
console.log(countriesMap.has("Finland"));

// Obtenir toutes les valeurs de la carte à l'aide d'une boucle
for (const country of countriesMap) {
  console.log(country);
}

for (const [country, city] of countriesMap) {
  console.log(country, city);
}

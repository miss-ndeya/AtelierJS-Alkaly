// forEach
// forEach uniquement avec des tableaux.
arr = [1, "e", 3];
arr.forEach(function (element, index, arr) {
  console.log("index", index, "l'element", element, "tableau", arr);
});
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr));

let sum = 0;
const numberse = [1, 2, 3, 4, 5];
numberse.forEach((num) => console.log(num));
console.log("la somme est", sum);

numberse.forEach((num) => (sum += num));
console.log("la somme devient", sum);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));

// map  Itérer les éléments d’un tableau et modifier les éléments du tableau.
const modifiedArray = arr.map(function (element, index, arr) {
  return element;
});

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbersSquare = numberse.map((num) => num * num);
console.log(numbersSquare);

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

/*
  // Arrow function
  const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
  })
  //Explicit return arrow function
  const countriesToUpperCase = countries.map(country => country.toUpperCase());
  */

let arrCountriesFirstThreeLetters = [];
const countriesFirstThreeLetters = countries.map((country) =>
  arrCountriesFirstThreeLetters.push(country.toUpperCase().slice(0, 3))
);
console.log(arrCountriesFirstThreeLetters);

// Filtrer : filtrez les éléments qui remplissent complètement
// les conditions de filtrage et renvoient un nouveau tableau.
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
console.log(countriesEndsByia);

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

// reduce revoie une valeur unique
const initialValue = 9;
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
  return;
}, initialValue);

const somme = numberse.reduce((acc, cur) => acc + cur, 0);
console.log(somme);

// every each : Vérifiez si tous les éléments sont
//  similaires sur un aspect. Il renvoie un booléen
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
console.log(areAllStr)

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true

// find : Renvoie le premier élément qui satisfait la condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age)

const result = names.find((name) => name.length > 7)
console.log(result)

const score = scores.find((user) => user.score > 80)
console.log(score)

// findIndex : Renvoie la position du premier 
// élément qui satisfait la condition
const resulte = names.findIndex((name) => name.length > 7)
console.log(resulte) // 0

const agee = ages.findIndex((age) => age < 20)
console.log(agee) // 5

// some : Vérifiez si certains des éléments sont 
// similaires sur un aspect. Il renvoie un booléen
const areSomeTrue = bools.some((b) =>  b === true)
console.log(areSomeTrue) //true

const areAllStrs = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStrs) // false

// trier
// La méthode de tri modifie le tableau d'origine. 
// Il est recommandé de copier les données originales 
// avant de commencer à utiliser la méthode de tri .

// Tri des valeurs de chaîne
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) 

// Tri des valeurs numériques
const numberses = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numberses.sort()) //[100, 3.14, 37, 9.81]
numberses.sort(function (a, b) {
  return a - b
})

console.log("Trier en croissant",numberses) // [3.14, 9.81, 37, 100]

numberses.sort(function (a, b) {
  return b - a
})
console.log("Trier en croissant",numberses) //[100, 37, 9.81, 3.14]

// Chaque fois que nous trions des objets dans un tableau, 
// nous utilisons la clé de l'objet pour comparer. 
// Voyons l'exemple ci-dessous.
const objArr = []
objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
  })
  
  // or
  
  objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
  })
  
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) // sorted ascending
  // [{…}, {…}, {…}, {…}]

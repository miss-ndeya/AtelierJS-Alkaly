console.log("===============Level 1==================");

const countriees = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Utilisez forEach pour console.log chaque pays dans le tableau des pays.
countriees.forEach((element) => console.log(element));

// Utilisez forEach pour console.log chaque nom dans le tableau des noms.
names.forEach((element) => console.log(element));

// Utilisez forEach pour console.log chaque numéro du tableau de nombres.
numbers.forEach((element) => console.log(element));

// Utilisez map pour créer un nouveau tableau en changeant
// chaque pays en majuscules dans le tableau des pays.
const nouveauTableau = countriees.map((element) => element.toUpperCase());
console.log(nouveauTableau);

// Utilisez la map pour créer un tableau de
// longueurs de pays à partir du tableau de pays.
const tableauDeLongueur = countriees.map((element) => element.length);
console.log(tableauDeLongueur);

// Utilisez map pour créer un nouveau tableau en changeant
// chaque nombre en carré dans le tableau de nombres
const carrerTableauNumbers = numbers.map((element) => element * element);
console.log(carrerTableauNumbers);

// Utilisez map pour mettre chaque nom 
// en majuscule dans le tableau des noms
const nouveaunames = countriees.map((element) => element.toUpperCase());
console.log(nouveaunames);


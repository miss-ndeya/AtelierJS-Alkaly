// Comment créer un tableau vide
// Utilisation du constructeur Array
// syntax
const arrs = Array();
// or
// let arr = new Array()
console.log(arrs); // []

// Utiliser des crochets ([])
// syntax
// This the most recommended way to create an empty list
const arr = [];
console.log(arr);

// Comment créer un tableau avec des valeurs
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

// Le tableau peut contenir des éléments de différents types de données
const arry = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arrs);

// Création d'un tableau à l'aide de split
let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// Accéder aux éléments du tableau à l'aide de l'index

let firstFruit = fruits[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[3];
console.log(lastFruit); // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon

console.log(numbers.length); // => to know the size of the array, which is 6
console.log(numbers); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]); //  -> 0
console.log(numbers[5]); //  -> 100

console.log(numbers[lastIndex]); // -> 100

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ] // List of web technologies

console.log(webTechs); // all the array items
console.log(webTechs.length); // => to know the size of the array, which is 7
console.log(webTechs[0]); //  -> HTML
console.log(webTechs[6]); //  -> MongoDB

//   let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]); // -> MongoDB

console.log(countries); // -> all countries in array
console.log(countries[0]); //  -> Albania
console.log(countries[10]); //  -> Kenya

//   let lastIndex = countries.length - 1;
console.log(countries[lastIndex]); //  -> Kenya

const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Avocado",
  "Meat",
  "Eggs",
  "Sugar",
]; // List of food products

console.log(shoppingCart); // -> all shoppingCart in array
console.log(shoppingCart[0]); //  -> Milk
console.log(shoppingCart[7]); //  -> Sugar

//   let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]); //  -> Sugar

//   Modification d'un élément de tableau
const numberes = [1, 2, 3, 4, 5];
numberes[0] = 10; // changing 1 at index 0 to 10
numberes[1] = 20; // changing  2 at index 1 to 20

console.log(numberes); // [10, 20, 3, 4, 5]

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

countries[0] = "Afghanistan"; // Replacing Albania by Afghanistan
let lastIndexe = countries.length - 1;
countries[lastIndexe] = "Korea"; // Replacing Kenya by Korea

console.log(countries);

// Méthodes pour manipuler le tableau
const array = Array(); // creates an an empty array
console.log(array);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

// Création de valeurs statiques avec remplissage
const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
console.log(four4values); // [4, 4, 4, 4]

// Concaténation d'un tableau à l'aide de concat
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

const fruitsAndVegetables = fruits.concat(vegetables); // concatenate the two arrays

console.log(fruitsAndVegetables);

// Obtenir la longueur du tableau
console.log(numberes.length); // -> 5 is the size of the array

// Obtenir l'index d'un élément dans un tableau arr
console.log(numberes.indexOf(5)); // -> 4
console.log(numberes.indexOf(0)); // -> -1
console.log(numberes.indexOf(1)); // -> 0
console.log(numberes.indexOf(6)); // -> -1

// Vérifiez un élément s'il existe dans un tableau.
// Vérifier les éléments dans une liste

// // let us check if a banana exist in the array
let index = fruits.indexOf("banana"); // 0

if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
// This fruit does exist in the array

// we can use also ternary here
index === -1
  ? console.log("This fruit does not exist in the array")
  : console.log("This fruit does exist in the array");

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf("avocado"); // -1, if the element not found index is -1
if (indexOfAvocado === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
// This fruit does not exist in the array

// Obtenir le dernier index d'un élément dans un tableau
console.log(numberes.lastIndexOf(2)); // 7
console.log(numberes.lastIndexOf(0)); // -1
console.log(numberes.lastIndexOf(1)); //  6
console.log(numberes.lastIndexOf(4)); //  3
console.log(numberes.lastIndexOf(6)); // -1

// include : Pour vérifier si un élément existe dans un tableau. S'il existe,
// il renvoie le vrai, sinon il renvoie le faux.
console.log(numberes.includes(5)); // true
console.log(numberes.includes(0)); // false
console.log(numberes.includes(1)); // true
console.log(numberes.includes(6)); // false
console.log(webTechs.includes("Node")); // true
console.log(webTechs.includes("C")); // false

// Vérification du tableau
console.log(Array.isArray(numberes)); // true

const number = 100;
console.log(Array.isArray(number)); // false

// Conversion d'un tableau en chaîne
console.log(numberes.toString()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

// Joindre des éléments de tableau

console.log(numberes.join()); // 1,2,3,4,5

console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join("")); //AsabenehMathiasEliasBrook
console.log(names.join(" ")); //Asabeneh Mathias Elias Brook
console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook

console.log(webTechs.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(" # ")); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// Éléments du tableau en tranches
console.log(numberes.slice()); // -> it copies all  item
console.log(numberes.slice(0)); // -> it copies all  item
console.log(numberes.slice(0, numbers.length)); // it copies all  item
console.log(numberes.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

// Méthode d'épissage dans un tableau
numberes.splice();
console.log(numberes); // -> remove all items

numberes.splice(0, 1);
console.log(numberes);

const numberees = [1, 2, 3, 4, 5, 6];
numberees.splice(3, 3, 7, 8, 9);
console.log(numberees.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Ajout d'un élément à un tableau à l'aide de push
// syntax
const arrays  = ['item1', 'item2','item3']
arrays.push('new item')
console.log(arrays)
// ['item1', 'item2','item3','new item']

numberes.push(6)
console.log(numberes) // -> [1,2,3,4,5,6]

numberes.pop() // -> remove one item from the end
console.log(numberes) // -> [1,2,3,4,5]

fruits.push('apple')
console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits)   

// Suppression de l'élément de fin à l'aide de pop
numberes.pop() // -> remove one item from the end
console.log(numberes) // -> [1,2,3,4]
// Supprimer un élément depuis le début
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]
// Ajouter un élément depuis le début
numberes.unshift(0) // -> add one item from the beginning
console.log(numberes) // -> [0,1,2,3,4,5]

// Inverser l'ordre des tableaux
numberes.reverse() // -> reverse array order
console.log(numberes) // [5, 4, 3, 2, 1]

numberes.reverse()
console.log(numberes) // [1, 2, 3, 4, 5]

// Trier les éléments dans un tableau
webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "N

// Tableau de tableaux
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

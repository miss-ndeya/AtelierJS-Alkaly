// Méthodes des objets de console
console.log();

// Affichage de la sortie sur la console du navigateur
console.log("30 Days of JavaScript");

// Substitution
console.log("%d %s of JavaScript", 30, "Days");

// CSS
// Nous pouvons styliser le message
// de journalisation en utilisant CSS.
console.log("%c30 Days Of JavaScript", "color:green");
console.log(
  "%c30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
);

// console.warn()
// Nous utilisons console.warn()
// pour avertir le navigateur.
console.warn("This is a warning");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
);
console.warn("Warning is different from error");

// La méthode console.error() affiche un message d'erreur.
console.error("This is an error message");
console.error("We all make mistakes");

// console.table()
// La méthode console.table() affiche les données
// sous forme de tableau sur la console
const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);

// Vérifions également le résultat d'un objet.
// Cela crée un tableau avec deux colonnes
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
console.table(user);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

// console.time()
console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

//console.info() :  Il affiche un message d'information
// sur la console du navigateur.
console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");

// Les méthodes console.assert() écrit un message d'erreur
// sur la console si l'assertion est fausse.
// Si l'affirmation est vraie, rien ne se passe
console.assert(4 > 3, "4 is greater than 3"); // no result
console.assert(3 > 4, "3 is not greater than 4"); // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}

// Le console.group() peut aider à regrouper
// différents groupes de journaux
console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();

// console.count
const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()

// Le console.clear() nettoie la console du navigateur.
console.clear()
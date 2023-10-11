const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// À l’aide du tableau de pays ci-dessus, créez le nouveau tableau suivant.
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i].toUpperCase());
}

//   En utilisant le tableau de pays ci-dessus, créez un tableau pour la longueur des pays.

let tableau = [];

for (let i = 0; i < countries.length; i++) {
  let tab = countries[i].length;
  tableau.push(tab);
}
console.log("tableau", tableau);

// Utilisez le tableau country pour créer le tableau de tableaux suivant :
tableau = [];

for (let i = 0; i < countries.length; i++) {
  let premierElement = countries[i][0];
  let deuxiemeElement = countries[i][1];
  let triosimeElement = countries[i][2];
  let troisPremierElements = premierElement + deuxiemeElement + triosimeElement;

  let tab = [
    countries[i],
    troisPremierElements.toUpperCase(),
    countries[i].length,
  ];
  tableau.push(tab);
}
console.log("tableau", tableau);


let fruits = ['banana', 'orange', 'mango', 'lemon']
console.log(fruits.reverse())
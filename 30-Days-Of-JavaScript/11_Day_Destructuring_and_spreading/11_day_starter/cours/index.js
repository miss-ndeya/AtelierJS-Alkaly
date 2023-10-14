// Déstructuration et propagation

const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

let names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

// Si nous aimons ignorer les valeurs du tableau,
// nous utilisons une virgule supplémentaire.
// La virgule permet d'omettre la valeur à cet index spécifique
let [num1, , num3] = numbers; //2 is omitted
console.log(num1, num3);

let [, secondePerson, , fourthePerson] = names; // first and third person is omitted
console.log(secondePerson, fourthePerson);

// Nous pouvons utiliser la valeur par défaut au cas où
// la valeur du tableau pour cet index n'est pas définie :
names = [undefined, "Brook", "David"][
  ((firstPerson = "Asabeneh"),
  secondPerson,
  thirdPerson,
  (fourthPerson = "John"))
] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// Nous ne pouvons pas attribuer de variable à tous les éléments du tableau.
// Nous pouvons déstructurer quelques-uns des premiers et obtenir le reste
// sous forme de tableau en utilisant l'opérateur de propagation (...).
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [numOnne, numTwwo, numThrree, ...rest] = nums;
console.log(numOnne, numTwwo, numThrree);
console.log(rest);

// Déstructuration lors de l'itération
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}

// Objet déstructurant

// Lorsque nous déstructurons, le nom de la variable que nous utilisons
// pour déstructurer doit être exactement le même que la clé
// ou la propriété de l'objet. Voir l'exemple ci-dessous.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

// Renommer lors de la structuration
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

//   Parfois, la clé peut ne pas être dans l'objet,
// dans ce cas nous pouvons donner une valeur par défaut
// lors de la déclaration. Voir l'exemple.
let { perimeters = 60 } = rectangle;
console.log(width, height, area, perimeters); //20 10 200 60

// Paramètre d'objet sans déstructuration
// Without destructuring
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};
console.log(calculatePerimeter(rect)); // 60

//Another Example
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
console.log(getPersonInfo(person));

//   Paramètre d'objet avec déstructuration

const calculatePerimeterAvecDestructuration = ({ width, height }) => {
  return 2 * (width + height);
};
console.log(calculatePerimeterAvecDestructuration(rect)); // 60

// Let us create a function which give information about the person object with destructuring
const getPersonInfoAvecDestructuration = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
console.log(getPersonInfoAvecDestructuration(person));

// Objet déstructurant lors de l'itération
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

// Opérateur de propagation ou de repos

// Opérateur Spread pour obtenir
// le reste des éléments du tableau
let [gem, fra, , ...nordicCountries] = countries;

console.log(gem);
console.log(fra);
console.log(nordicCountries);

// Opérateur de propagation pour copier le tableau
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

const frontEnds = ["HTML", "CSS", "JS", "React"];
const backEnds = ["Node", "Express", "MongoDB"];
const fullStaack = [...frontEnd, ...backEnd];

console.log(fullStaack);

// Opérateur de propagation pour copier l'objet
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

let copiedUser = { ...user };
console.log(copiedUser);

// Modifier ou changer l'objet pendant la copie
copiedUser = { ...user, title: "instructor" };
console.log(copiedUser);

// Opérateur de propagation avec fonction flèche
let sumAllNums = (...args) => {
  console.log(args);
};
sumAllNums(1, 2, 3, 4, 5);

sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};
console.log(sumAllNums(1, 2, 3, 4, 5));



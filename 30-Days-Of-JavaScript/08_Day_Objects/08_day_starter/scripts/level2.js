const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Définissez votre nom dans l'objet utilisateurs sans modifier l'objet utilisateurs d'origine
users.Awa = {
  email: "Awa@Awa.com",
  skills: ["HTML", "CSS", "JavaScript"],
  age: 20,
  isLoggedIn: false,
  points: 30,
};
console.log(users);

// Récupère toutes les clés ou propriétés de l'objet utilisateur
let copyUsers = Object.assign({}, users) 
let cles = Object.keys(copyUsers)
console.log(cles);

// Récupère toutes les valeurs de l'objet utilisateur
let valeurs = Object.values(copyUsers)
console.log(valeurs);

// Utilisez l'objet country pour imprimer le nom d'un pays, sa capitale, ses populations et ses langues.
console.log("Pays:",countries[7].name)
console.log("capital:",countries[7]['capital'])
console.log("population:",countries[7].population)
console.log("languages:",countries[7]['languages'])


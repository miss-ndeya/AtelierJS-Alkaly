// Créer un objet vide
const person = {};

// Créer une objection avec des valeurs
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const personne = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(personne);

// Obtenir les valeurs d'un objet
const personn = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};

// accessing values using .
console.log(personn.firstName);
console.log(personn.lastName);
console.log(personn.age);
console.log(personn.location); // undefined

// value can be accessed using square bracket and key name
console.log(personn["firstName"]);
console.log(personn["lastName"]);
console.log(personn["age"]);
console.log(personn["age"]);
console.log(personn["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log(personn["phone number"]);

//   Création de méthodes objet

const personnes = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(personnes.getFullName());
// Asabeneh Yetayeh

//   Définition d'une nouvelle clé pour un objet
const personnees = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
personnees.nationality = "Ethiopian";
personnees.country = "Finland";
personnees.title = "teacher";
personnees.skills.push("Meteor");
personnees.skills.push("SasS");
personnees.isMarried = true;

personnees.getPersonneesInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(personnees);
console.log(personnees.getPersonneesInfo());

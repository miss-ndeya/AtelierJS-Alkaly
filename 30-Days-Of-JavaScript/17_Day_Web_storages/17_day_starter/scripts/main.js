console.log("===========Level 1===============");
// 1. Stockez votre prénom, nom, âge, pays,
// ville dans votre navigateur localStorage.
const me = {
  prenom: "ndeye awa",
  nom: "NDIAYE",
  age: "34",
  pays: "senegal",
  ville: "Dakar",
};
console.log(me);
localStorage.setItem("me", JSON.stringify(me));

console.log("=============Leve 2===========");

const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  country: "france",
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
localStorage.setItem("student", JSON.stringify(student));

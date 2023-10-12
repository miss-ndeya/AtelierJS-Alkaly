// creer un objet vite appelé chien
let chien = {};

// Imprimer l'objet le chien sur la console
console.log(chien);

// Ajoutez des propriétés de nom, de pattes, de couleur,
// d'âge et d'écorce pour l'objet chien. La propriété
// bark est une méthode qui renvoie woof woof

chien = {
  nom: "elisa",
  pattes: 4,
  couleur: "noir",
  age: "2 mois",
  ecorce: 6,
  bark: ["woof", "woof"],
};

// Obtenez le nom, les pattes, la couleur, l'âge et la valeur de l'écorce de l'objet chien
console.log("Nom:", chien.nom);
console.log("Pattes:", chien["pattes"]);
console.log("Couleur:", chien.couleur);
console.log("Age:", chien["age"]);
console.log("Ecorce:", chien.ecorce);

// Définir de nouvelles propriétés pour l'objet chien : race, getDogInfo
chien.race = "berger";
chien.getDogInfo = function () {
  let statement = `${this.nom} est un chien de ${this.pattes} pattes, de couleur ${this.couleur} `;
  return statement;
};
console.log(chien);
console.log(chien.getDogInfo());
;

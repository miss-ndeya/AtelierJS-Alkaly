console.log("===========level 1===========");
// Créez une classe Animal. La classe aura des propriétés de nom,
// d'âge, de couleur, de jambes et créera différentes méthodes

class Animal {
  constructor(nom, age, couleur, jambes) {
    this.nom = nom;
    this.age = age;
    this.couleur = couleur;
    this.jambes = jambes;
  }
  getAnimalInfos() {
    const animalInfos =
      this.nom +
      " est un animal age de " +
      this.age +
      "ans de couleur " +
      this.couleur +
      " avec " +
      this.jambes +
      " jambes";
    return animalInfos;
  }
}

const animal1 = new Animal("joe", 250, "blanche", "4");
const animal2 = new Animal("diya", 28, "noir", "4");
const animal3 = new Animal("noe", 50, "maron", "6");

console.log(animal1);
console.log(animal2);
console.log(animal3);
console.log(animal1.getAnimalInfos());

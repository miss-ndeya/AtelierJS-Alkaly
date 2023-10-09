// Dans le panier suivant, ajoutez, supprimez, modifiez des articles
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// ajoutez « Viande » au début de votre panier si cela n'a pas déjà été ajouté
shoppingCart.unshift("Meat");

// ajoutez du sucre à la fin de votre panier s'il n'a pas déjà été ajouté
shoppingCart.push("Sugar");

// supprimez « Miel » si vous êtes allergique au miel
shoppingCart.splice(4, 1);

// modifier Thé en « Thé vert »
shoppingCart.splice(3, 1, "Thé vert");
console.log(shoppingCart);

// Dans le tableau webTechs, vérifiez si Sass existe dans le tableau et s'il existe, i
// mprimez "Sass est un préprocessus CSS". S'il n'existe pas, ajoutez Sass au
// tableau et imprimez le tableau.

webTechs.includes("Sass")
  ? console.log("Sass est un préprocessus CSS")
  : webTechs.push("Sass") && console.log(webTechs);

// Concaténez les deux variables suivantes et stockez-les dans une variable fullStack.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

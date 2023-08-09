// Exercice 1 Array MDN

// Créer un tableau
let fruits = ["Appel", "Banana"];
console.log(fruits.length);

// Accéder (via son index) à un élément du tableau
let frist = fruits[0];
let last = fruits[fruits.length - 1];
console.log(frist, last);

// Boucler sur un tableau
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

// Ajouter à la fin du tableau
let newlength = fruits.push("orange");
console.log(fruits);


// Supprimer le dernier élément du tableau
let pop = fruits.pop();

// Supprimer le premier élément du tableau
let shift = fruits.shift();

// Ajouter au début du tableau
let unishift = fruits.unshift('Strawberry');
console.log(fruits);

// Trouver l'index d'un élément dans le tableau
fruits.push('mango');
console.log(fruits);
let pos = fruits.indexOf('Banana');
console.log(pos);

// Supprimer un élément par son index
let removeitem = fruits.splice(pos, 1); 
console.log(removeitem);

 // Supprimer des éléments à partir d'un index
let vegetables = ['cabbage', 'turnip', 'carrot', 'radist'];
console.log(vegetables);
 
let position = 1, n = 2;
// n defini le nombre d'elements a supprimer a partir de la position pos
let removeitems = vegetables.splice(position, n);
// la removeitems permet stoke les elements supprimer
console.log(vegetables);

// Copier un tableau 
// la methode splice cree un nouveau tableau qui contient les element du tableau  fruits
let shallowCopy = fruits.slice();
console.log(shallowCopy);

// Accéder aux éléments d'un tableau
let array = ['le premier element', 'le deuxieme element', 'le dernier element.'];
console.log('Voici ',array[0], ',', array[1], 'et', array[array.length - 1]);

// on peut aussi utiliser les doubles quotes pour acceder au element du tableau
let annees = ['2000', '2004', '2012', '2025'];
console.log(annees["2"]);

// les propriétés nommées avec des mots-clés réservés ne peuvent être consultées 
// qu'en utilisant la syntaxe avec crochets 

let promise = {
    'var' : 'text',
    'array': [1, 2, 3]
};
console.log(promise['var']);

/******Relation entre length et les propriétés numériques*****/ 

fruits.push('peche') 
console.log(fruits.length);

// Lorsqu'on définit une nouvelle propriété numérique pour un tableau, que l'index
//  utilisé est valide et que celui-ci est dehors des limites actuelles du tableau, 
// le moteur JavaScript mettra à jour la propriété

fruits[5] = 'mango';
console.log(fruits[5]);
console.log(Object.keys(fruits));
console.log(fruits.length);

// On peut également modifier la propriété directement (cela n'ajoutera pas de nouveaux éléments) :
fruits.length = 10;
console.log(Object.keys(fruits));
console.log(fruits.length);

// En revanche, si on diminue la valeur de length, cela supprimera des éléments :
fruits.length = 2;
console.log(Object.keys(fruits));
console.log(fruits.length);
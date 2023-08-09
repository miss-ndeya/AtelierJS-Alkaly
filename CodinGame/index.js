/******Boucle et foction******/

// Créez une fonction puissance qui : prend deux arguments
// réalise le calcul du premier argument élevé à la puissance
// du deuxième sans utiliser les fonctions mahtématiques de JS

function puissance(module, exposant) {
  let puissance = 1;

  for (let i = 0; i < exposant; i++) {
    puissance *= module;
  }
  return puissance;
}
console.log("la puissance est :", puissance(4, 2));

// =========================================================

console.log("*****Boucle et tableau****");

// On souhaite stocker les positions d'une série de 20 objets mobiles
// (mobs) dans un jeu vidéo. Pour cela on va créer 2 tableaux :
// posX qui contient la série des abscisses des objets
// posY qui contient la série des ordonnées des objets
// Créez une fonction initXY :

// qui prend en 1er argument l'abscisse du 1er objet
// qui prend en 2ème argument l'ordonnée du 1er objet
// qui calcule les abscisses et ordonnés des objets de la série sachant qu'il doivent être
// espacés de 40 pixels (+40) les uns des autres en abscisse et de 30 pixels (+30) en ordonnée

function initXY(xo, yo) {
  let posX = [xo];
  let posY = [yo];

  for (let i = 1; i < 20; i++) {
    const abscissesObject = posX[i - 1] + 40;
    const ordonnésObject = posY[i - 1] + 30;

    posX.push(abscissesObject);
    posY.push(ordonnésObject);
  }

  return { posX, posY };
}
const positions = initXY(20, 30);
console.log("les position en X et Y", positions);

// ==============================================

console.log( "*****Modifiez un tableau avec push et pop*****" );

// Vous possédez d'un tableau contenant des nombres aléatoires et vous 
// devez créer une fonction sortNumbers(tInit, tInf, tSup) qui va ranger :

// tous les éléments de tInit inférieurs à 10 dans le tableau tInf
// et tous les éléments de tInit supérieurs ou égaux à 10 dans le tableau tSup
// 💡 la fonction doit fonctionner quel que soit le tableau tInit

const tInit = [1, 4, 34, 43, 5];
const tInf = [];
const tSup = [];

function sortNumbers(tInit, tInf, tSup){
    for (let elements of tInit) {
      if (elements < 10) {
        tInf.push(elements);
      } else {
        tSup.push(elements)
      };
    }
    
}
sortNumbers(tInit, tInf, tSup);

console.log('Voici les elements de notre tableau', tInit);
console.log('Voici les elements inferieur a 10 de notre tableau', tInf);
console.log('Voici les elements superieur a 10 de notre tableau', tSup);

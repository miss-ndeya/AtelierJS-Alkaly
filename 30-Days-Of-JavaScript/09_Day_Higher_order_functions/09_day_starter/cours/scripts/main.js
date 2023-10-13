// Fonction d'ordre supérieur (callback)
console.log("===============Fonction Callback==================");
// Rappeler
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2;
};

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}
console.log("Fonction de Rappel", cube(callback, 3));

// Fonction de retour
// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log("Fonction de retour", higherOrder(2)(3)(10));

// Voyons si nous utilisons les fonctions de rappel.
// Par exemple, la méthode forEach utilise le rappel.
const numbers = [1, 2, 3, 4, 5];
const sumArrayOne = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log("fonction rappel avec forEach", sumArrayOne(numbers));

// L'exemple ci-dessus peut être simplifié comme suit :
// const numbers = [1, 2, 3, 4]
const sumArrayTwo = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log("Simplifier", sumArrayTwo(numbers));

// Temps de prise

// Définition de l'intervalle à l'aide d'une fonction setInterval
// syntax
/*
function callback() {
  // code goes here
}
setInterval(callback, duration);
*/

// Définir une heure à l'aide d'un setTimeout
function sayHello() {
    console.log('Hello')
  }
  setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s



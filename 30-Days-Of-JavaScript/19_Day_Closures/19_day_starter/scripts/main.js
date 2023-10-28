console.log("======Level 1======");

// Créer une fermeture qui a une fonction interne
function fermeture() {
  let interne = 0;
  function interneFunc() {
    interne = "fonction interne";
    return interne;
  }
  return interneFunc;
}
const innerFun = fermeture();
console.log(innerFun());

// Créer une fermeture qui a trois fonctions internes
function calculFunction() {
  let a = 20;
  let b = 10;
  let somme = 0;
  let soustaire = 0;
  let divise = 0;
  function additionner() {
    somme = a + b;
    return somme;
  }
  function soustraction() {
    soustaire = a - b;
    return soustaire;
  }
  function division() {
    divise = a / b;
    return divise;
  }

  return {
    additionner: additionner(),
    soustraction: soustraction(),
    division: division(),
  };
}
const innerFuncs = calculFunction();

console.log(innerFuncs.additionner);
console.log(innerFuncs.soustraction);
console.log(innerFuncs.division);

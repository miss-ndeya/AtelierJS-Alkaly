/****exercice****/
/*
  consigne : 
  division : a/b avec b!=0 
  et si b===0 recuperer l'erreur dans catch
  */

let a = 20;
let b = 2;
let verifier = typeof a !== "number" || typeof b !== "number";

const faireUneDivision = (a, b) => {
  return new Promise((Resolve, Reject) => {
    if (verifier || b === 0) {
      return Reject("b est different de 0");
    }
    Resolve(a / b);
  });
};

faireUneDivision(a, b)
  .then((res) => {
    console.log("la division est :", res);
  })
  .catch((err) => {
    console.error("Error: " + err);
  });

const faireUneAddition = (a, b) => {
  return new Promise((Resolve, Reject) => {
    if (verifier) {
      return Reject("a et b doivent être des nombres ");
    }
    Resolve(a + b);
  });
};

faireUneAddition(a, b)
  .then((res) => {
    console.log("l'addition est :", res);
  })
  .catch((err) => {
    console.error("Error: " + err);
  });

const faireUneSoustraction = (a, b) => {
  return new Promise((Resolve, Reject) => {
    if (verifier || a < b) {
      return Reject("a et b doivent être des nombres et a > b");
    }
    Resolve(a - b);
  });
};

faireUneSoustraction(a, b)
  .then((res) => {
    console.log("la soustraction est :", res);
  })
  .catch((err) => {
    console.error("Error: " + err);
  });

function faireUnModulo(a, b) {
  return new Promise((Resolve, Reject) => {
    if (verifier || a === 0 || b === 0) {
      return Reject("a et b doivent être des nombres et differents de 0");
    }
    Resolve(a % b);
  });
}

faireUnModulo(a, b)
  .then((res) => {
    console.log("la modulo de est :", res);
  })
  .catch((err) => {
    console.error("Error: " + err);
  });

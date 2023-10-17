/****La gestion des erreurs****/
// syntaxe
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}

//   Exemple:
try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log(err);
}

try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.error(err);
} finally {
  console.log("In any case I will be executed");
}

// Utilisons le nom et le message.
try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log("Name of the error", err.name);
  console.log("Error message", err.message);
} finally {
  console.log("In any case I will be executed");
}
/*
throw : l'instruction throw nous
permet de créer une erreur personnalisée.
throw "Error2";
throw 42;
throw true;
throw new Error("Required");
const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();
*/

// Types d'erreurs
// Une ReferenceError est levée si nous
// utilisons une variable qui n'a pas été déclarée.
/*
let firstName = "Asabeneh";
let fullName = firstName + " " + lastName;
console.log(fullName);
*/

// SyntaxError : une erreur de syntaxe s'est produite
/*
let square = 2 x 2
console.log(square)
*/

// TypeError : une erreur de type s'est produite
let num = 10;
console.log(num.toLowerCase());

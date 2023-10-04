            /*********Exemple1*********/
           
// Declaration
const demarre = new Promise((resolve, reject) => {
  // ...
  const isRunning = false;

  if (isRunning === true) {
    resolve();
  } else {
    reject();
  }
});

// utilisation
demarre.then(() => {
  console.log("good!");
}).catch(() => {
    console.log('Oups, une erreur...');
}
);


            /*********Exemple2*********/

// Declaration
const calcul = new Promise((resolve, reject) => {
  // ...
  const result = 200 * 120;

  if (result) {
    resolve(result);
  } else {
    reject();
  }
});

// utilisation
calcul.then((result) => {
    console.log("resultat: " + result);
}).catch(() => {
    console.log("Oups, une erreur...");
});

            /*********Exemple3*********/

// Declaration
const calculer  = (num1, num2) => {
    return new Promise((resolve, reject) => {
        // ...
        const result = num1 * num2;
      
        if (result < 10000) {
          resolve(result);
        } else {
          reject("resutat trop petit");
        }
      });
}
  
  // utilisation
  calculer(300, 900).then((result) => {
      console.log("resultat: " + result);
  }).catch((err) => {
      console.log("Error: " + err);
  });
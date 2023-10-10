// Itérer de 0 à 10 en utilisant la boucle for, faire de même en utilisant la boucle while et faire while
for (let i = 0; i <= 10; i++) {
  console.log("Boucle for", i);
}

let j = 0;
while (j <= 10) {
  console.log("Boucle while", j);
  j++;
}

let k = 0;
do {
  console.log("Boucle do while", k);
  k++;
} while (k <= 10);

// Itérer de 10 à 0 en utilisant la boucle for, faire de même en utilisant la boucle while et faire while
for (let i = 10; i >= 0; i--) {
  console.log("Boucle for", i);
}

let o = 10;
while (o >= 0) {
  console.log("Boucle while", o);
  o--;
}
let m = 10;
do {
  console.log("Boucle do while", m);
  m--;
} while (m >= 0);

// Itérer de 0 à n en utilisant la boucle for
const n = 20;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Écrivez une boucle qui crée le modèle suivant en utilisant console.log() :
const nombreLignes = 7;

let motif = "";
for (let i = 1; i <= nombreLignes; i++) {
  motif += "#";
  console.log(motif);
}

// Utilisez la boucle pour imprimer le motif suivant :
motif = "";
for (let i = 0; i <= 10; i++) {
  let multiplie = i * i;

  motif = `${i} * ${i} = ${multiplie}`;

  console.log(motif);
}

// En utilisant la boucle, imprimez le motif suivant
motif = ''

for(let i = 0; i <= 10; i++) {
  let double = i * i 
  let triple = i * i * i
  motif = `${i} * ${double} = ${triple}`
  console.log(motif);
}

// Utilisez la boucle for pour parcourir de 0 à 100 et imprimer uniquement les nombres pairs
for(let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i, "pair");
  }
}

// Utilisez la boucle for pour parcourir de 0 à 100 et imprimer uniquement les nombres impairs
for(let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i, "impairs");
  }
}


// Utilisez la boucle for pour parcourir de 0 à 100 et imprimer la somme de tous les nombres.
let sum = 0
for(let i = 0; i <= 100; i++) {
  sum += i
}
console.log("The sum of all numbers from 0 to 100 is", sum, ".") ;  

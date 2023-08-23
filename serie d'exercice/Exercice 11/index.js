// En utilisant la boucle for, afficher la table de 
// multiplication du chiffre 5 dans la page HTML.
const container = document.getElementById("container");
let n = 5
let operation = '';
// let operation;
for (let i = 1; i <= 10; i++){
     operation = `<p>${operation} ${n} * ${i} = ${n*i}</p>`; 
    }
    container.innerHTML = operation
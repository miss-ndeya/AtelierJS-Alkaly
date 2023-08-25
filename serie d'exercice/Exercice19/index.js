// En utilisant deux boucles for, écrire un script qui 
// produit le résultat ci-dessous, dans la page HTML.

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let color = "rgb(" + r + ", " + g + ", " + b + ")";
document.body.style.background = color;


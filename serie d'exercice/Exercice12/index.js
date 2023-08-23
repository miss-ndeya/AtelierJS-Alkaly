// En utilisant deux boucles for, écrire un script qui 
// produit le résultat ci-dessous, dans la page HTML.

let resultat = ''
for(let i = 1; i<= 5; i++){
    for (let j = 1; j <= i ; j++) {
        resultat = `${resultat} ${i}` 
    }
    resultat = `<p>${resultat}</p>`;
}
document.getElementById('container').innerHTML = resultat

// pourquoi, 

// A l'aide de la fonction prompt(), demander un prix HT puis 
// un taux de la TVA à l'utilisateur puis insérer le prix TTC 
// dans la page HTML à l'aide de document.body.innerText.

const prixHT = prompt("Entrer le prix HT");
const prixTVA = prompt("Entrer le prix TVA");
const calculPrixTva = prixTVA/100 + 1;
const prixTTC = prixHT * calculPrixTva;
document.body.innerHTML = "Le prix du TTC est de :" + ' ' + prixTTC;
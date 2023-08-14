// A l'aide de la fonction prompt(), demander un prix 
// HT à l'utilisateur puis insérer le prix TTC (TVA 20 %) 
// dans la page HTML à l'aide de document.body.innerText.
const prixHT = prompt("Entrer le prix HT");
const prixTTC = prixHT * 1.20;
document.body.innerHTML = "Le prix du TTC est de :" + ' ' + prixTTC;
// A l'aide de la fonction prompt(), demander un prix HT puis un taux 
// de la TVA à l'utilisateur puis insérer le prix TTC dans la page HTML à
//  l'aide de document.body.innerHTML. Si le prix TTC est strictement supérieur
//   à 100 on affichera le prix en rouge sinon en vert. Pour simplifier on utilisera 
//   les bouts de code suivants sur l'élément HTML de votre choix :

const prixHT = prompt("Entrer le prix HT");
const prixTVA = prompt("Entrer le prix TVA");
const calculPrixTva = prixTVA/100 + 1;
const prixTTC = prixHT * calculPrixTva;
// condition d'affichage
if(prixTTC > 100) {
    document.body.innerHTML =`<p class="Rouge">Le prix du TTC est de : ${prixTTC}</p>` ;
} else{
    document.body.innerHTML =`<p class="Vert">Le prix du TTC est de : ${prixTTC}</p>` ;
}
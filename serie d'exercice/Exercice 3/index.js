const idContainer = document.querySelector("#main");
// Déclarer une variable budget qui contient le budget de 
// votre choix. Déclarer une variable achats qui contient 
// le montant de votre choix. Afficher si le budget permet de payer les achats.

let budget = 1000;

let achats = 1000;

const affiche = budget < achats;

if(affiche){
    alert("Votre budget ne vous permet pas cette achat");
} else{
    idContainer.innerHTML = "Votre budget permet de payer cette achat"
}



const idContainer = document.querySelector("#main");
// A l'aide de la fonction prompt(). Insérer dans la page HTML 
// la chaine de caractères inscrites dans la boite de dialogue.

let chaine = prompt("Bienvenu, merci de passer votre message ci-dessous");
idContainer.innerHTML = chaine;

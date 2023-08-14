const idContainer = document.querySelector("#main");
// Modifier le code ci-dessous pour calculer la moyenne des notes.
/*
let note_maths = 11;
let note_francais = 9;
let note_hg = 16;
let ??? = ???;
alert('La moyenne est de ' + ???);
*/

//--------------------------------------

// resultat
let note_maths = 11;
let note_francais = 9;
let note_hg = 16;
let moyenne = note_maths + note_francais + note_hg / 3;
// afficher le resultats une alert
alert('La moyenne est de ' + moyenne);
// afficher dans la page
idContainer.innerHTML = 'La moyenne est de ' + moyenne;
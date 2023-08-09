// Vous allez écrire une condition if/else entre les lignes 34 et 38 qui appellera
// la fonction refuser() si l'âge saisi correspond à un mineur, et la fonction valider() s’il est majeur.
// Attention, l'âge de la majorité a été stocké dans la variable ageMajorite, donc
// il faut utiliser cette variable dans la condition.

// selectionner les elements HTML
const message = document.getElementById("message");
const inputAge = document.getElementById("age");
const bouton = document.getElementById("button");
const inputParental = document.getElementById("parental");

// declaration variables
let age;
let ageMajoriter = 18;
let isControlParentalActive;

// fonction pour valider l'entrer
function valider() {
  message.innerHTML = "Vous etes autorise a entrer";
}

// fonction pour refuser l'entrer
function refuser() {
  alert("Refuser aux personnes mineurs");
}

// fonction click sur le bouton confirm
bouton.addEventListener("click", onConfirm);

function onConfirm() {
  // recuperer la valeur saisi
  age = inputAge.value;
  // alert pour indiquer que la valeur saisi n'est pas un nombre entier
  if (isNaN(age)) {
    alert("Ceci n'est op un nombre");
    return;
  }

  // recuperer la valeur du checkbox parental
  isControlParentalActive = inputParental.checked;

  // condition
  if (age < ageMajoriter && isControlParentalActive) {
    refuser();
  } else {
    valider();
  }

  // reinitialiser le champ de saisi
  inputAge.value = "";
}

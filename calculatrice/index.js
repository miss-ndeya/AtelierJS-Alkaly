const operation = document.querySelector(".text-end");
const resultals = document.querySelector(".text-start");
const buttons = document.querySelectorAll("#butoncalcul");
let stokerValue;
let valeurFinal = 0;

function chiffres(chiffre) {
  valeurFinal += chiffre;
  operation.value += chiffre;
  stokerValue = valeurFinal;
}

function operateurs(operateur) {
  valeurFinal += operateur;
  operation.value = operateur;
  resultals.value = eval(stokerValue);
}

function suprimerTout() {
    operation.value = "";
    resultals.value = "";
    valeurFinal = ""  
}

function suprimerOperation() {
  operation.value = ""
  valeurFinal = resultals.value
  stokerValue = resultals.value;
}

function calcul() {    
    operation.value = eval(valeurFinal);
  }

window.addEventListener("keydown", function(event) {
  const key = event.key;
  if (/^[0-9+\-*/.]$/.test(key)) {
    event.preventDefault();
    chiffres(key);
  }else if (key === "Enter") {
    event.preventDefault();
    calcul();
  } else if (key === "Delete") {
    event.preventDefault();
    suprimerOperation();
  } else if (key === "Backspace") {
    event.preventDefault();
    suprimerTout();
  }
});
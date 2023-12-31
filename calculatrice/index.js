const operation = document.querySelector(".text-end");
const resultals = document.querySelector(".text-start");
let stokerValue;
let valeurFinal = '';

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
  valeurFinal = "0";
  stokerValue = "0"
}

function suprimerOperation() {
  operation.value = "";
  valeurFinal = resultals.value;
  stokerValue = resultals.value;
}

// le parametre rest est nous permet de dnner une parametre indefinie 
// alors que le spread operator nous permet de fusionner des tableaux
// \
function calcul() {
  operation.value = eval(valeurFinal);
}

window.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/^[0-9+\-*/.]$/.test(key)) {
    if (/^[+\-*/]$/.test(key)) {
      operateurs(key)
    }else{
      chiffres(key);
    }
  } else if (key === "Enter") {
    calcul();
  } else if (key === "Delete") {
    suprimerOperation();
  } else if (key === "Backspace") {
    suprimerTout();
  }
});

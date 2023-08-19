const operation = document.querySelector(".text-end");
const resultals = document.querySelector(".text-start");
const buttons = document.querySelectorAll("#butoncalcul");
console.log(buttons);
let stokerValue;
let valeurFinal = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("butoncalcul")
    setTimeout(function () {
      button.classList.remove("butoncalcul")
    }, 200);
  })
})

   
function chiffres(chiffre) {
  valeurFinal += chiffre;
  operation.value += chiffre;
  stokerValue = chiffre;
}

function operateurs(operateur) {
    operation.value = operateur;
    valeurFinal += operateur;
    resultals.value = stokerValue;
}

function suprimerTout() {
    operation.value = "";
    resultals.value = "";
}

function suprimerOperation() {
  operation.value = ""
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
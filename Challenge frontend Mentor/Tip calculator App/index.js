const bill = document.querySelector(".fracture-input");
const btn5 = document.querySelector(".cinq");
const btn10 = document.querySelector(".dix");
const btn15 = document.querySelector(".quinze");
const btn24 = document.querySelector(".pourcentage20");
const btn50 = document.querySelector(".pourcentage50");
const btnCustom = document.querySelector(".custom-btn");
const nombrePersonne = document.querySelector(".nombre-personne");
const resultat1 = document.querySelector(".resultat1");
const container = document.querySelector(".container");
const resultat2 = document.querySelector(".resultat2");
const btnReset = document.querySelector(".reset-btn");
const pourcentage = document.querySelectorAll(".pourcentage");
const calculer = document.querySelector(".calcul");
let calcule = 0;

function styleButton(index) {
  for (let i = 0; i < pourcentage.length; i++) {
    if (pourcentage[i].classList.contains("active")) {
      pourcentage[i].classList.remove("active");
    } else {
    }
  }
  pourcentage[index].classList.add("active");
  if (bill.value != '') {
    btnReset.style.backgroundColor = "hsl(172, 67%, 45%)";
  }
}

nombrePersonne.addEventListener('click', () => {
  if (bill.value != '') {
    btnReset.style.backgroundColor = "hsl(172, 67%, 45%)";
  }
})

function calcul() {
  if (calcule === "0") {
    resultat1.innerHTML = "0";
    resultat2.innerHTML = "0";
  } else {
    if (bill.value != '') {
      btnReset.style.backgroundColor = "hsl(172, 67%, 45%)";
    }
    let resultat = (calcule / nombrePersonne.value).toFixed(2);
    resultat1.innerHTML = `$ ${resultat}`;
    let resultas = (
      bill.value / nombrePersonne.value +
      calcule / nombrePersonne.value
    ).toFixed(2);
    resultat2.innerHTML = `$ ${resultas}`;
  }
}
function pourcentage1() {
  styleButton(0);
  resultat2.innerHTML = "0";
  btnCustom.value = "";
  calcule = 0.05 * bill.value;
  console.log(calcule);
}
function pourcentage2() {
  styleButton(1);
  calcule = 0.1 * bill.value;
}
function pourcentage3() {
  styleButton(2);
  calcule = 0.15 * bill.value;
}
function pourcentage4() {
  styleButton(3);
  calcule = 0.25 * bill.value;
}
function pourcentage5() {
  styleButton(4);
  calcule = 0.5 * bill.value;
}

function cursom() {
  calculer.addEventListener("click", () => {
    calcule = (btnCustom.value / 100) * bill.value;
  });
  if (bill.value != '') {
    btnReset.style.backgroundColor = "hsl(172, 67%, 45%)";
  }
}
btnReset.addEventListener("click", () => {
  window.location.reload();
});

container.addEventListener("click", () => {
  if (nombrePersonne.value === "0") {
    const erreur = document.querySelector(".erreur");
    erreur.style.display = "block";
    nombrePersonne.style.border = "2px solid red";
    resultat1.innerHTML = "$ 0.00";
    resultat2.innerHTML = "$ 0.00";
  } else {
    const erreur = document.querySelector(".erreur");
    erreur.style.display = "none";
    nombrePersonne.style.border = "";
    if (bill.value === "" || calcule === 0) {
      resultat1.innerHTML = "$ 0.00";
      resultat2.innerHTML = "$ 0.00";
      console.log("result");
    } else {
      calcul();
    }
  }
});

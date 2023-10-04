// selectionner mes element
const date = document.getElementById("day");
const mois = document.getElementById("month");
const annee = document.getElementById("year");

function calculAge() {
  const inputs = document.querySelectorAll("input");
  const dates = new Date();
  let day = dates.getDate();
  let month = 1 + dates.getMonth();
  let year = dates.getFullYear();
  inputs.forEach((input) => {
    const parent = input.parentElement;
    const label = input.previousElementSibling;
    const small = input.nextElementSibling
    console.log(small);

    if (input.value === "") {
      input.style.borderColor = "red";
      label.style.color = "red";
      parent.querySelector("small").innerText = "this field is required.";
    } else if (mois.value > 12 && date.value > 31) {
      date.style.borderColor = "red";
      label.style.color = "red";
      date.parentElement.querySelector("small").innerText =
        "must be valid month.";

      mois.style.borderColor = "red";
      label.style.color = "red";
      mois.parentElement.querySelector("small").innerText =
        "must be valid month.";
    } else if (date.value > 31) {
      date.style.borderColor = "red";
      label.style.color = "red";
      date.parentElement.querySelector("small").innerText =
        "must be valid day.";
    } else if (mois.value > 12) {
      mois.style.borderColor = "red";
      label.style.color = "red";
      mois.parentElement.querySelector("small").innerText =
        "must be valid day.";
    } else if (annee.value > year) {
      annee.style.borderColor = "red";
      label.style.color = "red";
      annee.parentElement.querySelector("small").innerText =
        "must be in the past.";
    } else {
      input.style.borderColor = "#71717b";
      label.style.color = "#71717b";
      parent.querySelector("small").innerText = "";


      

      const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


      if (date.value > day) {
        day = day + months[month - 1];
        console.log(day);
        month = month - 1;
      }
      if (mois.value > month) {
        month = month + 12;
        year = year - 1;
      }
      document.getElementById("jours").innerHTML = day - date.value;
      document.getElementById("moiss").innerHTML = month - mois.value;
      document.getElementById("years").innerHTML = year - annee.value;
    }
  });
}
document.querySelector("button").addEventListener("click", calculAge);

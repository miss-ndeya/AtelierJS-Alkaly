const continentSelectionner = document.getElementById("filter");
const container = document.querySelector(".list-country");
const elementSaisi = document.getElementById("input");
const btnTheme = document.querySelector(".btnTheme");
const theme = localStorage.getItem("theme");
const form = document.querySelector("form");
const body = document.body;
let paysFilter;
let payss;

if (theme) {
  body.classList.remove("light", "dark");
  body.classList.add(theme);
  if (theme === "dark") {
    btnTheme.innerHTML = `<i class="fa-solid bg-transparent fa-moon fs-6 me-1 elements"></i> Dark Mode`;
  } else {
    btnTheme.innerHTML = `<i class="fa-regular bg-transparent fa-moon fs-6 me-1 elements"></i> Light Mode`;
  }
}

btnTheme.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
    btnTheme.innerHTML = `<i class="fa-regular bg-transparent fa-moon fs-6 me-1 elements"></i> Light Mode`;
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
    btnTheme.innerHTML = `<i class="fa-solid bg-transparent fa-moon fs-6 me-1 elements"></i> Dark Mode`;
    localStorage.setItem("theme", "dark");
  }
});

async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const pays = await response.json();
    payss = pays;
    affichePays(payss);
  } catch (error) {
    console.error("Impossible de contacter le serveur");
    document.getElementById("erreur").innerHTML =
      "Impossible de contacter le serveur";
  }
}

fetchCountries();

function affichePays(pays) {
  container.innerHTML = "";
  pays.forEach((country) => {
    const divContainer = document.createElement("div");
    divContainer.className =
      "rounded-3 col-10 cardContainer col-md-4 col-lg-3 mx-auto";
    divContainer.innerHTML += `
      <div class="card elements rounded-3 border-0">
        <div class="flag-container">
          <img src="${country.flags.png}" class=" country-flag" alt="flag">
        </div>
        <div class="card-body">
          <h5 class="card-title mb-2 mt-2 overflow-hidden">${country.name.common}</h5>
          <ul class="list-group list-group-flush mb-3 m-0 border-0 p-0 bg-transparent">
            <li class="list-group-item m-1 border-0 p-0 bg-transparent elements">
            <span class="fw-bold">Population</span> : ${country.population}
            </li>
            <li class="list-group-item m-1 border-0 p-0 bg-transparent elements">
            <span class="fw-bold">Region</span> : ${country.region}
            </li>
            <li class="list-group-item m-1 border-0 p-0 bg-transparent elements">
            <span class="fw-bold">Capital</span> : ${country.capital}
            </li>
          </ul>
        </div>
      </div>
    `;
    divContainer.addEventListener("click", () => {
      window.location.href = `detail.html?capital=${country.capital}`;
    });

    container.appendChild(divContainer);
  });
}

function filterCountries() {
  const paysFilter = payss.filter(
    (pays) =>
      (continentSelectionner.value === "tout" ||
        pays.region === continentSelectionner.value) &&
      (pays.name.common
        .toLowerCase()
        .includes(elementSaisi.value.toLowerCase()) ||
        pays.region.toLowerCase().includes(elementSaisi.value.toLowerCase()))
  );
  if (paysFilter.length === 0) {
    container.innerHTML =
      "<p class='fw-blod text-danger'>Aucun pays ne correspond à vos recherches.</p>";
  } else {
    affichePays(paysFilter);
  }
}

continentSelectionner.addEventListener("change", filterCountries);
elementSaisi.addEventListener("input", filterCountries);

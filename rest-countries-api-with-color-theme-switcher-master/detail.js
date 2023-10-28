const back = document.getElementById("back");
const urlParams = new URL(location.href).searchParams.get("capital");
const borderCountry = document.querySelector(".borderers");
const img = document.querySelector("img");
const title = document.querySelector(".title");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subregion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const tld = document.querySelector(".top");
const independent = document.querySelector(".independent");
const borders = document.querySelector(".borderers");

back.addEventListener("click", () => {
  window.location.href = "index.html";
});

fetch(`https://restcountries.com/v3.1/capital/${urlParams}`)
  .then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        const country = data[0];
        console.log(country);
        img.src = country.flags.png;
        title.innerHTML = country.name.common;
        population.innerHTML += ` ${country.population}`;
        region.innerHTML += ` ${country.region}`;
        subregion.innerHTML += ` ${country.subregion}`;
        capital.innerHTML += ` ${country.capital}`;
        tld.innerHTML += ` ${country.tld}`;
        independent.innerHTML += ` ${country.independent}`;
        const border = country.borders;
        if (border.length === 0) {
          borders.innerHTML += "Pas de Border Countries";
        } else {
          border.forEach((element) => {
            borders.innerHTML += `
            <button class="elements border-0 m-2 p-0 px-0 p-lg-2 px-lg-3 ">
              ${element}
            </button>
          `;
            document.createElement("button");
          });
        }
      });
    }
  })
  .catch((error) => console.error(error));

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// 1. Lisez l'API des pays en utilisant la récupération
// et l'impression du nom du pays, de la capitale,
// des langues, de la population et de la région.

const fetchData = async () => {
  try {
      const response = await fetch(countriesAPI);
      const countries = await response.json();
      countries.forEach((country) => {
      const nomPays = country.name;
      const capitalPays = country.capital;
      const languePays = country.languages;
      const populationPays = country.populations;
      const regionPays = country.region;
      // console.log(country);
      console.log({
        nomPays,
        capitalPays,
        languePays,
        populationPays,
        regionPays,
      });
    });
    // console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
fetchData();


// 1. Imprimez tous les noms de chats 
// dans la variable catNames.

const getCatNames = async function() {
    try {
        const response = await fetch(catsAPI);
        const cats = await response.json();
        // console.log(cats);
        cats.forEach((cat) => {
            console.log([cat.name]);
        })
    } catch (error) {
        console.error(error);
    }
}
getCatNames()


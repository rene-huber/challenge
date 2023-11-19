import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  // const foundCountry = countries.find(country =>
  //   country.name.toLowerCase().startsWith(searchString.toLowerCase())
  // );
  
  //   if (foundCountry) {
  //     const countryElement = Country(foundCountry);
  //     container.append(countryElement);
  //   }
  // });
  
  const foundCountry = countries.filter(country =>
   country.name.toLowerCase().startsWith(searchString.toLowerCase())
  );
  foundCountry.forEach(foundCountry => {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  });
});
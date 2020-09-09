const baseCountriesURL = "https://restcountries.eu/rest/v2/";
const baseCurrencyURL = "https://free.currconv.com/api/v7"
const access_key = '572ca773558508356656';
    const api = {
  getCountries: async () => {
    const data = await fetch(baseCountriesURL + "all");
    const countries = await data.json();
    return countries;
  },
  getDataFromCountry: async (code) => {
    const data = await fetch(baseCountriesURL + `alpha/${code}`);
    const countryData = await data.json();
    return countryData;  
  },
  getCurrencyFromCountry: async (code) => {
    const data = await fetch(`${baseCurrencyURL}/convert?q=SEK_${code}&compact=ultra&apiKey=${access_key}`)
    const money = await data.json();
    return money;
  }
};

export default api;

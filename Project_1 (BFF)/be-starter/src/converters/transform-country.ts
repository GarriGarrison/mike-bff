import extractNames from '../helpers/extract-names';

// any - для упрощения, чтобы не писать типы в учебном проекте
const transformCountry = (country: any) => {
  return {
    name: country.name,
    nativeName: country.nativeName,
    flag: country.flag,
    capital: country.capital,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    topLevelDomain: country.topLevelDomain,
    currencies: extractNames(country.currencies),
    languages: extractNames(country.languages),
    borders: country.borders,
  };
}

export default transformCountry;

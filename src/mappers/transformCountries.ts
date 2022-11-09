import { ICountry, ICountryApi } from "../types/types";

export const transformCountries = (countries: ICountryApi[]): ICountry[] =>
  countries.map((country) => {
    return {
      name: country.name.common,
      flag: country.flags.svg,
      region: country.region,
      capital: country.capital[0],
      population: country.population,
      area: country.area,
    };
  });

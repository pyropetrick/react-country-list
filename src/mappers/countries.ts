interface ICountryFlag {
  png: string;
  svg: string;
}
interface ICountryNameOnLang {
  official: string;
  common: string;
}

interface ICountryNativeName {
  [language: string]: ICountryNameOnLang | undefined;
}
interface ICountryName {
  common: string;
  official: string;
  nativeName: ICountryNativeName;
}

interface ICountryApi {
  flags: ICountryFlag;
  name: ICountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export const getCountries = (countries: ICountryApi[]) => countries.map((country) => {
  return {
    name: country.name.common,
    flag: country.flags.svg,
    region: country.region,
    capital: country.capital[0],
    population: country.population,
    area: country.area,
  };
})


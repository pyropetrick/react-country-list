import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { ICountry } from "./types/types";

export const App = () => {
  const transformCountries: ICountry[] = countries.map((country) => {
    return {
      name: country.name.common,
      flag: country.flags.svg,
      region: country.region,
      capital: country.capital[0],
      population: country.population,
      area: country.area,
    };
  });
  return (
    <div className="container">
      <h1 className="mb-4">Country list</h1>
      <CountryList countries={transformCountries} />
    </div>
  );
};

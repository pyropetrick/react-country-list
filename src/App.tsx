import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { ICountry } from "./types/types";
import {getCountries} from "./mappers/countries";

export const App = () => {
  const transformCountries: ICountry[] = getCountries(countries);
  return (
    <div className="container">
      <h1 className="mb-4">Country list</h1>
      <CountryList countries={transformCountries} />
    </div>
  );
};

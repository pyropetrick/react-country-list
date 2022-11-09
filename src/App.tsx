import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { ICountry } from "./types/types";
import { transformCountries } from "./mappers/transformCountries";

export const App = () => {
  const transformedCountries: ICountry[] = transformCountries(countries);
  return (
    <div className="container">
      <h1 className="mb-4">Country list</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};

import { ICountry } from "../types/types";
import { Badge } from "./Badge";
interface ICountryItem {
  country: ICountry;
}
export const CountryItem = ({
  country: { name, area, population, flag, capital, region },
}: ICountryItem) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img src={flag} alt="flag" className="img-thumbnail col-1" />
      <p className="m-0 col-2">{name}</p>
      <p className="m-0 col-2">{capital}</p>
      <p className="m-0 col-1">{region}</p>
      <Badge label={{ name: "area", numbers: area }} />
      <Badge label={{ name: "population", numbers: population }} />
    </li>
  );
};

import { ICountry } from "../types/types";
import { Badge } from "./Badge";
import {Color} from "../types/enum";
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
      <Badge label={"area"}  count={area} color={Color.Primary}  />
      <Badge label={"population"}  count={population} color={Color.Secondary} />
    </li>
  );
};

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

export interface ICountryApi {
  flags: ICountryFlag;
  name: ICountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}
export interface ICountry {
  population: number;
  area: number;
  region: string;
  capital: string;
  flag: string;
  name: string;
}

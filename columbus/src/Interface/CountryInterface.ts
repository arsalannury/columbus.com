export interface CountryInterface {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: { latlng: number[] };
  car: { signs: string[]; side: string };
  cca2?: string;
  cca3?: string;
  ccn3?: string;
  cioc?: string;
  coatOfArms: { png?: string; svg?: string };
  continents: string[];
  currencies: {};
  // demonyms : {eng?: {…}, fra?: {…}}
  fifa: string;
  flag: string;
  flags: { png?: string; svg?: string };
  idd: { root: string; suffixes: string[] };
  independent: boolean;
  landlocked: boolean;
  languages: {};
  latlng: number[];
  maps: { googleMaps?: string; openStreetMaps?: string };
  name: { common: string; official: string; nativeName: {} };
  population: number;
  postalCode: { format: string; regex: RegExp };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: [string];
  tld: string[];
  translations: any;
  unMember: boolean;
}

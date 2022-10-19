export interface CardProps {
  coatOfArms: { png: string; svg: string };
  flags?: { png: string; svg: string };
  officialName: string;
  bul: any;
  languages: any;
  maps: { googleMaps: string };
  independent: boolean;
  translations: { per: { official: string } };
  population: number | string;
  region: string;
  common: string;
}
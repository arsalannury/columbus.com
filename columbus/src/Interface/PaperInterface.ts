export interface PaperInterface<T extends Object> {
  area: number;
  unMember: boolean;
  common: string;
  fifa: string;
  coatOfArms: { png?: string; svg?: string };
  car: { signs?: string[]; side: string };
  demonyms: any;
  currencies: { name: string; symbol: string };
  gini: T;
}

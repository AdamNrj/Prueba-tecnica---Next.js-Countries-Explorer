export interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };
  capital?: string[];
  region: string;
  population: number;
}

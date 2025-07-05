export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    png: string;
  };
  cca3: string;
  capital?: string[];
  region: string;
  population: number;
}

export interface CountryDetail {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    png: string;
  };
  cca3: string;
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  area: number;
  languages?: Record<string, string>;
  currencies?: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  timezones: string[];
  idd: {
    root: string;
    suffixes: string[];
  };
}

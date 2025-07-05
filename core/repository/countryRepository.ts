import { Country, CountryDetail } from "../domain/country";
import { api } from "@/lib/api/Api";

export class CountryRepositoryImpl {
  async getAllCountries(): Promise<Country[]> {
    return await api<Country[]>(
      "/all?fields=name,flags,cca3,capital,region,population"
    );
  }

  async searchCountries(name: string): Promise<Country[]> {
    return await api<Country[]>(
      `/name/${encodeURIComponent(name)}?fields=name,flags,cca3,capital,region,population`
    );
  }

  async getCountryByCode(code: string): Promise<CountryDetail> {
    const response = await api<CountryDetail[]>(
      `/alpha/${encodeURIComponent(code)}`
    );
    return response[0];
  }
}

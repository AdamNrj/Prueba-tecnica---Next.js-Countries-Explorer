import { Country } from "../domain/country";
import { api } from "@/lib/api/Api";

export class CountryRepositoryImpl {
  async getAllCountries(): Promise<Country[]> {
    return await api<Country[]>("/all");
  }

  async searchCountries(name: string): Promise<Country[]> {
    return await api<Country[]>(`/name/${name}`);
  }
}

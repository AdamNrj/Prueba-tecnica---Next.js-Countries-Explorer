import { Country } from "../domain/country";
import { CountryRepositoryImpl } from "../repository/countryRepository";

const repository = new CountryRepositoryImpl();

export async function getAllCountries(): Promise<Country[]> {
  return await repository.getAllCountries();
}

export async function searchCountries(name: string): Promise<Country[]> {
  return await repository.searchCountries(name);
}

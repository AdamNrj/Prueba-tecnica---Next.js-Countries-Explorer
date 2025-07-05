"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  getAllCountries,
  searchCountries,
} from "@/core/useCases/useCasesCountries";
import { Country } from "@/core/domain/country";

interface CountryContextType {
  countries: Country[];
  loading: boolean;
  error: string | null;
  search: string;
  setSearch: (term: string) => void;
  reset: () => void;
  currentPage: number;
  setPage: (page: number) => void;
  paginatedCountries: Country[];
  totalPages: number;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

const PAGE_SIZE = 12;

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = search
          ? await searchCountries(search)
          : await getAllCountries();
        setCountries(data);
        setCurrentPage(1);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("fetchError");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const reset = () => {
    setSearch("");
    setCurrentPage(1);
  };

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginatedCountries = countries.slice(start, end);
  const totalPages = Math.ceil(countries.length / PAGE_SIZE);

  return (
    <CountryContext.Provider
      value={{
        countries,
        loading,
        error,
        search,
        setSearch,
        reset,
        currentPage,
        setPage,
        paginatedCountries,
        totalPages,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export function useCountryContext() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
}

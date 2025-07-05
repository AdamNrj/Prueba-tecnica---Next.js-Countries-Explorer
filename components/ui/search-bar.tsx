"use client";

import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useCountryContext } from "@/providers/country-context";
import { useMemo } from "react";

export default function SearchBar() {
  const t = useTranslations("SearchBar");
  const { search, setSearch, countries } = useCountryContext();

  const suggestions = useMemo(() => {
    if (!search || search.length < 2) return [];
    return countries
      .filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 5);
  }, [search, countries]);

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative group">
        {/* Search Input */}
        <div className="relative search-glow rounded-2xl transition-all duration-300">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors duration-300" />
          <Input
            type="text"
            placeholder={t("placeholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-20 py-4 text-lg bg-white dark:text-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:border-red-500 dark:focus:border-red-500 focus:ring-0 transition-all duration-300 shadow-lg hover:shadow-xl"
          />
          <Button
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => setSearch(search.trim())}
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Dynamic Suggestions */}
        {suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-10">
            <div className="p-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                {t("suggestions")}
              </div>
              <div className="space-y-2">
                {suggestions.map((country) => (
                  <button
                    key={country.cca3}
                    onClick={() => setSearch(country.name.common)}
                    className="flex w-full items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <Search className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {country.name.common}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

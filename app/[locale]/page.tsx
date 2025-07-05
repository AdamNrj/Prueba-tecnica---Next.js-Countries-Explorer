"use client";

import { useTranslations } from "next-intl";

import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import SearchBar from "@/components/ui/search-bar";
import CountryCard from "@/components/ui/country-card";
// import { Button } from "@/components/ui/button";

import { useCountryContext } from "@/providers/country-context";
import { AlertCircle } from "lucide-react";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const {
    paginatedCountries,
    loading,
    error,
    currentPage,
    totalPages,
    setPage,
    countries,
  } = useCountryContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <SearchBar />

          <section className="mt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("discoverTitle")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("discoverSubtitle")}
                </p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {loading
                  ? t("loading")
                  : `${countries.length} ${t("countriesFound")}`}
              </div>
            </div>

            {/* Loader */}
            {loading && (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent" />
              </div>
            )}

            {/* Error o no results */}
            {!loading && (error || countries.length === 0) && (
              <div className="text-center mt-12">
                <div className="flex flex-col items-center justify-center gap-2">
                  <AlertCircle className="h-8 w-8 text-red-500" />
                  <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                    {t(error || "noResults")}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm font-medium transition"
                  >
                    {t("tryAgain", { defaultValue: "Try again" })}
                  </button>
                </div>
              </div>
            )}

            {/* Country Grid */}
            {!loading && !error && paginatedCountries.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedCountries.map((country, index) => (
                  <CountryCard
                    key={country.cca3}
                    country={{
                      id: country.cca3,
                      name: country.name.common,
                      region: country.region,
                      flag: country.flags.svg,
                    }}
                    index={index}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {!loading && !error && totalPages > 1 && (
              <div className="flex justify-center mt-10 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 text-sm font-medium rounded-full ${
                      currentPage === i + 1
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    } transition-all duration-300`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* CTA */}
          {/* <div className="mt-8">
            <Button>{t("ctaButton")}</Button>
          </div> */}
        </div>
      </main>
    </div>
  );
}

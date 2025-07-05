"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import SearchBar from "@/components/ui/search-bar";
import CountryCard from "@/components/ui/country-card";
import { Button } from "@/components/ui/button";

const mockCountries = [
  {
    id: "us",
    name: "United States",
    region: "Americas",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "jp",
    name: "Japan",
    region: "Asia",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "de",
    name: "Germany",
    region: "Europe",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "br",
    name: "Brazil",
    region: "Americas",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "au",
    name: "Australia",
    region: "Oceania",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "fr",
    name: "France",
    region: "Europe",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "in",
    name: "India",
    region: "Asia",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "za",
    name: "South Africa",
    region: "Africa",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "ca",
    name: "Canada",
    region: "Americas",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "it",
    name: "Italy",
    region: "Europe",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "mx",
    name: "Mexico",
    region: "Americas",
    flag: "/placeholder.svg?height=120&width=180",
  },
  {
    id: "cn",
    name: "China",
    region: "Asia",
    flag: "/placeholder.svg?height=120&width=180",
  },
];

export default function HomePage() {
  const t = useTranslations("HomePage");

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
                {mockCountries.length} {t("countriesFound")}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockCountries.map((country, index) => (
                <CountryCard key={country.id} country={country} index={index} />
              ))}
            </div>
          </section>

          {/* Extra button example */}
          <div className="mt-8">
            <Button>{t("ctaButton")}</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

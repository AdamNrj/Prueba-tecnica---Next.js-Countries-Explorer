"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Users, Building } from "lucide-react";
import Image from "next/image";

interface Country {
  id: string;
  name: string;
  region: string;
  flag: string;
}

interface CountryCardProps {
  country: Country;
  index: number;
}

export default function CountryCard({ country, index }: CountryCardProps) {
  const t = useTranslations("CountryCard");
  const locale = useLocale();

  const countryPath = locale === "es" ? `/paises/${country.id}` : `/countries/${country.id}`;

  return (
    <Link href={`/${locale}${countryPath}`} aria-label={`Explore ${country.name}`}>
      <div
        className="country-card group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: "fadeInUp 0.6s ease-out forwards",
        }}
      >
        {/* Flag */}
        <div className="relative h-32 overflow-hidden">
          <Image
            src={country.flag}
            alt={`${country.name} flag`}
            fill
            className="object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index < 4} // Optimiza los primeros países visibles
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
            {country.region}
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
            {country.name}
          </h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Building className="h-4 w-4 text-red-500" />
              <span>{t("capital")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-red-500" />
              <span>{t("population")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <span>{country.region}</span>
            </div>
          </div>

          {/* CTA Arrow */}
          <div className="mt-4 flex items-center text-red-500 font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <span>{t("explore")}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

const style = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = style;
  document.head.appendChild(styleSheet);
}

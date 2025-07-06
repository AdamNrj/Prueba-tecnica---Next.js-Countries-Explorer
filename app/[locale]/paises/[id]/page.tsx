import Navbar from "@/components/ui/navbar";
import FlagImage from "@/components/ui/flag-image";
import BackButton from "@/components/ui/back-button";
import Head from "next/head";
import { MapPin, Users, Building, Globe, Calendar, DollarSign } from "lucide-react";
import type { CountryDetail } from "@/core/domain/country";
import { getCountryByCode } from "@/core/useCases/useCasesCountries";

interface Props {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export default async function CountryPage({ params }: Props) {
  const { id } = await params;
  const country: CountryDetail = await getCountryByCode(id);
  const name = country.name.common;
  const description = `Discover details about ${name}, including capital, population, region, and more.`;

  return (
    <>
      <Head>
        <title>{name} | Country Explorer</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${name} | Country Explorer`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={country.flags.svg} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-5xl">
          <BackButton />
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="relative h-64 bg-gradient-to-r from-red-500/10 to-red-600/10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="mb-6">
                    <FlagImage
                      src={country.flags.svg}
                      alt={`${name} flag`}
                      className="w-48 h-32 object-cover rounded-2xl shadow-2xl mx-auto border-4 border-white dark:border-gray-700"
                    />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {name}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                    {country.region} • {country.subregion || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CountryDetailSection
                  icon={<Building className="h-6 w-6" />}
                  title="Capital"
                  value={country.capital?.[0] || "N/A"}
                  description="Administrative center"
                />
                <CountryDetailSection
                  icon={<Users className="h-6 w-6" />}
                  title="Population"
                  value={country.population.toLocaleString()}
                  description="Total inhabitants"
                />
                <CountryDetailSection
                  icon={<MapPin className="h-6 w-6" />}
                  title="Area"
                  value={`${country.area.toLocaleString()} km²`}
                  description="Total land area"
                />
                <CountryDetailSection
                  icon={<Globe className="h-6 w-6" />}
                  title="Languages"
                  value={country.languages ? Object.values(country.languages).join(", ") : "N/A"}
                  description="Official languages"
                />
                <CountryDetailSection
                  icon={<DollarSign className="h-6 w-6" />}
                  title="Currencies"
                  value={
                    country.currencies
                      ? Object.values(country.currencies)
                          .map(c => c.name)
                          .join(", ")
                      : "N/A"
                  }
                  description="Legal tender"
                />
                <CountryDetailSection
                  icon={<Calendar className="h-6 w-6" />}
                  title="Timezone"
                  value={country.timezones?.[0] || "N/A"}
                  description="Standard time"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function CountryDetailSection({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="group p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="flex items-center space-x-3 mb-3">
        <div className="text-red-500 group-hover:text-red-600 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-lg font-bold text-gray-900 dark:text-white mb-1">{value}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

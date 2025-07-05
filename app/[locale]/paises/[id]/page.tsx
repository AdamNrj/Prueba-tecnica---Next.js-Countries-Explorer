import CountryPage from "@/app/pages/countries/country";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <CountryPage params={params} />;
}

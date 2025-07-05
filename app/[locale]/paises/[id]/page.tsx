import CountryPage from "@/app/pages/countries/country";

export default function Page({ params }: { params: { id: string } }) {
  return <CountryPage params={params} />;
}

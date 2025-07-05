import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return <h1 className="text-yellow-50 text-2xl">{t("title")}</h1>;
}

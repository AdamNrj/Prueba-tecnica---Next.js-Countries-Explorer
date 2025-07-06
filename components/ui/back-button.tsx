"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function BackButton() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations("BackButton");

  const handleBack = () => {
    router.push(`/${locale}`);
  };

  return (
    <div className="mb-8">
      <Button
        onClick={handleBack}
        variant="outline"
        size="lg"
        className="group bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-950/20 border-2 border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
      >
        <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        {t("label")}
      </Button>
    </div>
  );
}

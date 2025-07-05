"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  const handleLanguageChange = (locale: string) => {
    const newPathname = `/${locale}${pathname.replace(/^\/(en|es)/, "")}`;
    router.push(newPathname);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="group h-10 px-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-300 hover:scale-105 bg-transparent"
        >
          <Languages className="h-4 w-4 mr-2 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
          <span className="font-medium uppercase dark:text-white">
            {currentLocale}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center space-x-3 px-4 py-3 hover:bg-red-50 dark:hover:bg-red-950/20 cursor-pointer transition-colors duration-200 rounded-lg mx-1"
          >
            <span className="text-lg">{language.flag}</span>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">
                {language.name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase">
                {language.code}
              </div>
            </div>
            {currentLocale === language.code && (
              <div className="ml-auto w-2 h-2 bg-red-500 rounded-full" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import ModeToggle from "./mode-toggle";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-red-100 dark:border-red-900/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Globe className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300 animate-float" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg group-hover:bg-red-500/30 transition-all duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t("title")}
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {t("subtitle")}
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

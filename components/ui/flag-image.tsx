"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface FlagImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function FlagImage({ src, alt, className = "" }: FlagImageProps) {
  const [imageError, setImageError] = useState(false);

  const t = useTranslations("FlagImage");

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageError ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-2xl mb-2">🏳️</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {t("fallback")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

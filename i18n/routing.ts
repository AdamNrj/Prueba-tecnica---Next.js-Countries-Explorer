import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  pathnames: {
    "/countries": {
      en: "/countries",
      es: "/paises",
    },
    "/countries/[id]": {
      en: "/countries/[id]",
      es: "/paises/[id]",
    },
  },
});

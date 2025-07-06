import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
  pathnames: routing.pathnames,
});

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};

import { render, screen } from "@testing-library/react";
import CountryCard from "@/components/ui/country-card";
import { IntlProvider } from "next-intl";

// mock locale
jest.mock("next-intl", () => ({
  ...jest.requireActual("next-intl"),
  useLocale: () => "en",
  useTranslations: () => (key: string) => key,
}));

const mockCountry = {
  id: "ES",
  name: "Spain",
  region: "Europe",
  flag: "https://flagcdn.com/es.svg",
};

describe("CountryCard", () => {
  it("renders country name and region", () => {
    render(
      <IntlProvider messages={{}} locale="en">
        <CountryCard country={mockCountry} index={0} />
      </IntlProvider>
    );

    expect(screen.getByText("Spain")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
  });
});

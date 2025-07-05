import { render, screen } from "@testing-library/react";
import SearchBar from "@/components/ui/search-bar";
import { CountryProvider } from "@/providers/country-context";
import { IntlProvider } from "next-intl";

describe("SearchBar", () => {
  it("renders search input", () => {
    render(
      <IntlProvider messages={{ SearchBar: { placeholder: "Search for a country" } }} locale="en">
        <CountryProvider>
          <SearchBar />
        </CountryProvider>
      </IntlProvider>
    );

    expect(screen.getByPlaceholderText(/search for a country/i)).toBeInTheDocument();
  });
});

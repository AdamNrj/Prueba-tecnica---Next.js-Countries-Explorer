import { render, screen } from "@testing-library/react";
import BackButton from "@/components/ui/back-button";
import { IntlProvider } from "next-intl";

// mock router
jest.mock("next/navigation", () => ({
  useRouter: () => ({ back: jest.fn() }),
}));

describe("BackButton", () => {
  it("renders BackButton with label", () => {
    render(
      <IntlProvider messages={{ BackButton: { label: "Go back" } }} locale="en">
        <BackButton />
      </IntlProvider>
    );

    expect(screen.getByRole("button", { name: /go back/i })).toBeInTheDocument();
  });
});

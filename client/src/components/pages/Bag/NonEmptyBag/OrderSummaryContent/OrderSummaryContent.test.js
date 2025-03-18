import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import { OrderSummaryContent } from "./OrderSummaryContent";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

jest.mock("../../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../../common/OrderSummary/OrderSummary", () => ({
  OrderSummary: () => <div>OrderSummary</div>,
}));

jest.mock("../../../../reusable/Button/Button", () => ({
  Button: ({ title }) => <button>{title}</button>,
}));

describe("OrderSummaryContent Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders OrderSummary and Continue Checkout button", () => {
    render(
      <MemoryRouter>
        <OrderSummaryContent />
      </MemoryRouter>
    );

    expect(screen.getByText("OrderSummary")).toBeInTheDocument();

    const button = screen.getByText("Continue Checkout");
    expect(button).toBeInTheDocument();

    const link = button.closest("a");
    expect(link).toHaveAttribute("href", "/checkout");
  });
});

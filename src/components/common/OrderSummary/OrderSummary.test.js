import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { OrderSummary } from "./OrderSummary";

import { useLanguageContext } from "../../../contexts/LanguageContext";
import { useBagContext } from "../../../contexts/BagContext";

jest.mock("../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../contexts/BagContext");

describe("OrderSummary Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    useBagContext.mockReturnValue({
      totalPrice: 0,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderOrderSummaryWithRoute = (route) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="*" element={<OrderSummary />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("should render the Order Summary with correct titles and prices", () => {
    renderOrderSummaryWithRoute("/users/shopping-bag");

    expect(screen.getByText("Order Summary")).toBeInTheDocument();

    expect(screen.getByText("Subtotal")).toBeInTheDocument();

    expect(screen.getByText("Shipping")).toBeInTheDocument();
    expect(screen.getByText("Complimentary")).toBeInTheDocument();

    expect(screen.getByText("Total")).toBeInTheDocument();
  });
});

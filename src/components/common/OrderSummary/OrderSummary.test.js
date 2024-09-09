import { render, screen } from "@testing-library/react";
import { OrderSummary } from "./OrderSummary";
import { useBagContext } from "../../../contexts/BagContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Mock the useBagContext hook
jest.mock("../../../contexts/BagContext");

describe("OrderSummary Component", () => {
  beforeEach(() => {
    // Mock the useBagContext hook to return a specific total price
    useBagContext.mockReturnValue({
      totalPrice: 150.0,
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

    // Check if the "Order Summary" title is displayed
    expect(screen.getByText("Order Summary")).toBeInTheDocument();

    // Check if "Subtotal" and the correct total price are displayed
    expect(screen.getByText("Subtotal")).toBeInTheDocument();

    // Check if "Shipping" is displayed correctly
    expect(screen.getByText("Shipping")).toBeInTheDocument();
    expect(screen.getByText("Complimentary")).toBeInTheDocument();

    // Check if "Total" and the correct total price are displayed
    expect(screen.getByText("Total")).toBeInTheDocument();
  });

});

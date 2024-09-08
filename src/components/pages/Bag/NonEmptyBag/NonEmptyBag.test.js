import { render, screen } from "@testing-library/react";
import { NonEmptyBag } from "./NonEmptyBag";
import '@testing-library/jest-dom/extend-expect';

// Mock the child components
jest.mock("./OrderSummaryContent/OrderSummaryContent", () => ({
  OrderSummaryContent: () => <div>OrderSummaryContent</div>,
}));

jest.mock("./BagContent/BagContent", () => ({
  BagContent: () => <div>BagContent</div>,
}));

describe("NonEmptyBag Component", () => {
  test("renders BagContent and OrderSummaryContent", () => {
    render(<NonEmptyBag />);

    // Check if BagContent is rendered
    expect(screen.getByText("BagContent")).toBeInTheDocument();

    // Check if OrderSummaryContent is rendered
    expect(screen.getByText("OrderSummaryContent")).toBeInTheDocument();
  });
});

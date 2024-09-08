import { render, screen } from "@testing-library/react";
import { Bag } from "./Bag";
import { useBagContext } from "../../../contexts/BagContext";

// Mock the child components
jest.mock("./NonEmptyBag/NonEmptyBag", () => ({
  NonEmptyBag: () => <div>NonEmptyBag</div>,
}));

jest.mock("./EmptyBag/EmptyBag", () => ({
  EmptyBag: () => <div>EmptyBag</div>,
}));

// Mock the useBagContext hook
jest.mock("../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

describe("Bag Component", () => {
  test("renders NonEmptyBag when bagTotalQuantity is greater than 0", () => {
    useBagContext.mockReturnValue({
      bagTotalQuantity: 1, // Mock value for a non-empty bag
    });

    render(<Bag />);

    // Check that NonEmptyBag is rendered
    expect(screen.getByText("NonEmptyBag")).toBeInTheDocument();
    // Ensure EmptyBag is not rendered
    expect(screen.queryByText("EmptyBag")).not.toBeInTheDocument();
  });

  test("renders EmptyBag when bagTotalQuantity is 0 or less", () => {
    useBagContext.mockReturnValue({
      bagTotalQuantity: 0, // Mock value for an empty bag
    });

    render(<Bag />);

    // Check that EmptyBag is rendered
    expect(screen.getByText("EmptyBag")).toBeInTheDocument();
    // Ensure NonEmptyBag is not rendered
    expect(screen.queryByText("NonEmptyBag")).not.toBeInTheDocument();
  });
});

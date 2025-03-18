import { render, screen } from "@testing-library/react";

import { Bag } from "./Bag";

import { useBagContext } from "../../../contexts/BagContext";

jest.mock("./NonEmptyBag/NonEmptyBag", () => ({
  NonEmptyBag: () => <div>NonEmptyBag</div>,
}));

jest.mock("./EmptyBag/EmptyBag", () => ({
  EmptyBag: () => <div>EmptyBag</div>,
}));

jest.mock("../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

describe("Bag Component", () => {
  test("renders NonEmptyBag when bagTotalQuantity is greater than 0", () => {
    useBagContext.mockReturnValue({
      bagTotalQuantity: 1,
    });

    render(<Bag />);

    expect(screen.getByText("NonEmptyBag")).toBeInTheDocument();

    expect(screen.queryByText("EmptyBag")).not.toBeInTheDocument();
  });

  test("renders EmptyBag when bagTotalQuantity is 0 or less", () => {
    useBagContext.mockReturnValue({
      bagTotalQuantity: 0,
    });

    render(<Bag />);

    expect(screen.getByText("EmptyBag")).toBeInTheDocument();

    expect(screen.queryByText("NonEmptyBag")).not.toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import { Sizes } from "./Sizes";

jest.mock("../../../../../reusable/NormalTitle/NormalTitle", () => ({
  NormalTitle: ({ title, variant }) => (
    <div data-testid={`normal-title-${variant}`}>{title}</div>
  ),
}));

describe("Sizes Component", () => {
  const mockChangeHandler = jest.fn();

  const mockInventories = [
    { size: "S", quantity: 10, price: "50" },
    { size: "M", quantity: 0, price: "60" },
    { size: "L", quantity: 5, price: "70" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders sizes and error message", () => {
    render(
      <MemoryRouter>
        <Sizes
          inventories={mockInventories}
          errorMessage="Size selection is required."
          changeHandler={mockChangeHandler}
          selectedSize="M"
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Size")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("$60")).toBeInTheDocument();
    expect(screen.getByText("$70")).toBeInTheDocument();

    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "Size selection is required."
    );
  });
});

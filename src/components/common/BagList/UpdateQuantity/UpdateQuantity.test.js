import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { UpdateQuantity } from "./UpdateQuantity";

import { useBagContext } from "../../../../contexts/BagContext";

jest.mock("../../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

describe("UpdateQuantity Component", () => {
  const bagId = "test-bag-id";
  const bagQuantity = 2;
  const inventoryQuantity = 5;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with correct quantity and button states", () => {
    useBagContext.mockReturnValue({
      increase: jest.fn(),
      decrease: jest.fn(),
    });

    render(
      <UpdateQuantity
        bagId={bagId}
        bagQuantity={bagQuantity}
        inventoryQuantity={inventoryQuantity}
      />
    );

    const plusButton = screen.getByTestId("increase-button");
    const minusIcon = screen.getByTestId("decrease-icon");

    expect(screen.getByText(bagQuantity)).toBeInTheDocument();
    expect(plusButton).toBeEnabled();
    expect(minusIcon).toBeInTheDocument();
    expect(minusIcon).toHaveClass("enabled");
  });

  test("calls increase function when plus button is clicked", () => {
    const mockIncrease = jest.fn();
    useBagContext.mockReturnValue({
      increase: mockIncrease,
      decrease: jest.fn(),
    });

    render(
      <UpdateQuantity
        bagId={bagId}
        bagQuantity={bagQuantity}
        inventoryQuantity={inventoryQuantity}
      />
    );

    const plusIcon = screen.getByTestId("increase-icon");
    fireEvent.click(plusIcon);

    expect(mockIncrease).toHaveBeenCalledWith(bagId);
    expect(mockIncrease).toHaveBeenCalledTimes(1);
  });

  test("calls decrease function when minus icon is clicked", () => {
    const mockDecrease = jest.fn();
    useBagContext.mockReturnValue({
      increase: jest.fn(),
      decrease: mockDecrease,
    });

    render(
      <UpdateQuantity
        bagId={bagId}
        bagQuantity={bagQuantity}
        inventoryQuantity={inventoryQuantity}
      />
    );

    const minusIcon = screen.getByTestId("decrease-icon");
    fireEvent.click(minusIcon);

    expect(mockDecrease).toHaveBeenCalledWith(bagId);
    expect(mockDecrease).toHaveBeenCalledTimes(1);
  });

  test("disables plus button when inventoryQuantity is less than 1", () => {
    useBagContext.mockReturnValue({
      increase: jest.fn(),
      decrease: jest.fn(),
    });

    render(
      <UpdateQuantity
        bagId={bagId}
        bagQuantity={bagQuantity}
        inventoryQuantity={0} // Less than 1
      />
    );

    const plusIcon = screen.getByTestId("increase-icon");
    expect(plusIcon).toHaveClass("disabled");
  });
});

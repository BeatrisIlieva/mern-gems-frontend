import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Remove } from "./Remove";

import { useBagContext } from "../../../../../contexts/BagContext";

jest.mock("../../../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

describe("Remove Component", () => {
  const bagId = "test-bag-id";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Button with correct props", () => {
    useBagContext.mockReturnValue({
      remove: jest.fn(),
    });

    render(<Remove bagId={bagId} />);

    const button = screen.getByRole("button", { name: /Remove/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Remove");
  });

  test("calls remove function with correct bagId when clicked", () => {
    const mockRemove = jest.fn();

    useBagContext.mockReturnValue({
      remove: mockRemove,
    });

    render(<Remove bagId={bagId} />);

    const button = screen.getByRole("button", { name: /Remove/i });
    fireEvent.click(button);

    expect(mockRemove).toHaveBeenCalledWith(bagId);
    expect(mockRemove).toHaveBeenCalledTimes(1);
  });
});

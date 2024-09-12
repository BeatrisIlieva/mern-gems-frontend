import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useNavigate } from "react-router-dom";

import { NonEmptyMiniBag } from "./NonEmptyMiniBag";
import { useBagContext } from "../../../../../contexts/BagContext";

jest.mock("../../../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../../../common/BagHeader/BagHeader", () => ({
  BagHeader: () => <div>BagHeader</div>,
}));

jest.mock("../../../../common/BagList/BagList", () => ({
  BagList: () => <div>BagList</div>,
}));

jest.mock("../../../../reusable/Button/Button", () => ({
  Button: ({ title, callBackFunction }) => (
    <button onClick={callBackFunction}>{title}</button>
  ),
}));

jest.mock("../../../../reusable/DualTitleSection/DualTitleSection", () => ({
  DualTitleSection: ({ firstTitle, secondTitle }) => (
    <div>
      <span>{firstTitle}</span>
      <span>{secondTitle}</span>
    </div>
  ),
}));

describe("NonEmptyMiniBag Component", () => {
  const mockNavigate = jest.fn();
  const mockPopupCloseHandler = jest.fn();
  const mockTotalPrice = 123.45;

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigate.mockReturnValue(mockNavigate);
    useBagContext.mockReturnValue({ totalPrice: mockTotalPrice });
  });

  test("renders all components correctly", () => {
    render(<NonEmptyMiniBag popupCloseHandler={mockPopupCloseHandler} />);

    expect(screen.getByText("BagHeader")).toBeInTheDocument();
    expect(screen.getByText("BagList")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /View Bag/i })
    ).toBeInTheDocument();
  });

  test("displays total price from context correctly", () => {
    render(<NonEmptyMiniBag popupCloseHandler={mockPopupCloseHandler} />);

    expect(screen.getByText(`Continue Checkout $ ${mockTotalPrice}`)).toBeInTheDocument();
  });

  test("clickHandler calls popupCloseHandler and navigate", async () => {
    render(<NonEmptyMiniBag popupCloseHandler={mockPopupCloseHandler} />);

    fireEvent.click(screen.getByRole("button", { name: /View Bag/i }));

    await waitFor(() => {
      expect(mockPopupCloseHandler).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/users/shopping-bag");
    });
  });
});

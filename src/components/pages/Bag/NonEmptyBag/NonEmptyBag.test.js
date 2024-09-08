import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { NonEmptyBag } from "./NonEmptyBag";

jest.mock("./OrderSummaryContent/OrderSummaryContent", () => ({
  OrderSummaryContent: () => <div>OrderSummaryContent</div>,
}));

jest.mock("./BagContent/BagContent", () => ({
  BagContent: () => <div>BagContent</div>,
}));

describe("NonEmptyBag Component", () => {
  test("renders BagContent and OrderSummaryContent", () => {
    render(<NonEmptyBag />);

    expect(screen.getByText("BagContent")).toBeInTheDocument();

    expect(screen.getByText("OrderSummaryContent")).toBeInTheDocument();
  });
});

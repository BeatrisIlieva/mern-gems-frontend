import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { NonEmptyBag } from "./NonEmptyBag";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("./OrderSummaryContent/OrderSummaryContent", () => ({
  OrderSummaryContent: () => <div>OrderSummaryContent</div>,
}));

jest.mock("./BagContent/BagContent", () => ({
  BagContent: () => <div>BagContent</div>,
}));

describe("NonEmptyBag Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders BagContent and OrderSummaryContent", () => {
    render(<NonEmptyBag />);

    expect(screen.getByText("BagContent")).toBeInTheDocument();

    expect(screen.getByText("OrderSummaryContent")).toBeInTheDocument();
  });
});

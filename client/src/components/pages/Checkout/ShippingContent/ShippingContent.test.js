import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ShippingContent } from "./ShippingContent";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../reusable/ChildWrapper/ChildWrapper", () => ({
  ChildWrapper: ({ children }) => <div>{children}</div>,
}));

jest.mock("../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title }) => <h1>{title}</h1>,
}));

jest.mock("../../../common/ShippingDetailsForm/ShippingDetailsForm", () => ({
  ShippingDetailsForm: () => <form>Shipping Details Form</form>,
}));

describe("ShippingContent Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders LargeTitle and ShippingDetailsForm correctly", () => {
    render(<ShippingContent />);

    expect(screen.getByText("Shipping Address")).toBeInTheDocument();

    expect(screen.getByText("Shipping Details Form")).toBeInTheDocument();
  });
});

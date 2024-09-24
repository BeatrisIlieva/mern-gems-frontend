import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import { CardDetailsContent } from "./CardDetailsContent";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../reusable/ChildWrapper/ChildWrapper", () => ({
  ChildWrapper: ({ children }) => <div>{children}</div>,
}));

jest.mock("../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title, textAlign }) => <h1 style={{ textAlign }}>{title}</h1>,
}));

jest.mock("./ShippingInformation/ShippingInformation", () => ({
  ShippingInformation: ({ toggleDisplayShippingDetailsPopup }) => (
    <button onClick={toggleDisplayShippingDetailsPopup}>Toggle Popup</button>
  ),
}));

jest.mock("../../../common/CardDetailsForm/CardDetailsForm", () => ({
  CardDetailsForm: () => <div>CardDetailsForm</div>,
}));

jest.mock("../../../common/ShippingDetailsForm/ShippingDetailsForm", () => ({
  ShippingDetailsForm: ({ popupCloseHandler }) => (
    <form>
      <button type="button" onClick={popupCloseHandler}>
        Close Form
      </button>
    </form>
  ),
}));

jest.mock("../../../reusable/Popup/Popup", () => ({
  Popup: ({ toggleDisplayPopup, children }) => (
    <div data-testid="popup">
      <button onClick={toggleDisplayPopup}>Close</button>
      {children}
    </div>
  ),
}));

describe("CardDetailsContent Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("does not render Popup initially", () => {
    render(
      <MemoryRouter initialEntries={["/payment"]}>
        <CardDetailsContent />
      </MemoryRouter>
    );

    expect(screen.queryByTestId("popup")).not.toBeInTheDocument();
  });

  test("renders correct content for /payment route", () => {
    render(
      <MemoryRouter initialEntries={["/payment"]}>
        <CardDetailsContent />
      </MemoryRouter>
    );

    expect(screen.getByText("Payment")).toBeInTheDocument();
    expect(screen.getByText("CardDetailsForm")).toBeInTheDocument();
  });
});

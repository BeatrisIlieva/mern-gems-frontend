import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ShippingDetails } from "./ShippingDetails";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../reusable/SectionContainer/SectionContainer", () => ({
  SectionContainer: ({ sectionTitle, callBackFunction, icon, buttonTitle }) => (
    <div>
      <h1>{sectionTitle}</h1>
      <button onClick={callBackFunction} aria-label="Add new address">
        <i className={icon.iconName} /> {buttonTitle}
      </button>
    </div>
  ),
}));

jest.mock("../../../reusable/Popup/Popup", () => ({
  Popup: ({ movePopup, toggleDisplayPopup, modalVariant, children }) => (
    <div data-testid="popup" className={modalVariant}>
      <button onClick={toggleDisplayPopup}>Close</button>
      {children}
    </div>
  ),
}));

jest.mock("../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title, textAlign }) => <h2 style={{ textAlign }}>{title}</h2>,
}));

jest.mock("../../../common/ShippingDetailsForm/ShippingDetailsForm", () => ({
  ShippingDetailsForm: ({ popupCloseHandler }) => (
    <form>
      <button type="button" onClick={popupCloseHandler}>
        Form Button
      </button>
    </form>
  ),
}));

describe("ShippingDetails Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("does not render Popup initially", () => {
    render(<ShippingDetails />);

    expect(screen.queryByTestId("popup")).not.toBeInTheDocument();
  });
});

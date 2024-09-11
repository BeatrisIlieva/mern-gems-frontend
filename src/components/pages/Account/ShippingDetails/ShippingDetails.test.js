import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ShippingDetails } from "./ShippingDetails";

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
  Popup: ({ toggleDisplayPopup, modalVariant, children }) => (
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
  test("does not render Popup initially", () => {
    render(<ShippingDetails />);

    expect(screen.queryByTestId("popup")).not.toBeInTheDocument();
  });

  test("renders Popup when button is clicked", () => {
    render(<ShippingDetails />);

    fireEvent.click(screen.getByLabelText("Add new address"));

    expect(screen.getByTestId("popup")).toBeInTheDocument();
    expect(screen.getByText("Form Button")).toBeInTheDocument();
  });

  test("closes Popup when close button is clicked", () => {
    render(<ShippingDetails />);

    fireEvent.click(screen.getByLabelText("Add new address"));

    fireEvent.click(screen.getByText("Close"));

    expect(screen.queryByTestId("popup")).not.toBeInTheDocument();
  });
});

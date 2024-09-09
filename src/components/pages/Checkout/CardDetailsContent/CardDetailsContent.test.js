import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import { CardDetailsContent } from "./CardDetailsContent";

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
  Popup: ({ popupCloseHandler, modalVariant, children }) => (
    <div data-testid="popup" className={modalVariant}>
      <button onClick={popupCloseHandler}>Close</button>
      {children}
    </div>
  ),
}));

describe("CardDetailsContent Component", () => {
  test("does not render Popup initially", () => {
    render(
      <MemoryRouter initialEntries={["/payment"]}>
        <CardDetailsContent />
      </MemoryRouter>
    );

    expect(screen.queryByTestId("popup")).not.toBeInTheDocument();
  });

  test("renders Popup when button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/payment"]}>
        <CardDetailsContent />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Toggle Popup"));

    expect(screen.getByTestId("popup")).toBeInTheDocument();
    expect(screen.getByText("Edit Shipping Address")).toBeInTheDocument();
    expect(screen.getByText("Close Form")).toBeInTheDocument();
  });

  test("closes Popup when close button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/payment"]}>
        <CardDetailsContent />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Toggle Popup"));

    fireEvent.click(screen.getByText("Close"));

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

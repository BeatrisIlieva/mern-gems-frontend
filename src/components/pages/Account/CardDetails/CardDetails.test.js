import { render, screen, fireEvent } from "@testing-library/react";

import { CardDetails } from "./CardDetails";

jest.mock("../reusable/SectionContainer/SectionContainer", () => ({
  SectionContainer: ({ sectionTitle, callBackFunction, icon, buttonTitle }) => (
    <div>
      <h2>{sectionTitle}</h2>
      <button onClick={callBackFunction}>{buttonTitle}</button>
    </div>
  ),
}));

jest.mock("../../../reusable/Popup/Popup", () => ({
  Popup: ({ popupCloseHandler, modalVariant, children }) => (
    <div data-testid="popup">
      <button onClick={popupCloseHandler}>Close Popup</button>
      <div className={`modal-${modalVariant}`}>{children}</div>
    </div>
  ),
}));

jest.mock("../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title, textAlign }) => <h1 style={{ textAlign }}>{title}</h1>,
}));

jest.mock("../../../common/CardDetailsForm/CardDetailsForm", () => ({
  CardDetailsForm: ({ popupCloseHandler }) => (
    <form>
      <button onClick={popupCloseHandler}>Submit</button>
    </form>
  ),
}));

describe("CardDetails Component", () => {
  test("renders SectionContainer with correct props", () => {
    render(<CardDetails />);

    expect(screen.getByText("Saved Credit Card")).toBeInTheDocument();
    expect(screen.getByText("Add a New Credit Card")).toBeInTheDocument();
  });

  test("toggles Popup visibility on button click", () => {
    render(<CardDetails />);

    expect(screen.queryByTestId("popup")).toBeNull();

    fireEvent.click(screen.getByText("Add a New Credit Card"));
    expect(screen.getByTestId("popup")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close Popup"));
    expect(screen.queryByTestId("popup")).toBeNull();
  });
});

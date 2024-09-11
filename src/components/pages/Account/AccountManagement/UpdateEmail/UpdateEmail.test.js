import { render, screen, fireEvent } from "@testing-library/react";

import { UpdateEmail } from "./UpdateEmail";

jest.mock("../../../../reusable/Button/Button", () => ({
  Button: ({ title, callBackFunction, variant }) => (
    <button onClick={callBackFunction} className={variant}>
      {title}
    </button>
  ),
}));

jest.mock("../../../../reusable/Popup/Popup", () => ({
  Popup: ({ toggleDisplayPopup, modalVariant, children }) => (
    <div>
      <div>Popup - {modalVariant}</div>
      <button onClick={toggleDisplayPopup}>Close Popup</button>
      {children}
    </div>
  ),
}));

jest.mock("../../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title, textAlign }) => <h1 style={{ textAlign }}>{title}</h1>,
}));

jest.mock("./UpdateEmailForm/UpdateEmailForm", () => ({
  UpdateEmailForm: ({ popupCloseHandler }) => (
    <form>
      <input type="email" placeholder="New Email" />
      <button onClick={popupCloseHandler}>Submit</button>
    </form>
  ),
}));

describe("UpdateEmail Component", () => {
  test("renders the Update Email Address button", () => {
    render(<UpdateEmail />);

    expect(screen.getByText("Update Email Address")).toBeInTheDocument();
  });

  test("toggles the Popup visibility on button click", () => {
    render(<UpdateEmail />);

    expect(screen.queryByText("Popup - small")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Update Email Address"));

    expect(screen.getByText("Popup - small")).toBeInTheDocument();
    expect(screen.getByText("Update Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("New Email")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close Popup"));

    expect(screen.queryByText("Popup - small")).not.toBeInTheDocument();
  });

  test("displays correct content in the Popup", () => {
    render(<UpdateEmail />);

    fireEvent.click(screen.getByText("Update Email Address"));

    expect(screen.getByText("Update Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("New Email")).toBeInTheDocument();
  });
});

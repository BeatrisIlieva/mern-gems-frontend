import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { OrderHistory } from "./OrderHistory";

jest.mock("./EmptyOrderHistory/EmptyOrderHistory", () => ({
  EmptyOrderHistory: ({ popupCloseHandler }) => (
    <div>
      EmptyOrderHistory
      <button onClick={popupCloseHandler}>Close</button>
    </div>
  ),
}));

jest.mock("./NonEmptyOrderHistory/NonEmptyOrderHistory", () => ({
  NonEmptyOrderHistory: ({ orderItems }) => (
    <div>
      NonEmptyOrderHistory
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  ),
}));

jest.mock("../reusable/SectionContainer/SectionContainer", () => ({
  SectionContainer: ({ sectionTitle, callBackFunction, buttonTitle }) => (
    <div>
      <h1>{sectionTitle}</h1>
      <button onClick={callBackFunction}>{buttonTitle}</button>
    </div>
  ),
}));

jest.mock("../../../reusable/Popup/Popup", () => ({
  Popup: ({ children, popupCloseHandler }) => (
    <div>
      <button onClick={popupCloseHandler}>Close Popup</button>
      {children}
    </div>
  ),
}));

jest.mock("../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: () => ({ userId: "test-user-id" }),
}));

jest.mock("../../../../hooks/useService", () => ({
  useService: () => ({
    getAll: jest.fn(() => Promise.resolve([])),
  }),
}));

describe("OrderHistory Component", () => {
  test("renders SectionContainer component", () => {
    render(<OrderHistory />);

    expect(screen.getByText("Order History")).toBeInTheDocument();
    expect(screen.getByText("View Order History")).toBeInTheDocument();
  });

  test("displays Popup with EmptyOrderHistory when orderItems is empty and toggleDisplayPopup is called", async () => {
    render(<OrderHistory />);

    fireEvent.click(screen.getByText("View Order History"));

    await waitFor(() => {
      expect(screen.getByText("EmptyOrderHistory")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Close Popup"));
    expect(screen.queryByText("EmptyOrderHistory")).not.toBeInTheDocument();
  });

  test("handles toggleDisplayPopup correctly", async () => {
    render(<OrderHistory />);

    fireEvent.click(screen.getByText("View Order History"));

    await waitFor(() => {
      expect(screen.getByText("EmptyOrderHistory")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Close Popup"));
    expect(screen.queryByText("EmptyOrderHistory")).not.toBeInTheDocument();
  });
});

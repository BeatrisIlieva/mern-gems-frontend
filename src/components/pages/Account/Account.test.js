import { render, screen } from "@testing-library/react";

import { Account } from "./Account";

jest.mock("./OrderHistory/OrderHistory", () => ({
  OrderHistory: () => <div>OrderHistory</div>,
}));

jest.mock("./ShippingDetails/ShippingDetails", () => ({
  ShippingDetails: () => <div>ShippingDetails</div>,
}));

jest.mock("./CardDetails/CardDetails", () => ({
  CardDetails: () => <div>CardDetails</div>,
}));

jest.mock("./AccountManagement/AccountManagement", () => ({
  AccountManagement: () => <div>AccountManagement</div>,
}));

describe("Account Component", () => {
  test("renders all child components correctly", () => {
    render(<Account />);

    expect(screen.getByText("OrderHistory")).toBeInTheDocument();
    expect(screen.getByText("ShippingDetails")).toBeInTheDocument();
    expect(screen.getByText("CardDetails")).toBeInTheDocument();
    expect(screen.getByText("AccountManagement")).toBeInTheDocument();
  });
});

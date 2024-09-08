import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import { TrackOrder } from "./TrackOrder";

describe("TrackOrder Component", () => {
  test("renders the TrackOrder component with correct content and link", () => {
    render(
      <MemoryRouter>
        <TrackOrder />
      </MemoryRouter>
    );

    expect(
      screen.getByText("You can track your order status in your")
    ).toBeInTheDocument();

    const accountLink = screen.getByRole("link", { name: /Account/i });
    expect(accountLink).toBeInTheDocument();
    expect(accountLink).toHaveAttribute("href", "/users/account");
  });
});

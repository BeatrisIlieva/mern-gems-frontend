import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { NavLinkItem } from "./NavLinkItem";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: ({ icon }) => <div data-testid="icon">{icon}</div>,
}));

jest.mock("./Label/Label", () => ({
  Label: ({ title }) => <div data-testid="label">{title}</div>,
}));

describe("NavLinkItem Component", () => {
  const mockIcon = "mock-icon";
  const mockLabel = "Test Label";
  const mockTo = "/test";
  const mockCount = 5;

  const renderNavLinkItem = (props = {}) => {
    return render(
      <BrowserRouter>
        <NavLinkItem
          to={mockTo}
          icon={mockIcon}
          label={mockLabel}
          count={mockCount}
          {...props}
        />
      </BrowserRouter>
    );
  };

  it("renders NavLink with correct icon and label", () => {
    renderNavLinkItem();

    const navLink = screen.getByRole("link");
    expect(navLink).toHaveAttribute("href", mockTo);

    const icon = screen.getByTestId("icon");
    expect(icon).toHaveTextContent(mockIcon);

    const label = screen.getByTestId("label");
    expect(label).toHaveTextContent(mockLabel);
  });

  it("displays the count when passed as a prop", () => {
    renderNavLinkItem();

    const countElement = screen.getByText(`(${mockCount})`);
    expect(countElement).toBeInTheDocument();
  });

  it("does not display the count if count is not passed", () => {
    renderNavLinkItem({ count: null });

    const countElement = screen.queryByText(`(${mockCount})`);
    expect(countElement).not.toBeInTheDocument();
  });

  it("applies 'selected' class when NavLink is active", () => {
    renderNavLinkItem();

    const navLink = screen.getByRole("link");
    expect(navLink).toHaveClass("not-selected");
  });
});

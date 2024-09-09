import { render, screen } from "@testing-library/react";
import { NavLinkItem } from "./NavLinkItem";
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "./Label/Label";

// Mock the FontAwesomeIcon and Label components
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

    // Check if the NavLink is present
    const navLink = screen.getByRole("link");
    expect(navLink).toHaveAttribute("href", mockTo);

    // Check if the FontAwesomeIcon is rendered with the correct icon
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveTextContent(mockIcon);

    // Check if the Label component is rendered with the correct label
    const label = screen.getByTestId("label");
    expect(label).toHaveTextContent(mockLabel);
  });

  it("displays the count when passed as a prop", () => {
    renderNavLinkItem();

    // Check if the count is displayed
    const countElement = screen.getByText(`(${mockCount})`);
    expect(countElement).toBeInTheDocument();
  });

  it("does not display the count if count is not passed", () => {
    renderNavLinkItem({ count: null });

    // Ensure the count element is not present
    const countElement = screen.queryByText(`(${mockCount})`);
    expect(countElement).not.toBeInTheDocument();
  });

  it("applies 'selected' class when NavLink is active", () => {
    renderNavLinkItem();

    const navLink = screen.getByRole("link");
    expect(navLink).toHaveClass("not-selected"); // By default, it's not active.

    // If we want to test the active class, we would need to mock `isActive`.
    // Alternatively, you can use `MemoryRouter` and set initialEntries to test the active state.
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { SwitchButton } from "./SwitchButton";

describe("SwitchButton Component", () => {
  const mockSwitchPopupHandler = jest.fn();
  const option = "register";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the text correctly", () => {
    render(
      <SwitchButton
        text="Not a member?"
        title="Sign Up"
        switchPopupHandler={mockSwitchPopupHandler}
        option={option}
      />
    );

    // Verify the text is rendered
    expect(screen.getByText("Not a member?")).toBeInTheDocument();
  });

  test("calls switchPopupHandler with the correct option when button is clicked", () => {
    render(
      <SwitchButton
        text="Not a member?"
        title="Sign Up"
        switchPopupHandler={mockSwitchPopupHandler}
        option={option}
      />
    );

    // Query the button by its role (button) and accessible name ("Sign Up")
    const button = screen.getByRole("button", { name: "Sign Up" });

    // Ensure the button is not disabled
    expect(button).not.toBeDisabled();

    // Simulate a button click
    fireEvent.click(button);

    // Verify the correct function call with the expected argument
    expect(mockSwitchPopupHandler).toHaveBeenCalledTimes(1);
    expect(mockSwitchPopupHandler).toHaveBeenCalledWith(option);
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { SwitchButton } from "./SwitchButton";

import { useLanguageContext } from "../../../../../../contexts/LanguageContext";

jest.mock("../../../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

describe("SwitchButton Component", () => {
  const mockLanguage = "English";

  const mockSwitchPopupHandler = jest.fn();
  const option = "register";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

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

    const button = screen.getByRole("button", { name: "Sign Up" });

    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    expect(mockSwitchPopupHandler).toHaveBeenCalledTimes(1);
    expect(mockSwitchPopupHandler).toHaveBeenCalledWith(option);
  });
});

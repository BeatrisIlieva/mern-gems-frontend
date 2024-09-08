import { render, screen } from "@testing-library/react";

import { SwitchButton } from "./SwitchButton";

jest.mock("../../../../../reusable/Button/Button", () => ({
  Button: jest.fn(({ callBackFunction, title, variant }) => (
    <button
      onClick={callBackFunction}
      data-title={title}
      data-variant={variant}
    >
      {title}
    </button>
  )),
}));

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

    expect(screen.getByText("Not a member?")).toBeInTheDocument();
  });
});

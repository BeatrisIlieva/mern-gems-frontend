import { render, screen, fireEvent } from "@testing-library/react";
import { Register } from "./Register";

jest.mock("../../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title, textAlign }) => <h1 className={textAlign}>{title}</h1>,
}));

jest.mock("../reusable/SwitchButton/SwitchButton", () => ({
  SwitchButton: ({ text, title, switchPopupHandler, option }) => (
    <button onClick={() => switchPopupHandler(option)}>
      {text} {title}
    </button>
  ),
}));

jest.mock("./RegisterForm/RegisterForm", () => ({
  RegisterForm: ({ closeHandler }) => (
    <form>
      <button onClick={() => closeHandler(true)}>Submit</button>
    </form>
  ),
}));

describe("Register Component", () => {
  const mockUpdateIsTransitioningHandler = jest.fn();
  const mockCloseHandler = jest.fn();
  const mockSwitchOptions = { Login: "Login" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders LargeTitle with correct text and alignment", () => {
    render(
      <Register
        updateIsTransitioningHandler={mockUpdateIsTransitioningHandler}
        closeHandler={mockCloseHandler}
        switchOptions={mockSwitchOptions}
      />
    );

    expect(screen.getByText("Become A Member")).toBeInTheDocument();
    expect(screen.getByText("Become A Member")).toHaveClass("align-center");
  });

  test("renders RegisterForm with closeHandler prop", () => {
    render(
      <Register
        updateIsTransitioningHandler={mockUpdateIsTransitioningHandler}
        closeHandler={mockCloseHandler}
        switchOptions={mockSwitchOptions}
      />
    );

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    expect(mockCloseHandler).toHaveBeenCalledWith(true);
  });

  test("renders SwitchButton with correct props and triggers transition", () => {
    render(
      <Register
        updateIsTransitioningHandler={mockUpdateIsTransitioningHandler}
        closeHandler={mockCloseHandler}
        switchOptions={mockSwitchOptions}
      />
    );

    const switchButton = screen.getByText("Already a member? Sign In");
    fireEvent.click(switchButton);

    expect(mockUpdateIsTransitioningHandler).toHaveBeenCalledWith(
      mockSwitchOptions.Login
    );
  });
});

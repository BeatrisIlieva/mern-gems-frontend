import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./Login";

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

jest.mock("./LoginForm/LoginForm", () => ({
  LoginForm: ({ closeHandler }) => (
    <form>
      <button onClick={() => closeHandler(true)}>Submit</button>
    </form>
  ),
}));

describe("Login Component", () => {
  const mockUpdateIsTransitioningHandler = jest.fn();
  const mockCloseHandler = jest.fn();
  const mockSwitchOptions = { Register: "Register" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders LargeTitle with correct text and alignment", () => {
    render(
      <Login
        updateIsTransitioningHandler={mockUpdateIsTransitioningHandler}
        closeHandler={mockCloseHandler}
        switchOptions={mockSwitchOptions}
      />
    );

    expect(screen.getByText("Sign In to Shop")).toBeInTheDocument();
    expect(screen.getByText("Sign In to Shop")).toHaveClass("align-center");
  });

  test("renders LoginForm with closeHandler prop", () => {
    render(
      <Login
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
      <Login
        updateIsTransitioningHandler={mockUpdateIsTransitioningHandler}
        closeHandler={mockCloseHandler}
        switchOptions={mockSwitchOptions}
      />
    );

    const switchButton = screen.getByText("Not a member? Sign Up");
    fireEvent.click(switchButton);

    expect(mockUpdateIsTransitioningHandler).toHaveBeenCalledWith(
      mockSwitchOptions.Register
    );
  });
});

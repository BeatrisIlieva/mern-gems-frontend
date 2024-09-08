import { render, screen } from "@testing-library/react";

import { Authentication } from "./Authentication";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

jest.mock("./Login/Login", () => ({
  Login: ({ updateIsTransitioningHandler, switchOptions, closeHandler }) => (
    <div>
      <button
        onClick={() => updateIsTransitioningHandler(switchOptions.Register)}
      >
        Switch to Register
      </button>
      <button onClick={() => closeHandler(true)}>Close Login</button>
    </div>
  ),
}));

jest.mock("./Register/Register", () => ({
  Register: ({ updateIsTransitioningHandler, switchOptions, closeHandler }) => (
    <div>
      <button onClick={() => updateIsTransitioningHandler(switchOptions.Login)}>
        Switch to Login
      </button>
      <button onClick={() => closeHandler(true)}>Close Register</button>
    </div>
  ),
}));

jest.mock("../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

describe("Authentication Component", () => {
  const mockUpdateAuthentication = jest.fn();

  beforeEach(() => {
    useAuthenticationContext.mockReturnValue({
      updateAuthentication: mockUpdateAuthentication,
    });
  });

  test("renders the Login component by default", () => {
    render(<Authentication />);

    const loginButton = screen.getByText("Switch to Register");
    expect(loginButton).toBeInTheDocument();
  });
});

import { render, screen, fireEvent, act } from "@testing-library/react";

import { Authentication } from "./Authentication";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

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
  const mockLanguage = "English";
  const mockUpdateAuthentication = jest.fn();

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    useAuthenticationContext.mockReturnValue({
      updateAuthentication: mockUpdateAuthentication,
    });
  });

  test("renders the Login component by default", () => {
    render(<Authentication />);

    const switchToRegisterButton = screen.getByText("Switch to Register");
    expect(switchToRegisterButton).toBeInTheDocument();
  });

  test("transitions from Login to Register and back with delay", async () => {
    render(<Authentication />);

    const switchToRegisterButton = screen.getByText("Switch to Register");
    expect(switchToRegisterButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(switchToRegisterButton);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    const switchToLoginButton = screen.getByText("Switch to Login");
    expect(switchToLoginButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(switchToLoginButton);
    });
  });

  test("handles closeHandler correctly and calls updateAuthentication", async () => {
    render(<Authentication />);

    const closeLoginButton = screen.getByText("Close Login");

    await act(async () => {
      fireEvent.click(closeLoginButton);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    expect(mockUpdateAuthentication).toHaveBeenCalledWith(true);
  });

  test("triggers closeHandler for Register and calls updateAuthentication", async () => {
    render(<Authentication />);

    const switchToRegisterButton = screen.getByText("Switch to Register");
    act(() => {
      fireEvent.click(switchToRegisterButton);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    const closeRegisterButton = screen.getByText("Close Register");
    await act(async () => {
      fireEvent.click(closeRegisterButton);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    expect(mockUpdateAuthentication).toHaveBeenCalledWith(true);
  });
});

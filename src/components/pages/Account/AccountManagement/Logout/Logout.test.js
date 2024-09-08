import { render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

import { Logout } from "./Logout";

import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../hooks/useService";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("../../../../../hooks/useService", () => ({
  useService: jest.fn(),
}));

jest.mock("../../../../../services/userLoginDetailsService", () => ({
  userLoginDetailsServiceFactory: jest.fn(() => ({
    logout: jest.fn(),
  })),
}));

jest.mock("../../../../reusable/Button/Button", () => ({
  Button: ({ title, callBackFunction, variant }) => (
    <button onClick={callBackFunction} className={variant}>
      {title}
    </button>
  ),
}));

describe("Logout Component", () => {
  let mockLogout;
  let mockClearToken;
  let mockNavigate;

  beforeEach(() => {
    mockLogout = jest.fn();
    mockClearToken = jest.fn();
    mockNavigate = jest.fn();

    useAuthenticationContext.mockReturnValue({
      userId: "123",
      clearToken: mockClearToken,
    });

    useService.mockReturnValue({
      logout: mockLogout,
    });

    useNavigate.mockReturnValue(mockNavigate);
  });

  test("renders the Logout button", () => {
    render(<Logout />);

    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});

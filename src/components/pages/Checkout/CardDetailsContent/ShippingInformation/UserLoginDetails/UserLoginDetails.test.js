import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { useAuthenticationContext } from "../../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../../hooks/useService";

import { UserLoginDetails } from "./UserLoginDetails";

jest.mock("../../../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("../../../../../../hooks/useService", () => ({
  useService: jest.fn(),
}));

jest.mock("../../../../../../services/userLoginDetailsService", () => ({
  userLoginDetailsServiceFactory: jest.fn(() => ({
    getOne: jest.fn(),
  })),
}));

describe("UserLoginDetails Component", () => {
  const mockUserId = "12345";
  const mockLoginDetails = {
    email: "john.doe@example.com",
  };

  beforeEach(() => {
    useAuthenticationContext.mockReturnValue({ userId: mockUserId });

    useService.mockReturnValue({
      getOne: jest.fn(() => Promise.resolve(mockLoginDetails)),
    });
  });

  test("renders user login details correctly", async () => {
    render(<UserLoginDetails />);

    await waitFor(() => {
      expect(screen.getByText("Email Address")).toBeInTheDocument();
      expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    });
  });

  test("handles fetch error gracefully", async () => {
    const errorMessage = "Failed to fetch";
    useService.mockReturnValue({
      getOne: jest.fn(() => Promise.reject(new Error(errorMessage))),
    });

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<UserLoginDetails />);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(errorMessage);
    });

    consoleSpy.mockRestore();
  });
});

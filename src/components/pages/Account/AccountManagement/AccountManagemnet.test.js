import { render, screen, fireEvent } from "@testing-library/react";

import { AccountManagement } from "./AccountManagement";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useService } from "../../../../hooks/useService";

jest.mock("../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("../../../../hooks/useService", () => ({
  useService: jest.fn(),
}));

jest.mock("../../../../services/userLoginDetailsService", () => ({
  userLoginDetailsServiceFactory: jest.fn(),
}));

jest.mock("./UpdateEmail/UpdateEmail", () => ({
  UpdateEmail: ({ updateEmailClickHandler, displayUpdateEmail }) => (
    <div>
      <button onClick={updateEmailClickHandler}>Update Email</button>
      {displayUpdateEmail && <div>Update Email Form</div>}
    </div>
  ),
}));

jest.mock("./UpdatePassword/UpdatePassword", () => ({
  UpdatePassword: ({ updatePasswordClickHandler, displayUpdatePassword }) => (
    <div>
      <button onClick={updatePasswordClickHandler}>Update Password</button>
      {displayUpdatePassword && <div>Update Password Form</div>}
    </div>
  ),
}));

jest.mock("./Logout/Logout", () => ({
  Logout: () => <button>Logout</button>,
}));

describe("AccountManagement Component", () => {
  const mockUserId = "user123";
  const mockUserEmail = "user@example.com";

  beforeEach(() => {
    useAuthenticationContext.mockReturnValue({ userId: mockUserId });
    useService.mockReturnValue({
      getOne: jest.fn().mockResolvedValue({ email: mockUserEmail }),
    });
  });

  test("renders with correct initial state and user email", async () => {
    render(<AccountManagement />);

    expect(await screen.findByText(mockUserEmail)).toBeInTheDocument();

    expect(screen.getByText("Update Email")).toBeInTheDocument();
    expect(screen.getByText("Update Password")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();

    expect(screen.queryByText("Update Email Form")).not.toBeInTheDocument();
    expect(screen.queryByText("Update Password Form")).not.toBeInTheDocument();
  });

  test("displays UpdateEmail form on click", async () => {
    render(<AccountManagement />);

    fireEvent.click(screen.getByText("Update Email"));

    expect(await screen.findByText("Update Email Form")).toBeInTheDocument();

    expect(screen.queryByText("Update Password Form")).not.toBeInTheDocument();
  });

  test("displays UpdatePassword form on click", async () => {
    render(<AccountManagement />);

    fireEvent.click(screen.getByText("Update Password"));

    expect(await screen.findByText("Update Password Form")).toBeInTheDocument();

    expect(screen.queryByText("Update Email Form")).not.toBeInTheDocument();
  });
});

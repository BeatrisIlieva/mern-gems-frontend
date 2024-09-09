import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import { UpdatePasswordForm } from "./UpdatePasswordForm";

import { AuthenticationContext } from "../../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../../hooks/useService";

import { FORM_KEYS, INITIAL_FORM_VALUES } from "./constants/initialFormValues";

import { ERROR_MESSAGES } from "../../../../../../mappers/errorMessages";

jest.mock("../../../../../../hooks/useService");

const userId = "test-id";

describe("UpdatePasswordForm Component", () => {
  const mockToken = "testToken";

  const mockUserId = userId;

  const mockUserLoginDetailsService = {
    getOne: jest.fn(),
    updatePassword: jest.fn(),
  };

  beforeEach(() => {
    useService.mockReturnValue(mockUserLoginDetailsService);

    mockUserLoginDetailsService.getOne.mockClear();
    mockUserLoginDetailsService.updatePassword.mockClear();
  });

  test("Submits the form with valid values; Expect update function to be called; Expect success message", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    mockUserLoginDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <AuthenticationContext.Provider value={mockUserInformation}>
          <UpdatePasswordForm />
        </AuthenticationContext.Provider>
      </MemoryRouter>
    );

    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: { value: INITIAL_FORM_VALUES[inputKey].validTestData },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.validTestData;
    });

    const { password, newPassword } = submitData;

    await waitFor(() => {
      expect(mockUserLoginDetailsService.updatePassword).toHaveBeenCalledWith(
        userId,
        {
          password,
          newPassword,
        }
      );
    });

    Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
      const errorMessageContainer = screen.queryByTestId(`${key}-error`);
      expect(errorMessageContainer).not.toBeInTheDocument();
    });
  });

  test("Submits the form with invalid values; Expect update function not to be called; Expect errors", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    mockUserLoginDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <AuthenticationContext.Provider value={mockUserInformation}>
          <UpdatePasswordForm />
        </AuthenticationContext.Provider>
      </MemoryRouter>
    );

    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: { value: INITIAL_FORM_VALUES[inputKey].invalidTestData },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.invalidTestData;
    });

    await waitFor(() => {
      expect(mockUserLoginDetailsService.updatePassword).not.toHaveBeenCalled();
    });

    Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
      const errorMessageContainer = screen.getByTestId(`${key}-error`);
      expect(errorMessageContainer).toHaveTextContent(ERROR_MESSAGES[key]);
    });
  });

  test("Submits the form with empty values; Expect update function not to be called; Expect errors", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    mockUserLoginDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <AuthenticationContext.Provider value={mockUserInformation}>
          <UpdatePasswordForm />
        </AuthenticationContext.Provider>
      </MemoryRouter>
    );

    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: { value: INITIAL_FORM_VALUES[inputKey].emptyTestData },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.emptyTestData;
    });

    await waitFor(() => {
      expect(mockUserLoginDetailsService.updatePassword).not.toHaveBeenCalled();
    });

    Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
      const errorMessageContainer = screen.getByTestId(`${key}-error`);
      expect(errorMessageContainer).toHaveTextContent(ERROR_MESSAGES[key]);
    });
  });

  test("Submits the form with different newPassword and retypeNewPassword values; Expect update function not to be called; Expect errors", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    mockUserLoginDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <AuthenticationContext.Provider value={mockUserInformation}>
          <UpdatePasswordForm />
        </AuthenticationContext.Provider>
      </MemoryRouter>
    );

    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: {
          value: INITIAL_FORM_VALUES[inputKey].differentPasswordsTestData,
        },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.differentPasswordsTestData;
    });

    await waitFor(() => {
      expect(mockUserLoginDetailsService.updatePassword).not.toHaveBeenCalled();
    });

    const newPasswordErrorMessageContainer = screen.getByTestId(
      `${FORM_KEYS.NewPassword}-error`
    );

    expect(newPasswordErrorMessageContainer).toHaveTextContent(
      ERROR_MESSAGES.passwordMismatch
    );

    const retypeNewPasswordErrorMessageContainer = screen.getByTestId(
      `${FORM_KEYS.RetypeNewPassword}-error`
    );

    expect(retypeNewPasswordErrorMessageContainer).toHaveTextContent(
      ERROR_MESSAGES.passwordMismatch
    );
  });

  test("Submits the form with different newPassword and retypeNewPassword values; Expect update function not to be called; Expect errors", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    mockUserLoginDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <AuthenticationContext.Provider value={mockUserInformation}>
          <UpdatePasswordForm />
        </AuthenticationContext.Provider>
      </MemoryRouter>
    );

    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: {
          value: INITIAL_FORM_VALUES[inputKey].differentPasswordsTestData,
        },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.differentPasswordsTestData;
    });

    await waitFor(() => {
      expect(mockUserLoginDetailsService.updatePassword).not.toHaveBeenCalled();
    });

    const newPasswordErrorMessageContainer = screen.getByTestId(
      `${FORM_KEYS.NewPassword}-error`
    );

    expect(newPasswordErrorMessageContainer).toHaveTextContent(
      ERROR_MESSAGES.passwordMismatch
    );

    const retypeNewPasswordErrorMessageContainer = screen.getByTestId(
      `${FORM_KEYS.RetypeNewPassword}-error`
    );

    expect(retypeNewPasswordErrorMessageContainer).toHaveTextContent(
      ERROR_MESSAGES.passwordMismatch
    );
  });
});

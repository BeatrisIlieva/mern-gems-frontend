import { MemoryRouter } from "react-router-dom";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { RegisterForm } from "./RegisterForm";

import { AuthenticationContext } from "../../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../../hooks/useService";

import { ERROR_MESSAGES } from "../../../../../../mappers/errorMessages";
import { FORM_KEYS, INITIAL_FORM_VALUES } from "./constants/initialFormValues";

jest.mock("../../../../../../hooks/useService");

describe("RegisterForm Component", () => {
  const mockToken = "testToken";

  const mockUserLoginDetailsService = {
    register: jest.fn(),
  };

  beforeEach(() => {
    useService.mockReturnValue(mockUserLoginDetailsService);

    mockUserLoginDetailsService.register.mockClear();
  });

  test("Submits the form with valid values; Expect update function to be called", async () => {
    render(
      <MemoryRouter>
        <AuthenticationContext.Provider value={mockToken}>
          <RegisterForm />
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

    const { firstName, lastName, email, password } = submitData;

    await waitFor(() => {
      expect(mockUserLoginDetailsService.register).toHaveBeenCalledWith({
        firstName,
        lastName,
        email,
        password,
      });
    });

    Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
      const errorMessageContainer = screen.queryByTestId(`${key}-error`);
      expect(errorMessageContainer).not.toBeInTheDocument();
    });
  });

  test("Submits the form with invalid values; Expect update function not to be called", async () => {
    render(
      <MemoryRouter>
        <AuthenticationContext.Provider value={mockToken}>
          <RegisterForm />
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
      expect(mockUserLoginDetailsService.register).not.toHaveBeenCalled();
    });

    Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
      const errorMessageContainer = screen.getByTestId(`${key}-error`);
      expect(errorMessageContainer).toHaveTextContent(ERROR_MESSAGES[key]);
    });
  });

  //   test("Submits the form with empty values; Expect update function not to be called", async () => {
  //     render(
  //     //   <AuthContext.Provider value={mockAuthContextValue}>
  //         <RegisterForm />
  //     //   </AuthContext.Provider>
  //     );

  //     const inputs = {};

  //     Object.values(FORM_KEYS).forEach((value) => {
  //       inputs[value] = screen.getByTestId(`${value}-input`);
  //     });

  //     Object.entries(inputs).forEach(([inputKey, inputValue]) => {
  //       fireEvent.change(inputValue, {
  //         target: { value: INITIAL_FORM_VALUES[inputKey].emptyTestData },
  //       });
  //     });

  //     const submitButton = screen.getByTestId("submit");
  //     fireEvent.click(submitButton);

  //     const submitData = {};

  //     Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
  //       submitData[key] = value.emptyTestData;
  //     });

  //     await waitFor(() => {
  //       expect(mockOnRegisterSubmit).not.toHaveBeenCalled();
  //     });

  //     Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
  //       const errorMessageContainer = screen.getByTestId(`${key}-error`);
  //       expect(errorMessageContainer).toHaveTextContent(ERROR_MESSAGES[key]);
  //     });
  //   });
});

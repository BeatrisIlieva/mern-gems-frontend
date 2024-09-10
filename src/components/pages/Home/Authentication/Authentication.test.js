// import { render, screen, fireEvent } from "@testing-library/react";

// import { Authentication } from "./Authentication";

// import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

// jest.mock("./Login/Login", () => ({
//   Login: ({ updateIsTransitioningHandler, switchOptions, closeHandler }) => (
//     <div>
//       <button
//         onClick={() => updateIsTransitioningHandler("register")}
//       >
//         Switch to Register
//       </button>
//       <button onClick={() => closeHandler(true)}>Close Login</button>
//     </div>
//   ),
// }));

// jest.mock("./Register/Register", () => ({
//   Register: ({ updateIsTransitioningHandler, switchOptions, closeHandler }) => (
//     <div>
//       <button onClick={() => updateIsTransitioningHandler("login")}>
//         Switch to Login
//       </button>
//       <button onClick={() => closeHandler(true)}>Close Register</button>
//     </div>
//   ),
// }));

// jest.mock("../../../../contexts/AuthenticationContext", () => ({
//   useAuthenticationContext: jest.fn(),
// }));

// describe("Authentication Component", () => {
//   const mockUpdateAuthentication = jest.fn();

//   beforeEach(() => {
//     useAuthenticationContext.mockReturnValue({
//       updateAuthentication: mockUpdateAuthentication,
//     });
//   });

//   test("renders the Login component by default", () => {
//     render(<Authentication />);

//     const switchToRegisterButton = screen.getByText("Switch to Register");
//     expect(switchToRegisterButton).toBeInTheDocument();

//   //   fireEvent.click(switchToRegisterButton);

//   //   const switchToLoginButton = screen.getByText("Switch to Login");
//   //   expect(switchToLoginButton).toBeInTheDocument();
//   // });
// });

// })

import { render, screen, fireEvent, act } from "@testing-library/react";
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

    const switchToRegisterButton = screen.getByText("Switch to Register");
    expect(switchToRegisterButton).toBeInTheDocument();
  });

  // Test to handle transition from Login to Register and back
  test("transitions from Login to Register and back with delay", async () => {
    render(<Authentication />);

    // Start with the Login component
    const switchToRegisterButton = screen.getByText("Switch to Register");
    expect(switchToRegisterButton).toBeInTheDocument();

    // Simulate clicking the switch button to transition to the Register component
    act(() => {
      fireEvent.click(switchToRegisterButton);
    });

    // Use act to account for the 400ms delay in setTimeout
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    // Verify that the Register component is now rendered after transition
    const switchToLoginButton = screen.getByText("Switch to Login");
    expect(switchToLoginButton).toBeInTheDocument();

    // Simulate clicking the switch button to transition back to the Login component
    act(() => {
      fireEvent.click(switchToLoginButton);
    });
  });

  // Test to handle the close functionality with a delay
  test("handles closeHandler correctly and calls updateAuthentication", async () => {
    render(<Authentication />);

    const closeLoginButton = screen.getByText("Close Login");

    // Simulate closing the Login popup
    await act(async () => {
      fireEvent.click(closeLoginButton);
    });

    // Use act to account for the 400ms delay
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    // Assert that updateAuthentication was called after the delay
    expect(mockUpdateAuthentication).toHaveBeenCalledWith(true);
  });

  // Test closeHandler in Register component
  test("triggers closeHandler for Register and calls updateAuthentication", async () => {
    render(<Authentication />);

    // Switch to Register component
    const switchToRegisterButton = screen.getByText("Switch to Register");
    act(() => {
      fireEvent.click(switchToRegisterButton);
    });

    // Wait for transition to Register component
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    // Simulate closing the Register popup
    const closeRegisterButton = screen.getByText("Close Register");
    await act(async () => {
      fireEvent.click(closeRegisterButton);
    });

    // Use act to account for the 400ms delay
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    // Assert that updateAuthentication was called after closing the popup
    expect(mockUpdateAuthentication).toHaveBeenCalledWith(true);
  });
});

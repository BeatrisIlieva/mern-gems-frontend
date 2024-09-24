// import { render, screen, fireEvent } from "@testing-library/react";

// import { AccountManagement } from "./AccountManagement";

// import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

// import { useService } from "../../../../hooks/useService";

// import { useLanguageContext } from "../../../../contexts/LanguageContext";

// jest.mock("../../../../contexts/LanguageContext", () => ({
//   useLanguageContext: jest.fn(),
// }));

// jest.mock("../../../../contexts/AuthenticationContext", () => ({
//   useAuthenticationContext: jest.fn(),
// }));

// jest.mock("../../../../hooks/useService", () => ({
//   useService: jest.fn(),
// }));

// jest.mock("../../../../services/userLoginDetailsService", () => ({
//   userLoginDetailsServiceFactory: jest.fn(),
// }));

// jest.mock("./UpdateEmailForm/UpdateEmailForm", () => ({
//   UpdateEmail: ({ updateEmailClickHandler, displayUpdateEmail }) => (
//     <div>
//       <button onClick={updateEmailClickHandler}>Update Email</button>
//       {displayUpdateEmail && <div>Update Email Form</div>}
//     </div>
//   ),
// }));

// jest.mock("./UpdatePasswordForm/UpdatePasswordForm", () => ({
//   UpdatePassword: ({ updatePasswordClickHandler, displayUpdatePassword }) => (
//     <div>
//       <button onClick={updatePasswordClickHandler}>Update Password</button>
//       {displayUpdatePassword && <div>Update Password Form</div>}
//     </div>
//   ),
// }));

// jest.mock("./Logout/Logout", () => ({
//   Logout: () => <button>Logout</button>,
// }));

// describe("AccountManagement Component", () => {
//   const mockLanguage = "English";
//   const mockUserId = "user123";
//   const mockUserEmail = "user@example.com";

//   beforeEach(() => {
//     useLanguageContext.mockReturnValue({ language: mockLanguage });

//     useAuthenticationContext.mockReturnValue({ userId: mockUserId });
//     useService.mockReturnValue({
//       getOne: jest.fn().mockResolvedValue({ email: mockUserEmail }),
//     });
//   });

// });




// test("displays UpdatePassword form on click", async () => {
//   render(<AccountManagement />);

//   fireEvent.click(screen.getByText("Update Password"));

//   expect(await screen.findByText("Update Password Form")).toBeInTheDocument();

//   expect(screen.queryByText("Update Email Form")).not.toBeInTheDocument();
// });


import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AccountManagement } from "./AccountManagement";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";
import { useService } from "../../../../hooks/useService";
import { useLanguageContext } from "../../../../contexts/LanguageContext";

// Mocks
jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("../../../../hooks/useService", () => ({
  useService: jest.fn(),
}));

jest.mock("./UpdateEmailForm/UpdateEmailForm", () => ({
  UpdateEmailForm: ({ closeUpdateEmailClickHandler }) => (
    <div>
      <div>Update Email Form</div>
      <button onClick={closeUpdateEmailClickHandler}>Close Email Form</button>
    </div>
  ),
}));

jest.mock("./UpdatePasswordForm/UpdatePasswordForm", () => ({
  UpdatePasswordForm: ({ closeUpdatePasswordClickHandler }) => (
    <div>
      <div>Update Password Form</div>
      <button onClick={closeUpdatePasswordClickHandler}>Close Password Form</button>
    </div>
  ),
}));

jest.mock("./Logout/Logout", () => ({
  Logout: () => <button>Logout</button>,
}));

describe("AccountManagement Component", () => {
  const mockLanguage = "English";
  const mockUserId = "user123";
  const mockUserEmail = "user@example.com";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });
    useAuthenticationContext.mockReturnValue({ userId: mockUserId });
    useService.mockReturnValue({
      getOne: jest.fn().mockResolvedValue({ email: mockUserEmail }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the AccountManagement component correctly", async () => {
    render(<AccountManagement />);

    expect(await screen.findByText("Account Management")).toBeInTheDocument();
    expect(await screen.findByText(mockUserEmail)).toBeInTheDocument();
    expect(screen.getByText("Update Email")).toBeInTheDocument();
    expect(screen.getByText("Change Password")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test("displays the Update Email Form when the Update Email button is clicked", async () => {
    render(<AccountManagement />);

    fireEvent.click(screen.getByText("Update Email"));

    expect(await screen.findByText("Update Email Form")).toBeInTheDocument();
    expect(screen.queryByText("Update Password Form")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Close Email Form"));
    expect(screen.queryByText("Update Email Form")).not.toBeInTheDocument();
  });

  test("displays the Update Password Form when the Update Password button is clicked", async () => {
    render(<AccountManagement />);

    fireEvent.click(screen.getByText("Change Password"));

    expect(await screen.findByText("Update Password Form")).toBeInTheDocument();
    expect(screen.queryByText("Update Email Form")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Close Password Form"));
    expect(screen.queryByText("Update Password Form")).not.toBeInTheDocument();
  });

  test("fetches and displays user email correctly", async () => {
    render(<AccountManagement />);
    
    // Wait for the user email to be displayed after the service resolves
    expect(await screen.findByText(mockUserEmail)).toBeInTheDocument();
  });

});

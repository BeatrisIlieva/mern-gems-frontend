import { render, screen } from "@testing-library/react";

import { UpdatePassword } from "./UpdatePassword";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

jest.mock("../../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("./UpdatePasswordForm/UpdatePasswordForm", () => ({
  UpdatePasswordForm: ({ popupCloseHandler }) => (
    <form>
      <input type="password" placeholder="New Password" />
      <button onClick={popupCloseHandler}>Submit</button>
    </form>
  ),
}));

describe("UpdatePassword Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders the Change Password button", () => {
    render(<UpdatePassword />);

    expect(screen.getByText("Change Password")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";

import { UpdatePassword } from "./UpdatePassword";

jest.mock("./UpdatePasswordForm/UpdatePasswordForm", () => ({
  UpdatePasswordForm: ({ popupCloseHandler }) => (
    <form>
      <input type="password" placeholder="New Password" />
      <button onClick={popupCloseHandler}>Submit</button>
    </form>
  ),
}));

describe("UpdatePassword Component", () => {
  test("renders the Change Password button", () => {
    render(<UpdatePassword />);

    expect(screen.getByText("Change Password")).toBeInTheDocument();
  });
});

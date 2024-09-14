import { render, screen } from "@testing-library/react";

import { UpdateEmail } from "./UpdateEmail";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

jest.mock("../../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../../reusable/Button/Button", () => ({
  Button: ({ title, callBackFunction, variant }) => (
    <button onClick={callBackFunction} className={variant}>
      {title}
    </button>
  ),
}));

jest.mock("../../../../reusable/Popup/Popup", () => ({
  Popup: ({ toggleDisplayPopup, modalVariant, children }) => (
    <div>
      <div>Popup - {modalVariant}</div>
      <button onClick={toggleDisplayPopup}>Close Popup</button>
      {children}
    </div>
  ),
}));

jest.mock("../../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title, textAlign }) => <h1 style={{ textAlign }}>{title}</h1>,
}));

jest.mock("./UpdateEmailForm/UpdateEmailForm", () => ({
  UpdateEmailForm: ({ popupCloseHandler }) => (
    <form>
      <input type="email" placeholder="New Email" />
      <button onClick={popupCloseHandler}>Submit</button>
    </form>
  ),
}));

describe("UpdateEmail Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders the Update Email Address button", () => {
    render(<UpdateEmail />);

    expect(screen.getByText("Update Email")).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ShippingInformation } from "./ShippingInformation";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

jest.mock("../../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../../reusable/DualTitleSection/DualTitleSection", () => ({
  DualTitleSection: ({ firstTitle, secondTitle }) => (
    <div>
      <div>{firstTitle}</div>
      <div>{secondTitle}</div>
    </div>
  ),
}));

jest.mock("../../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title }) => <h1>{title}</h1>,
}));

jest.mock("../../../../reusable/Button/Button", () => ({
  Button: ({ title, callBackFunction }) => (
    <button onClick={callBackFunction}>{title}</button>
  ),
}));

jest.mock("./UserLoginDetails/UserLoginDetails", () => ({
  UserLoginDetails: () => <div>User Login Details</div>,
}));

jest.mock("./UserShippingDetails/UserShippingDetails", () => ({
  UserShippingDetails: () => <div>User Shipping Details</div>,
}));

describe("ShippingInformation Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders components correctly and handles button click", () => {
    const toggleDisplayShippingDetailsPopup = jest.fn();

    render(
      <ShippingInformation
        toggleDisplayShippingDetailsPopup={toggleDisplayShippingDetailsPopup}
      />
    );

    expect(screen.getByText("Shipping Information")).toBeInTheDocument();
    expect(screen.getByText("User Login Details")).toBeInTheDocument();
    expect(screen.getByText("User Shipping Details")).toBeInTheDocument();

    const editButton = screen.getByText("Edit");
    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);

    expect(toggleDisplayShippingDetailsPopup).toHaveBeenCalled();
  });
});

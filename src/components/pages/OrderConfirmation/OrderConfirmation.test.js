import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { OrderConfirmation } from "./OrderConfirmation";

import { useLanguageContext } from "../../../contexts/LanguageContext";

jest.mock("../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../reusable/InfoMessage/InfoMessage", () => ({
  InfoMessage: ({ title, subtitle }) => (
    <div>
      <h1>{title}</h1>
      <div>{subtitle}</div>
    </div>
  ),
}));

jest.mock("./TrackOrder/TrackOrder", () => ({
  TrackOrder: () => <div>TrackOrder Component</div>,
}));

jest.mock("./ConfirmationEmail/ConfirmationEmail", () => ({
  ConfirmationEmail: () => <div>ConfirmationEmail Component</div>,
}));

describe("OrderConfirmation Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders the OrderConfirmation component with correct child components", () => {
    render(<OrderConfirmation />);

    const imageElement = screen.getByAltText("butterfly");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723986117/forget-me-not-collection/miniImages/1042750_d9d98_vfqzme.gif"
    );

    expect(
      screen.getByText("Thank you for your purchase!")
    ).toBeInTheDocument();
    expect(screen.getByText("TrackOrder Component")).toBeInTheDocument();

    expect(screen.getByText("ConfirmationEmail Component")).toBeInTheDocument();
  });

  test("applies the correct styles and layout", () => {
    render(<OrderConfirmation />);

    const butterflyImageContainer = screen.getByTestId("butterfly-container");
    expect(butterflyImageContainer).toHaveClass("thumbnail");
  });
});

import { render, screen } from "@testing-library/react";

import { EmptyOrderHistory } from "./EmptyOrderHistory";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

jest.mock("../../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../../reusable/InfoMessage/InfoMessage", () => ({
  InfoMessage: ({ title, subtitle }) => (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  ),
}));

jest.mock("../../../../common/CardSlider/CardSlider", () => ({
  CardSlider: ({ popupCloseHandler }) => (
    <button onClick={popupCloseHandler}>CardSlider</button>
  ),
}));

describe("EmptyOrderHistory Component", () => {
  const mockLanguage = "English";

  const mockPopupCloseHandler = jest.fn();

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders InfoMessage with correct title and subtitle", () => {
    render(<EmptyOrderHistory popupCloseHandler={mockPopupCloseHandler} />);

    expect(screen.getByText("You have no orders.")).toBeInTheDocument();
    expect(
      screen.getByText("You can continue shopping by exploring the collection.")
    ).toBeInTheDocument();
  });

  test("renders CardSlider with the correct popupCloseHandler", () => {
    render(<EmptyOrderHistory popupCloseHandler={mockPopupCloseHandler} />);

    const cardSliderButton = screen.getByText("CardSlider");
    expect(cardSliderButton).toBeInTheDocument();

    cardSliderButton.click();
    expect(mockPopupCloseHandler).toHaveBeenCalled();
  });
});

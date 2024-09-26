import { render, screen, fireEvent } from "@testing-library/react";
import { JewelryCard } from "./JewelryCard";
import { useLanguageContext } from "../../../../../../contexts/LanguageContext";
import { useLargeImagesClick } from "../../../../../../hooks/useLargeImagesClick";

// Mock external dependencies
jest.mock("../../../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../../../../hooks/useLargeImagesClick", () => ({
  useLargeImagesClick: jest.fn(),
}));

jest.mock("../../../../../reusable/DualTitleSection/DualTitleSection", () => ({
  DualTitleSection: jest.fn(() => <div>Mocked DualTitleSection</div>),
}));

jest.mock("../../../../../common/PriceRange/PriceRange", () => ({
  PriceRange: jest.fn(() => <div>Mocked PriceRange</div>),
}));

jest.mock("../../../../../common/StockStatus/StockStatus", () => ({
  StockStatus: jest.fn(() => <div>Mocked StockStatus</div>),
}));

jest.mock("../../../../../common/LargeImages/LargeImages", () => ({
  LargeImages: jest.fn(() => <div>Mocked LargeImages</div>),
}));

jest.mock("../../../../../reusable/Button/Button", () => ({
  Button: jest.fn(({ title, buttonIsDisabled, callBackFunction }) => (
    <button disabled={buttonIsDisabled} onClick={callBackFunction}>
      {title}
    </button>
  )),
}));

// Define mock language data
const BUTTON_TITLE_BY_LANGUAGE = {
  en: "Add to Cart",
  fr: "Ajouter au Panier",
};

describe("JewelryCard Component", () => {
  const mockJewelries = [{ id: 1, price: 100, stock: "In Stock" }];
  const mockToggleDisplayPopup = jest.fn();

  const mockLargeImagesClickHandler = jest.fn();

  beforeEach(() => {
    // Set default mocks
    useLanguageContext.mockReturnValue({ language: "en" });
    useLargeImagesClick.mockReturnValue({
      largeImagesClickHandler: mockLargeImagesClickHandler,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const setup = (props = {}) => {
    const defaultProps = {
      jewelriesByCategory: mockJewelries,
      toggleDisplayPopup: mockToggleDisplayPopup,
      isSoldOut: false,
      categoryTitle: "Rings",
      colorTitle: "Pink",
    };

    return render(<JewelryCard {...defaultProps} {...props} />);
  };

  it("handles hover and touch events correctly", () => {
    const { container } = setup();

    const article = container.querySelector("article");

    // Test mouse hover
    fireEvent.mouseEnter(article);
    expect(article).toHaveClass("hovered");

    fireEvent.mouseLeave(article);
    expect(article).not.toHaveClass("hovered");

    // Test touch events
    fireEvent.touchStart(article);
    expect(article).toHaveClass("hovered");

    fireEvent.touchEnd(article);
    expect(article).not.toHaveClass("hovered");
  });
});

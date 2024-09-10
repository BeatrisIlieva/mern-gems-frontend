import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CardSlider } from "./CardSlider";

import { useJewelry } from "../../../hooks/useJewelry";
import { useLargeImagesClick } from "../../../hooks/useLargeImagesClick";

jest.mock("../../../hooks/useJewelry", () => ({
  useJewelry: jest.fn(),
}));

jest.mock("../../../hooks/useLargeImagesClick", () => ({
  useLargeImagesClick: jest.fn(),
}));

jest.mock("../../reusable/DualTitleSection/DualTitleSection", () => ({
  DualTitleSection: ({ firstTitle, secondTitle }) => (
    <div>
      <div>{firstTitle}</div>
      <div>{secondTitle}</div>
    </div>
  ),
}));

jest.mock("../PriceRange/PriceRange", () => ({
  PriceRange: ({ jewelriesByCategory }) => (
    <div>Price Range: {jewelriesByCategory.length}</div>
  ),
}));

jest.mock("../StockStatus/StockStatus", () => ({
  StockStatus: ({ jewelriesByCategory }) => (
    <div>Stock Status: {jewelriesByCategory.length}</div>
  ),
}));

jest.mock("../LargeImages/LargeImages", () => ({
  LargeImages: ({ clickHandler }) => (
    <button onClick={clickHandler}>Large Images</button>
  ),
}));

jest.mock("./reusable/Arrow", () => ({
  Arrow: ({ icon, callBackFunction }) => (
    <button onClick={callBackFunction}>
      {icon ? "Arrow Icon" : "No Icon"}
    </button>
  ),
}));

describe("CardSlider Component", () => {
  const mockPopupCloseHandler = jest.fn();
  const mockLargeImagesClickHandler = jest.fn();
  const mockJewelryData = [
    { id: 1, name: "Jewelry 1" },
    { id: 2, name: "Jewelry 2" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    useJewelry.mockReturnValue({ jewelriesByCategory: mockJewelryData });
    useLargeImagesClick.mockReturnValue({
      largeImagesClickHandler: mockLargeImagesClickHandler,
    });
  });

  test("renders CardSlider section and its children when jewelriesByCategory has items", () => {
    render(<CardSlider popupCloseHandler={mockPopupCloseHandler} />);

    expect(screen.getByTestId("card-slider")).toBeInTheDocument();
    expect(screen.getByText("Price Range: 2")).toBeInTheDocument();
    expect(screen.getByText("Stock Status: 2")).toBeInTheDocument();
    expect(screen.getByText("Large Images")).toBeInTheDocument();

    const prevArrow = screen.getAllByText("Arrow Icon")[0];
    const nextArrow = screen.getAllByText("Arrow Icon")[1];

    expect(prevArrow).toBeInTheDocument();
    expect(nextArrow).toBeInTheDocument();
  });

  test("clickHandler calls popupCloseHandler and largeImagesClickHandler", () => {
    render(<CardSlider popupCloseHandler={mockPopupCloseHandler} />);

    fireEvent.click(screen.getByText("Large Images"));

    expect(mockPopupCloseHandler).toHaveBeenCalled();
    expect(mockLargeImagesClickHandler).toHaveBeenCalled();
  });

  test("clicking next and previous arrows changes the current index", () => {
    render(<CardSlider popupCloseHandler={mockPopupCloseHandler} />);

    const prevArrow = screen.getAllByText("Arrow Icon")[0];
    const nextArrow = screen.getAllByText("Arrow Icon")[1];

    fireEvent.click(nextArrow);

    fireEvent.click(prevArrow);
  });
});

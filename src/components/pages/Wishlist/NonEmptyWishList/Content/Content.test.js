import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Content } from "./Content";
import { useJewelry } from "../../../../../hooks/useJewelry";
import { useLargeImagesClick } from "../../../../../hooks/useLargeImagesClick";

// Mock hooks
jest.mock("../../../../../hooks/useJewelry", () => ({
  useJewelry: jest.fn(),
}));

jest.mock("../../../../../hooks/useLargeImagesClick", () => ({
  useLargeImagesClick: jest.fn(),
}));

// Mock components
jest.mock("../../../../reusable/DualTitleSection/DualTitleSection", () => ({
  DualTitleSection: ({ firstTitle, secondTitle }) => (
    <div>
      {firstTitle}
      {secondTitle}
    </div>
  ),
}));

jest.mock("../../../../common/PriceRange/PriceRange", () => ({
  PriceRange: () => <div>Price Range</div>,
}));

jest.mock("../../../../common/StockStatus/StockStatus", () => ({
  StockStatus: () => <div>Stock Status</div>,
}));

jest.mock("../../../../common/LargeImages/LargeImages", () => ({
  LargeImages: ({ jewelriesByCategory }) => (
    <div>
      Large Images Component
      {jewelriesByCategory.length}
    </div>
  ),
}));

describe("Content Component", () => {
  beforeEach(() => {
    useJewelry.mockReturnValue({
      jewelriesByCategory: [{ id: 1 }, { id: 2 }],
    });
    useLargeImagesClick.mockReturnValue({
      largeImagesClickHandler: jest.fn(),
    });
  });

  test("renders correctly with items in jewelriesByCategory", () => {
    render(<Content categoryTitle="Necklaces" colorTitle="Gold" />);

    expect(screen.getByText("Price Range")).toBeInTheDocument();
    expect(screen.getByText("Stock Status")).toBeInTheDocument();
  });

  test("does not render anything when jewelriesByCategory is empty", () => {
    useJewelry.mockReturnValue({
      jewelriesByCategory: [],
    });

    render(<Content categoryTitle="Necklaces" colorTitle="Gold" />);

    expect(
      screen.queryByText("Large Images Component")
    ).not.toBeInTheDocument();
  });

  test("handles hover and touch events correctly", () => {
    render(<Content categoryTitle="Necklaces" colorTitle="Gold" />);

    const articleElement = screen.getByRole("article");

    fireEvent.mouseEnter(articleElement);
    expect(articleElement).toHaveClass("hovered");

    fireEvent.mouseLeave(articleElement);
    expect(articleElement).not.toHaveClass("hovered");

    fireEvent.touchStart(articleElement);
    expect(articleElement).toHaveClass("hovered");

    fireEvent.touchEnd(articleElement);
    expect(articleElement).not.toHaveClass("hovered");
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Content } from "./Content";

import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";
import { useWishlistContext } from "../../../../../contexts/WishlistContext";

import { useLargeImagesClick } from "../../../../../hooks/useLargeImagesClick";

jest.mock("../../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("../../../../../contexts/WishlistContext", () => ({
  useWishlistContext: jest.fn(),
}));

jest.mock("../../../../reusable/DualTitleSection/DualTitleSection", () => ({
  DualTitleSection: ({ firstTitle, secondTitle }) => (
    <div data-testid="dual-title-section">
      <span>{firstTitle}</span>
      <span>{secondTitle}</span>
    </div>
  ),
}));

jest.mock("../../../../common/LargeImages/LargeImages", () => ({
  LargeImages: ({ clickHandler }) => (
    <div data-testid="large-images" onClick={clickHandler}></div>
  ),
}));

jest.mock("../../../../common/MiniImages/MiniImages", () => ({
  MiniImages: ({ clickHandler }) => (
    <div
      data-testid="mini-images"
      onClick={() => clickHandler("newColor")}
    ></div>
  ),
}));

jest.mock("../../../../common/StockStatus/StockStatus", () => ({
  StockStatus: () => <div>Stock Status</div>,
}));

jest.mock("../../../../common/PriceRange/PriceRange", () => ({
  PriceRange: () => <div>Price Range</div>,
}));

// Mocking useLargeImagesClick hook
jest.mock("../../../../../hooks/useLargeImagesClick", () => ({
  useLargeImagesClick: jest.fn(),
}));

describe("Content component", () => {
  const mockUserId = "user123";
  const mockAdd = jest.fn();
  const mockRemove = jest.fn();

  const mockLargeImagesClickHandler = jest.fn();
  const mockUpdateSelectedColor = jest.fn();

  const mockJewelriesByCategory = [
    {
      _id: 1,
      title: "Pink Sapphire and Diamond Bracelet",
      firstImageUrl:
        "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif",
      secondImageUrl:
        "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_kdpnm6.avif",
      category: 1,
      color: 1,
      description:
        "45 pear-shaped and round brilliant pink sapphires weighing a total of approximately 4.36 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum",
      categories: [{ title: "Bracelets" }],
      colors: [{ title: "Pink" }],
      inventories: [
        { size: "15.2 cm", quantity: 78, price: 33000 },
        { size: "17.8 cm", quantity: 0, price: 34000 },
        { size: "19.3 cm", quantity: 2, price: 35000 },
      ],
    },
  ];

  beforeEach(() => {
    useAuthenticationContext.mockReturnValue({
      userId: mockUserId,
    });

    useWishlistContext.mockReturnValue({
      wishlistItems: [],
      add: mockAdd,
      remove: mockRemove,
    });

    useLargeImagesClick.mockReturnValue({
      largeImagesClickHandler: mockLargeImagesClickHandler,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly with given props", () => {
    render(
      <Content
        jewelriesByCategory={mockJewelriesByCategory}
        updateSelectedColor={mockUpdateSelectedColor}
      />
    );

    // Check if DualTitleSection, LargeImages, and MiniImages are rendered
    expect(screen.getByTestId("dual-title-section")).toBeInTheDocument();
    expect(screen.getByTestId("large-images")).toBeInTheDocument();
    expect(screen.getByTestId("mini-images")).toBeInTheDocument();
  });

  test('calls largeImagesClickHandler when large images are clicked', () => {
    render(
      <Content
        jewelriesByCategory={mockJewelriesByCategory}
        updateSelectedColor={mockUpdateSelectedColor}
      />
    );

    // Trigger click event on LargeImages
    fireEvent.click(screen.getByTestId('large-images'));

    // Expect largeImagesClickHandler to have been called
    expect(mockLargeImagesClickHandler).toHaveBeenCalled();
  });

  test('calls updateSelectedColor when mini images are clicked', () => {
    render(
      <Content
        jewelriesByCategory={mockJewelriesByCategory}
        updateSelectedColor={mockUpdateSelectedColor}
      />
    );

    // Trigger click event on MiniImages
    fireEvent.click(screen.getByTestId('mini-images'));

    // Expect updateSelectedColor to have been called with 'newColor'
    expect(mockUpdateSelectedColor).toHaveBeenCalledWith('newColor');
  });
});

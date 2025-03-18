import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import { MiniBag } from "./MiniBag";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";
import { useWishlistContext } from "../../../../contexts/WishlistContext";
import { useBagContext } from "../../../../contexts/BagContext";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("../../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

jest.mock("../../../../contexts/WishlistContext", () => ({
  useWishlistContext: jest.fn(),
}));

describe("MiniBag Component", () => {
  const mockLanguage = "English";
  const mockUserId = "user123";

  const toggleDisplayMiniBagPopup = jest.fn();

  const mockAddToWishlist = jest.fn();
  const mockRemoveFromWishlist = jest.fn();

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    useAuthenticationContext.mockReturnValue({
      userId: mockUserId,
    });

    useWishlistContext.mockReturnValue({
      wishlistItems: [],
      add: mockAddToWishlist,
      remove: mockRemoveFromWishlist,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders EmptyMiniBag when bagTotalQuantity is 0", () => {
    useBagContext.mockReturnValue({
      bagTotalQuantity: 0,
      bagItems: [],
    });

    render(
      <MemoryRouter>
        <MiniBag toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("empty-mini-bag")).toBeInTheDocument();
  });

  test("renders NonEmptyMiniBag when bagTotalQuantity is greater than 0", () => {
    useBagContext.mockReturnValue({
      bagTotalQuantity: 1,
      bagItems: [
        {
          _id: "66dd8633279d8bb4dabfc16c",
          bagId: "66dd8633279d8bb4dabfc16c",
          inventoryId: "66d2d455ad88e256608c8010",
          jewelryId: 1,
          categoryId: 1,
          colorId: 1,
          size: "15.2 cm",
          user: "66dd8394279d8bb4dabfbfe6",
          jewelryTitle: "Pink Sapphire and Diamond Bracelet",
          firstImageUrl:
            "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif",
          inventoryQuantity: 78,
          price: 33000,
          quantity: 1,
          categoryTitle: null,
          maxQuantity: 78,
        },
      ],
    });

    render(
      <MemoryRouter>
        <MiniBag toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("mini-bag")).toBeInTheDocument();
    expect(screen.getByTestId("bag-list")).toBeInTheDocument();
  });

  test("handles popup close transition", async () => {
    useBagContext.mockReturnValue({
      bagTotalQuantity: 1,
      bagItems: [
        {
          _id: "66dd8633279d8bb4dabfc16c",
          bagId: "66dd8633279d8bb4dabfc16c",
          inventoryId: "66d2d455ad88e256608c8010",
          jewelryId: 1,
          categoryId: 1,
          colorId: 1,
          size: "15.2 cm",
          user: "66dd8394279d8bb4dabfbfe6",
          jewelryTitle: "Pink Sapphire and Diamond Bracelet",
          firstImageUrl:
            "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif",
          inventoryQuantity: 78,
          price: 33000,
          quantity: 1,
          categoryTitle: null,
          maxQuantity: 78,
        },
      ],
    });

    render(
      <MemoryRouter>
        <MiniBag toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("x-mark"));

    expect(screen.getByTestId("mini-bag")).toHaveClass("mini-bag");

    await waitFor(() => {
      expect(toggleDisplayMiniBagPopup).toHaveBeenCalled();
    });
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 

import { CategoryCard } from "./CategoryCard";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";
import { useWishlistContext } from "../../../../contexts/WishlistContext";

import { useNavigate } from "react-router-dom";
import { useJewelry } from "../../../../hooks/useJewelry";

jest.mock("../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("../../../../contexts/WishlistContext", () => ({
  useWishlistContext: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../../../hooks/useJewelry", () => ({
  useJewelry: jest.fn(),
}));

jest.mock("../../../../utils/slugify", () => ({
  slugify: jest.fn((str) => str.toLowerCase().replace(/\s/g, "-")),
}));

describe("CategoryCard component", () => {
  const mockAdd = jest.fn();
  const mockRemove = jest.fn();
  const mockUserId = "user123";

  const mockNavigate = jest.fn();

  beforeEach(() => {
    useAuthenticationContext.mockReturnValue({
      userId: mockUserId,
    });

    useWishlistContext.mockReturnValue({
      wishlistItems: [],
      add: mockAdd,
      remove: mockRemove,
    });

    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly when there are jewelries by category", () => {
    useWishlistContext.mockReturnValue({
      wishlistItems: [
        {
          category: { _id: "cat123" },
          color: { _id: "color123" },
        },
      ],
      add: mockAdd,
      remove: mockRemove,
    });

    useJewelry.mockReturnValue({
      jewelriesByCategory: [
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
      ],
    });

    render(<CategoryCard categoryTitle="Bracelets" colorTitle="Pink" />);

    expect(screen.getByTestId("category-card")).toBeInTheDocument();
  });
});

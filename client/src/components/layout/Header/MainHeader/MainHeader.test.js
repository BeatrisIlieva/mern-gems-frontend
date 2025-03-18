import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import { MainHeader } from "./MainHeader";

import { useBagContext } from "../../../../contexts/BagContext";
import { useWishlistContext } from "../../../../contexts/WishlistContext";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

jest.mock("../../../../contexts/WishlistContext", () => ({
  useWishlistContext: jest.fn(),
}));

jest.mock("../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

describe("MainHeader Component", () => {
  const mockLanguage = "English";
  const mockUserId = "user-123";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });
    useAuthenticationContext.mockReturnValue({ userId: mockUserId });
    useBagContext.mockReturnValue({ bagTotalQuantity: 3 });
    useWishlistContext.mockReturnValue({ wishlistTotalQuantity: 5 });
  });

  test("renders with the correct number of NavLinkItem components", () => {
    render(
      <Router>
        <MainHeader />
      </Router>
    );

    expect(screen.getByText("Collection")).toBeInTheDocument();
    expect(screen.getByText("Wishlist")).toBeInTheDocument();
    expect(screen.getByText("My Bag")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();

    expect(screen.getByText("(5)")).toBeInTheDocument();
    expect(screen.getByText("(3)")).toBeInTheDocument();
  });

  test("renders the logo image", () => {
    render(
      <Router>
        <MainHeader />
      </Router>
    );

    const logoImage = screen.getByAltText("logo-image");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/deztgvefu/image/upload/v1726147711/forget-me-not-collection/miniImages/logo2_zfmuo1.png"
    );
  });
});

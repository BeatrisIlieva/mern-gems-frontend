import { render, screen } from "@testing-library/react";

import { NonEmptyWishlist } from "./NonEmptyWishlist";

import { useWishlistContext } from "../../../../contexts/WishlistContext";

jest.mock("../../../reusable/InfoMessage/InfoMessage", () => ({
  InfoMessage: ({ title, subtitle }) => (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  ),
}));

jest.mock("./Content/Content", () => ({
  Content: ({ categoryTitle, colorTitle }) => (
    <div>
      <p>{categoryTitle}</p>
      <p>{colorTitle}</p>
    </div>
  ),
}));

jest.mock("../../../../contexts/WishlistContext", () => ({
  useWishlistContext: jest.fn(),
}));

describe("NonEmptyWishlist Component", () => {
  test("renders InfoMessage and Content components when wishlist has items", () => {
    const mockWishlistItems = [
      { _id: "1", category: { title: "Jewelry" }, color: { title: "Red" } },
      {
        _id: "2",
        category: { title: "Accessories" },
        color: { title: "Blue" },
      },
    ];
    const mockWishlistTotalQuantity = mockWishlistItems.length;

    useWishlistContext.mockReturnValue({
      wishlistItems: mockWishlistItems,
      wishlistTotalQuantity: mockWishlistTotalQuantity,
    });

    render(<NonEmptyWishlist />);

    expect(
      screen.getByText(`Your Wish List (${mockWishlistTotalQuantity})`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Your favorite item(s) are below. Wishes can come true, especially when you dream."
      )
    ).toBeInTheDocument();

    mockWishlistItems.forEach((item) => {
      expect(screen.getByText(item.category.title)).toBeInTheDocument();
      expect(screen.getByText(item.color.title)).toBeInTheDocument();
    });
  });

  test("does not render InfoMessage or Content components when wishlist is empty", () => {
    useWishlistContext.mockReturnValue({
      wishlistItems: [],
      wishlistTotalQuantity: 0,
    });

    render(<NonEmptyWishlist />);

    expect(screen.queryByText("Your Wish List")).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "This list is empty. Explore and add something you love."
      )
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Jewelry")).not.toBeInTheDocument();
    expect(screen.queryByText("Red")).not.toBeInTheDocument();
  });
});

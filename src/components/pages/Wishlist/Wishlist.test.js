import { render, screen } from "@testing-library/react";
import { Wishlist } from "./Wishlist";
import { useWishlistContext } from "../../../contexts/WishlistContext";

// Mock the context
jest.mock("../../../contexts/WishlistContext", () => ({
  useWishlistContext: jest.fn(),
}));

// Mock child components
jest.mock("./EmptyWishlist/EmptyWishlist", () => ({
  EmptyWishlist: () => <div>Empty Wishlist</div>,
}));

jest.mock("./NonEmptyWishlist/NonEmptyWishlist", () => ({
  NonEmptyWishlist: () => <div>Non-Empty Wishlist</div>,
}));

describe("Wishlist Component", () => {
  test("renders EmptyWishlist when wishlistTotalQuantity is less than 1", () => {
    useWishlistContext.mockReturnValue({ wishlistTotalQuantity: 0 });

    render(<Wishlist />);

    // Check if EmptyWishlist is rendered
    expect(screen.getByText("Empty Wishlist")).toBeInTheDocument();
    // Ensure NonEmptyWishlist is not rendered
    expect(screen.queryByText("Non-Empty Wishlist")).not.toBeInTheDocument();
  });

  test("renders NonEmptyWishlist when wishlistTotalQuantity is 1 or more", () => {
    useWishlistContext.mockReturnValue({ wishlistTotalQuantity: 1 });

    render(<Wishlist />);

    // Check if NonEmptyWishlist is rendered
    expect(screen.getByText("Non-Empty Wishlist")).toBeInTheDocument();
    // Ensure EmptyWishlist is not rendered
    expect(screen.queryByText("Empty Wishlist")).not.toBeInTheDocument();
  });
});

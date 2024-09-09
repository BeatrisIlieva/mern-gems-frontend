import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Buttons } from "./Buttons";

jest.mock("./MoveToWishlist/MoveToWishlist", () => ({
  MoveToWishlist: ({ bagId, categoryId, colorId }) => (
    <button
      data-testid="move-to-wishlist"
      data-bag-id={bagId}
      data-category-id={categoryId}
      data-color-id={colorId}
    >
      Move to Wishlist
    </button>
  ),
}));

jest.mock("./Remove/Remove", () => ({
  Remove: ({ bagId }) => (
    <button data-testid="remove" data-bag-id={bagId}>
      Remove
    </button>
  ),
}));

describe("Buttons Component", () => {
  const bagId = "bag1";
  const categoryId = "cat1";
  const colorId = "color1";

  test("renders MoveToWishlist and Remove components with correct props", () => {
    render(<Buttons bagId={bagId} categoryId={categoryId} colorId={colorId} />);

    const moveToWishlist = screen.getByTestId("move-to-wishlist");
    expect(moveToWishlist).toHaveAttribute("data-bag-id", bagId);
    expect(moveToWishlist).toHaveAttribute("data-category-id", categoryId);
    expect(moveToWishlist).toHaveAttribute("data-color-id", colorId);

    const remove = screen.getByTestId("remove");
    expect(remove).toHaveAttribute("data-bag-id", bagId);
  });
});

import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Heart } from "./Heart";

import { useWishlistContext } from "../../../contexts/WishlistContext";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

jest.mock("../../../contexts/WishlistContext", () => ({
  useWishlistContext: jest.fn(),
}));

jest.mock("../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

describe("Heart component", () => {
  const mockAdd = jest.fn();
  const mockRemove = jest.fn();
  const mockUserId = "user123";

  beforeEach(() => {
    jest.clearAllMocks();

    useAuthenticationContext.mockReturnValue({
      userId: mockUserId,
    });

    useWishlistContext.mockReturnValue({
      wishlistItems: [],
      add: mockAdd,
      remove: mockRemove,
    });
  });

  test("renders regular heart icon when item is not in the wishlist", () => {
    render(<Heart categoryId="cat123" colorId="color123" />);

    const heartIcon = screen.getByTestId("regular");
    expect(heartIcon).toBeInTheDocument();
  });

  test("renders solid heart icon when item is in the wishlist", () => {
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

    render(<Heart categoryId="cat123" colorId="color123" />);

    const heartIcon = screen.getByTestId("solid");
    expect(heartIcon).toBeInTheDocument();
  });

  test("calls add when item is not in the wishlist and heart is clicked", () => {
    render(<Heart categoryId="cat123" colorId="color123" />);

    const heartIcon = screen.getByTestId("regular");
    fireEvent.click(heartIcon);

    expect(mockAdd).toHaveBeenCalledWith("cat123", "color123", mockUserId);
  });

  test("calls remove when item is in the wishlist and heart is clicked", () => {
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

    render(<Heart categoryId="cat123" colorId="color123" />);

    const heartIcon = screen.getByTestId("solid");
    fireEvent.click(heartIcon);

    expect(mockRemove).toHaveBeenCalledWith("cat123", "color123", mockUserId);
  });
});

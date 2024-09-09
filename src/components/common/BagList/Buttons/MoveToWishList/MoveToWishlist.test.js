// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

// import { MoveToWishlist } from "./MoveToWishlist";

// import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";
// import { useBagContext } from "../../../../../contexts/BagContext";
// import { useWishlistContext } from "../../../../../contexts/WishlistContext";

// jest.mock("../../../../../contexts/AuthenticationContext", () => ({
//   useAuthenticationContext: jest.fn(),
// }));

// jest.mock("../../../../../contexts/BagContext", () => ({
//   useBagContext: jest.fn(),
// }));

// jest.mock("../../../../../contexts/WishlistContext", () => ({
//   useWishlistContext: jest.fn(),
// }));

// describe("MoveToWishlist Component", () => {
//   const bagId = "test-bag-id";
//   const categoryId = "test-category-id";
//   const colorId = "test-color-id";
//   const userId = "test-user-id";

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test("renders Button with correct title and variant when item is not in wishlist", () => {
//     useAuthenticationContext.mockReturnValue({ userId });
//     useBagContext.mockReturnValue({ remove: jest.fn() });
//     useWishlistContext.mockReturnValue({
//       wishlistItems: [],
//       add: jest.fn(),
//     });

//     render(
//       <MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />
//     );

//     const button = screen.getByRole("button", { name: /Move to Wishlist/i });
//     expect(button).toBeInTheDocument();
//     expect(button).toHaveTextContent("Move to Wishlist");
//   });

//   test("renders Button with correct title and variant when item is in wishlist", () => {
//     useAuthenticationContext.mockReturnValue({ userId });
//     useBagContext.mockReturnValue({ remove: jest.fn() });
//     useWishlistContext.mockReturnValue({
//       wishlistItems: [
//         { category: { _id: categoryId }, color: { _id: colorId } },
//       ],
//       add: jest.fn(),
//     });

//     render(
//       <MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />
//     );

//     const button = screen.getByRole("button", { name: /In Wishlist/i });
//     expect(button).toBeInTheDocument();
//     expect(button).toHaveTextContent("In Wishlist");
//   });

//   test("calls addToWishlist and removeFromBag with correct arguments when clicked", () => {
//     const mockAddToWishlist = jest.fn();
//     const mockRemoveFromBag = jest.fn();

//     useAuthenticationContext.mockReturnValue({ userId });
//     useBagContext.mockReturnValue({ remove: mockRemoveFromBag });
//     useWishlistContext.mockReturnValue({
//       wishlistItems: [],
//       add: mockAddToWishlist,
//     });

//     render(
//       <MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />
//     );

//     const button = screen.getByRole("button", { name: /Move to Wishlist/i });
//     fireEvent.click(button);

//     expect(mockAddToWishlist).toHaveBeenCalledWith(categoryId, colorId, userId);
//     expect(mockAddToWishlist).toHaveBeenCalledTimes(1);
//     expect(mockRemoveFromBag).toHaveBeenCalledWith(bagId);
//     expect(mockRemoveFromBag).toHaveBeenCalledTimes(1);
//   });
// });


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MoveToWishlist } from './MoveToWishlist';
import { useAuthenticationContext } from '../../../../../contexts/AuthenticationContext';
import { useBagContext } from '../../../../../contexts/BagContext';
import { useWishlistContext } from '../../../../../contexts/WishlistContext';

jest.mock('../../../../../contexts/AuthenticationContext', () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock('../../../../../contexts/BagContext', () => ({
  useBagContext: jest.fn(),
}));

jest.mock('../../../../../contexts/WishlistContext', () => ({
  useWishlistContext: jest.fn(),
}));

describe('MoveToWishlist Component', () => {
  const bagId = 'test-bag-id';
  const categoryId = 'test-category-id';
  const colorId = 'test-color-id';
  const userId = 'test-user-id';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Button with correct title and variant when item is not in wishlist', () => {
    useAuthenticationContext.mockReturnValue({ userId });
    useBagContext.mockReturnValue({ remove: jest.fn() });
    useWishlistContext.mockReturnValue({
      wishlistItems: [],
      add: jest.fn(),
    });

    render(
      <MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />
    );

    const button = screen.getByRole('button', { name: /Move to Wishlist/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Move to Wishlist');
    expect(button).toHaveClass('underlined'); // Assuming the variant is applied as a class
  });

  test('renders Button with correct title and variant when item is in wishlist', () => {
    useAuthenticationContext.mockReturnValue({ userId });
    useBagContext.mockReturnValue({ remove: jest.fn() });
    useWishlistContext.mockReturnValue({
      wishlistItems: [
        { category: { _id: categoryId }, color: { _id: colorId } },
      ],
      add: jest.fn(),
    });

    render(
      <MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />
    );

    const button = screen.getByRole('button', { name: /In Wishlist/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('In Wishlist');
    expect(button).toHaveClass('info'); // Assuming the variant is applied as a class
  });

  test('calls addToWishlist and removeFromBag with correct arguments when clicked', () => {
    const mockAddToWishlist = jest.fn();
    const mockRemoveFromBag = jest.fn();

    useAuthenticationContext.mockReturnValue({ userId });
    useBagContext.mockReturnValue({ remove: mockRemoveFromBag });
    useWishlistContext.mockReturnValue({
      wishlistItems: [],
      add: mockAddToWishlist,
    });

    render(
      <MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />
    );

    const button = screen.getByRole('button', { name: /Move to Wishlist/i });
    fireEvent.click(button);

    expect(mockAddToWishlist).toHaveBeenCalledWith(categoryId, colorId, userId);
    expect(mockAddToWishlist).toHaveBeenCalledTimes(1);
    expect(mockRemoveFromBag).toHaveBeenCalledWith(bagId);
    expect(mockRemoveFromBag).toHaveBeenCalledTimes(1);
  });

  test('updates button text and variant when wishlistItems change', () => {
    const mockAddToWishlist = jest.fn();
    const mockRemoveFromBag = jest.fn();

    useAuthenticationContext.mockReturnValue({ userId });
    useBagContext.mockReturnValue({ remove: mockRemoveFromBag });
    useWishlistContext.mockReturnValue({
      wishlistItems: [],
      add: mockAddToWishlist,
    });

    const { rerender } = render(
      <MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />
    );

    const button = screen.getByRole('button', { name: /Move to Wishlist/i });
    expect(button).toHaveTextContent('Move to Wishlist');
    expect(button).toHaveClass('underlined');

    // Simulate adding the item to the wishlist
    useWishlistContext.mockReturnValue({
      wishlistItems: [{ category: { _id: categoryId }, color: { _id: colorId } }],
      add: mockAddToWishlist,
    });

    rerender(<MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />);

    expect(button).toHaveTextContent('In Wishlist');
    expect(button).toHaveClass('info');
  });
});

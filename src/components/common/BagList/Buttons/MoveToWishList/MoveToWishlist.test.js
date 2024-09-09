import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MoveToWishlist } from './MoveToWishlist';
import { useAuthenticationContext } from '../../../../../contexts/AuthenticationContext';
import { useBagContext } from '../../../../../contexts/BagContext';
import { useWishlistContext } from '../../../../../contexts/WishlistContext';

// Mock the context hooks
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
    // Clear any previous mocks
    jest.clearAllMocks();
  });

  test('renders Button with correct title and variant when item is not in wishlist', () => {
    useAuthenticationContext.mockReturnValue({ userId });
    useBagContext.mockReturnValue({ remove: jest.fn() });
    useWishlistContext.mockReturnValue({
      wishlistItems: [],
      add: jest.fn(),
    });

    render(<MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />);

    // Check if Button is rendered with correct title and variant
    const button = screen.getByRole('button', { name: /Move to Wishlist/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Move to Wishlist');
  });

  test('renders Button with correct title and variant when item is in wishlist', () => {
    useAuthenticationContext.mockReturnValue({ userId });
    useBagContext.mockReturnValue({ remove: jest.fn() });
    useWishlistContext.mockReturnValue({
      wishlistItems: [{ category: { _id: categoryId }, color: { _id: colorId } }],
      add: jest.fn(),
    });

    render(<MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />);

    // Check if Button is rendered with correct title and variant
    const button = screen.getByRole('button', { name: /In Wishlist/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('In Wishlist');
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

    render(<MoveToWishlist bagId={bagId} categoryId={categoryId} colorId={colorId} />);

    // Click the button
    const button = screen.getByRole('button', { name: /Move to Wishlist/i });
    fireEvent.click(button);

    // Check if addToWishlist and removeFromBag were called with correct arguments
    expect(mockAddToWishlist).toHaveBeenCalledWith(categoryId, colorId, userId);
    expect(mockAddToWishlist).toHaveBeenCalledTimes(1);
    expect(mockRemoveFromBag).toHaveBeenCalledWith(bagId);
    expect(mockRemoveFromBag).toHaveBeenCalledTimes(1);
  });
});

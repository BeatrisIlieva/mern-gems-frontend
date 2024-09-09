// MainHeader.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { useBagContext } from '../../../../contexts/BagContext';
import { useWishlistContext } from '../../../../contexts/WishlistContext';
import { MainHeader } from './MainHeader';
import { HorizontalLine } from '../../../reusable/HorizontalLine/HorizontalLine';
import { NavLinkItem } from './NavLinkItem/NavLinkItem';

// Mock the contexts
jest.mock('../../../../contexts/BagContext', () => ({
  useBagContext: jest.fn()
}));

jest.mock('../../../../contexts/WishlistContext', () => ({
  useWishlistContext: jest.fn()
}));

describe('MainHeader Component', () => {
  beforeEach(() => {
    useBagContext.mockReturnValue({ bagTotalQuantity: 3 });
    useWishlistContext.mockReturnValue({ wishlistTotalQuantity: 5 });
  });

  test('renders with the correct number of NavLinkItem components', () => {
    render(
      <Router>
        <MainHeader />
      </Router>
    );

    // Check if NavLinkItems are rendered with the correct props
    expect(screen.getByText('Collection')).toBeInTheDocument();
    expect(screen.getByText('Wishlist')).toBeInTheDocument();
    expect(screen.getByText('My Bag')).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();

    // Check for counts
    expect(screen.getByText('(5)')).toBeInTheDocument(); // Wishlist count
    expect(screen.getByText('(3)')).toBeInTheDocument(); // Bag count
  });

  test('renders the logo image', () => {
    render(
      <Router>
        <MainHeader />
      </Router>
    );

    const logoImage = screen.getByAltText('logo-image');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'https://res.cloudinary.com/deztgvefu/image/upload/v1724933359/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl.png');
  });

});

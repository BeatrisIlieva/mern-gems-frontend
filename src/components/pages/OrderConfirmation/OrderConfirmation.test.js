// OrderConfirmation.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { OrderConfirmation } from './OrderConfirmation';

// Mock child components
jest.mock('../../reusable/InfoMessage/InfoMessage', () => ({
  InfoMessage: ({ title, subtitle }) => (
    <div>
      <h1>{title}</h1>
      <div>{subtitle}</div>
    </div>
  )
}));

jest.mock('./TrackOrder/TrackOrder', () => ({
  TrackOrder: () => <div>TrackOrder Component</div>
}));

jest.mock('./ConfirmationEmail/ConfirmationEmail', () => ({
  ConfirmationEmail: () => <div>ConfirmationEmail Component</div>
}));

describe('OrderConfirmation Component', () => {
  test('renders the OrderConfirmation component with correct child components', () => {
    render(<OrderConfirmation />);

    // Check if the butterfly image is rendered with the correct attributes
    const imageElement = screen.getByAltText('butterfly');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://res.cloudinary.com/deztgvefu/image/upload/v1723986117/forget-me-not-collection/miniImages/1042750_d9d98_vfqzme.gif');

    // Check if the InfoMessage component is rendered with correct title and subtitle
    expect(screen.getByText('Thank you for your purchase!')).toBeInTheDocument();
    expect(screen.getByText('TrackOrder Component')).toBeInTheDocument();
    
    // Check if the ConfirmationEmail component is rendered
    expect(screen.getByText('ConfirmationEmail Component')).toBeInTheDocument();
  });

  test('applies the correct styles and layout', () => {
    render(<OrderConfirmation />);


    const butterflyImageContainer = screen.getByTestId('butterfly-container');
    expect(butterflyImageContainer).toHaveClass('thumbnail');
  });
});

// MiniHeader.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import { MiniHeader } from './MiniHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

// Mock the NormalTitle component
jest.mock('../../../reusable/NormalTitle/NormalTitle', () => ({
  NormalTitle: ({ title }) => <h1>{title}</h1>
}));

describe('MiniHeader Component', () => {
  test('renders the Link component with correct props', () => {
    render(
      <Router>
        <MiniHeader />
      </Router>
    );

    // Check if the Link component is rendered with the correct href
    const linkElement = screen.getByRole('link', { name: /Go To Bag/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/users/shopping-bag');
  });

  test('renders the FontAwesomeIcon with the correct icon', () => {
    render(
      <Router>
        <MiniHeader />
      </Router>
    );

    // Check if the FontAwesomeIcon component is rendered with the correct icon
    const iconElement = screen.getByRole('img'); // FontAwesomeIcon renders as an img
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('logo-image'); // Adjust based on actual class or data attribute
  });

  test('renders the NormalTitle component with correct title', () => {
    render(
      <Router>
        <MiniHeader />
      </Router>
    );

    // Check if the NormalTitle component is rendered with the correct title
    const titleElement = screen.getByText('Go To Bag');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the logo image with correct attributes', () => {
    render(
      <Router>
        <MiniHeader />
      </Router>
    );

    // Check if the logo image is rendered with the correct src and alt attributes
    const logoImage = screen.getByAltText('logo-image');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'https://res.cloudinary.com/deztgvefu/image/upload/v1724933359/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl.png');
  });
});

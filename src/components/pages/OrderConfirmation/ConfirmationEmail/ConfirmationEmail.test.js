// ConfirmationEmail.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ConfirmationEmail } from './ConfirmationEmail';
import { useAuthenticationContext } from '../../../../contexts/AuthenticationContext';
import { useService } from '../../../../hooks/useService';

// Mock the hooks and components
jest.mock('../../../../contexts/AuthenticationContext', () => ({
  useAuthenticationContext: jest.fn()
}));

jest.mock('../../../../hooks/useService', () => ({
  useService: jest.fn()
}));

jest.mock('../../../reusable/NormalTitle/NormalTitle', () => ({
  NormalTitle: ({ title, variant }) => (
    <div>
      <span>{title}</span>
      <span>{variant}</span>
    </div>
  )
}));

describe('ConfirmationEmail Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with email data', async () => {
    // Mock implementations
    useAuthenticationContext.mockReturnValue({ userId: '123' });
    useService.mockReturnValue({
      getOne: jest.fn().mockResolvedValue({ email: 'user@example.com' })
    });

    render(<ConfirmationEmail />);

    // Check if the image is rendered with the correct attributes
    const imageElement = screen.getByAltText('butterfly');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://res.cloudinary.com/deztgvefu/image/upload/v1725612070/forget-me-not-collection/miniImages/6320461_qmrgq0.png');

    // Wait for the email to be fetched and displayed
    await waitFor(() => {
      const titleElement = screen.getByText('A confirmation email has been sent to user@example.com');
      expect(titleElement).toBeInTheDocument();
    });
  });

  test('handles error when fetching email', async () => {
    // Mock implementations
    useAuthenticationContext.mockReturnValue({ userId: '123' });
    useService.mockReturnValue({
      getOne: jest.fn().mockRejectedValue(new Error('Failed to fetch'))
    });

    console.log = jest.fn(); // Mock console.log to suppress error logs

    render(<ConfirmationEmail />);

    // Check if the image is rendered
    const imageElement = screen.getByAltText('butterfly');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://res.cloudinary.com/deztgvefu/image/upload/v1725612070/forget-me-not-collection/miniImages/6320461_qmrgq0.png');


  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Remove } from './Remove';
import { useBagContext } from '../../../../../contexts/BagContext';

// Mock the useBagContext hook
jest.mock('../../../../../contexts/BagContext', () => ({
  useBagContext: jest.fn(),
}));

describe('Remove Component', () => {
  const bagId = 'test-bag-id';
  
  beforeEach(() => {
    // Clear any previous mocks
    jest.clearAllMocks();
  });

  test('renders Button with correct props', () => {
    // Mock the remove function
    useBagContext.mockReturnValue({
      remove: jest.fn(),
    });

    render(<Remove bagId={bagId} />);

    // Check if Button is rendered with correct title and variant
    const button = screen.getByRole('button', { name: /Remove/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Remove');
  });

  test('calls remove function with correct bagId when clicked', () => {
    // Create a mock remove function
    const mockRemove = jest.fn();
    
    useBagContext.mockReturnValue({
      remove: mockRemove,
    });

    render(<Remove bagId={bagId} />);

    // Click the button
    const button = screen.getByRole('button', { name: /Remove/i });
    fireEvent.click(button);

    // Check if remove function was called with correct bagId
    expect(mockRemove).toHaveBeenCalledWith(bagId);
    expect(mockRemove).toHaveBeenCalledTimes(1);
  });
});

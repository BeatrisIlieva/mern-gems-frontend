import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useParams } from 'react-router-dom';

import { CollectionItem } from './CollectionItem';

import { useJewelry } from '../../../hooks/useJewelry';

// Mock child components
jest.mock('./MiniBag/MiniBag', () => ({
  MiniBag: ({ toggleDisplayMiniBagPopup }) => (
    <div data-testid="mini-bag" onClick={toggleDisplayMiniBagPopup}></div>
  ),
}));
jest.mock('../Page404/Page404', () => ({
  Page404: () => <div data-testid="page-404"></div>,
}));
jest.mock('./Images/Images', () => ({
  Images: ({ jewelriesByCategory }) => (
    <div data-testid="images">{jewelriesByCategory.length} images</div>
  ),
}));
jest.mock('./InfoAndAction/InfoAndAction', () => ({
  InfoAndAction: ({ jewelriesByCategory, toggleDisplayPopup }) => (
    <div
      data-testid="info-and-action"
      onClick={toggleDisplayPopup}
    >
      {jewelriesByCategory.length} info and action
    </div>
  ),
}));

// Mock hooks
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));
jest.mock('../../../hooks/useJewelry', () => ({
  useJewelry: jest.fn(),
}));

describe('CollectionItem Component', () => {
  const mockToggleDisplayPopup = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Page404 when displayPage404 is true', () => {
    useParams.mockReturnValue({
      slugifiedCategoryTitle: 'rings',
      slugifiedColorTitle: 'gold',
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [],
      displayPage404: true,
    });

    render(<CollectionItem />);

    // Check if Page404 is rendered
    expect(screen.getByTestId('page-404')).toBeInTheDocument();
  });

  test('renders Images and InfoAndAction when jewelriesByCategory is not empty', () => {
    useParams.mockReturnValue({
      slugifiedCategoryTitle: 'rings',
      slugifiedColorTitle: 'gold',
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [{ id: 1 }],
      displayPage404: false,
    });

    render(<CollectionItem />);

    // Check if Images component is rendered
    expect(screen.getByTestId('images')).toBeInTheDocument();
    // Check if InfoAndAction component is rendered
    expect(screen.getByTestId('info-and-action')).toBeInTheDocument();
  });

  test('does not render Images or InfoAndAction when jewelriesByCategory is empty', () => {
    useParams.mockReturnValue({
      slugifiedCategoryTitle: 'rings',
      slugifiedColorTitle: 'gold',
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [],
      displayPage404: false,
    });

    render(<CollectionItem />);

    // Check that Images and InfoAndAction components are not rendered
    expect(screen.queryByTestId('images')).not.toBeInTheDocument();
    expect(screen.queryByTestId('info-and-action')).not.toBeInTheDocument();
  });

  test('renders MiniBag when displayPopup is true', () => {
    useParams.mockReturnValue({
      slugifiedCategoryTitle: 'rings',
      slugifiedColorTitle: 'gold',
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [{ id: 1 }],
      displayPage404: false,
    });

    const { rerender } = render(<CollectionItem />);

    // Check that MiniBag is not rendered initially
    expect(screen.queryByTestId('mini-bag')).not.toBeInTheDocument();

    // Re-render component with displayPopup true
    rerender(<CollectionItem />);
    fireEvent.click(screen.getByTestId('info-and-action'));

    // Check that MiniBag is rendered after the click event
    expect(screen.getByTestId('mini-bag')).toBeInTheDocument();
  });

  test('toggleDisplayPopup function works correctly', () => {
    useParams.mockReturnValue({
      slugifiedCategoryTitle: 'rings',
      slugifiedColorTitle: 'gold',
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [{ id: 1 }],
      displayPage404: false,
    });

    render(<CollectionItem />);

    // Trigger toggleDisplayPopup through InfoAndAction click
    fireEvent.click(screen.getByTestId('info-and-action'));

    // MiniBag should now be visible
    expect(screen.getByTestId('mini-bag')).toBeInTheDocument();

    // Trigger toggleDisplayPopup again to hide MiniBag
    fireEvent.click(screen.getByTestId('mini-bag'));

    // MiniBag should no longer be visible
    expect(screen.queryByTestId('mini-bag')).not.toBeInTheDocument();
  });
});

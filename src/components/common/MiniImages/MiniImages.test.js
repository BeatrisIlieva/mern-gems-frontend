import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MiniImages } from './MiniImages';
import { Image } from './Image/Image';
import { COLORS_BY_TITLE } from '../../../constants/colorsByTitle';
import { MINI_IMAGES_BY_TITLE_AND_IMAGE_URL } from './constants/miniImagesByTitleAndImageUrl';

// Mock the Image component
jest.mock('./Image/Image', () => ({
  Image: ({ imageUrl, title, colorName, updateActiveMiniImage, isActive }) => (
    <img
      src={imageUrl}
      alt={title}
      data-testid={`image-${colorName}`}
      className={isActive ? 'active' : ''}
      onClick={() => updateActiveMiniImage(colorName)}
    />
  ),
}));

describe('MiniImages Component', () => {
  const mockClickHandler = jest.fn();

  const jewelriesByCategory = [
    {
      colors: [{ title: 'Pink' }]
    }
  ];

  test('renders mini images with correct properties', () => {
    render(<MiniImages jewelriesByCategory={jewelriesByCategory} clickHandler={mockClickHandler} />);

    // Verify mini images are rendered
    Object.entries(MINI_IMAGES_BY_TITLE_AND_IMAGE_URL).forEach(([colorName, { title, imageUrl }]) => {
      const image = screen.getByTestId(`image-${colorName}`);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', imageUrl);
      expect(image).toHaveAttribute('alt', title);
    });
  });

  test('renders the active mini image with the correct class', () => {
    render(<MiniImages jewelriesByCategory={jewelriesByCategory} clickHandler={mockClickHandler} />);

    // Verify that the active mini image has the correct class
    const activeColorName = jewelriesByCategory[0].colors[0].title;
    const activeColorClass = COLORS_BY_TITLE[activeColorName];

    const activeImage = screen.getByTestId(`image-${activeColorName}`);
    expect(activeImage).toHaveClass("active");
  });

  test('clicking on a mini image updates the active image and calls clickHandler', () => {
    render(<MiniImages jewelriesByCategory={jewelriesByCategory} clickHandler={mockClickHandler} />);

    // Click on a different mini image
    const [colorName] = Object.keys(MINI_IMAGES_BY_TITLE_AND_IMAGE_URL);
    const imageToClick = screen.getByTestId(`image-${colorName}`);
    fireEvent.click(imageToClick);

    // Verify clickHandler was called with the correct colorName
    expect(mockClickHandler).toHaveBeenCalledWith(colorName);
    expect(mockClickHandler).toHaveBeenCalledTimes(1);

    // Verify that the clicked image is now active
    expect(imageToClick).toHaveClass("active");
  });
});

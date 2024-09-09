import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MiniImages } from "./MiniImages";

import { MINI_IMAGES_BY_TITLE_AND_IMAGE_URL } from "./constants/miniImagesByTitleAndImageUrl";

jest.mock("./Image/Image", () => ({
  Image: ({ imageUrl, title, colorName, updateActiveMiniImage, isActive }) => (
    <img
      src={imageUrl}
      alt={title}
      data-testid={`image-${colorName}`}
      className={isActive ? "active" : ""}
      onClick={() => updateActiveMiniImage(colorName)}
    />
  ),
}));

describe("MiniImages Component", () => {
  const mockClickHandler = jest.fn();

  const jewelriesByCategory = [
    {
      colors: [{ title: "Pink" }],
    },
  ];

  test("renders mini images with correct properties", () => {
    render(
      <MiniImages
        jewelriesByCategory={jewelriesByCategory}
        clickHandler={mockClickHandler}
      />
    );

    Object.entries(MINI_IMAGES_BY_TITLE_AND_IMAGE_URL).forEach(
      ([colorName, { title, imageUrl }]) => {
        const image = screen.getByTestId(`image-${colorName}`);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", imageUrl);
        expect(image).toHaveAttribute("alt", title);
      }
    );
  });

  test("renders the active mini image with the correct class", () => {
    render(
      <MiniImages
        jewelriesByCategory={jewelriesByCategory}
        clickHandler={mockClickHandler}
      />
    );

    const activeColorName = jewelriesByCategory[0].colors[0].title;

    const activeImage = screen.getByTestId(`image-${activeColorName}`);
    expect(activeImage).toHaveClass("active");
  });

  test("clicking on a mini image updates the active image and calls clickHandler", () => {
    render(
      <MiniImages
        jewelriesByCategory={jewelriesByCategory}
        clickHandler={mockClickHandler}
      />
    );

    const [colorName] = Object.keys(MINI_IMAGES_BY_TITLE_AND_IMAGE_URL);
    const imageToClick = screen.getByTestId(`image-${colorName}`);
    fireEvent.click(imageToClick);

    expect(mockClickHandler).toHaveBeenCalledWith(colorName);
    expect(mockClickHandler).toHaveBeenCalledTimes(1);

    expect(imageToClick).toHaveClass("active");
  });
});

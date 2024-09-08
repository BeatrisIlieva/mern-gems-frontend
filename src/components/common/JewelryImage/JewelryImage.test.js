import { render, screen, fireEvent } from "@testing-library/react";

import { JewelryImage } from "./JewelryImage";

jest.mock("./JewelryImage.module.css", () => ({
  "jewelry-image": "jewelry-image",
  "slide-in-right": "slide-in-right",
  "slide-in-left": "slide-in-left",
}));

describe("JewelryImage Component", () => {
  const mockClickHandler = jest.fn();

  test("renders JewelryImage with correct attributes and class names when firstImageUrlIsActive is true", () => {
    render(
      <JewelryImage
        firstImageUrlIsActive={true}
        firstImageUrl="https://example.com/first.jpg"
        secondImageUrl="https://example.com/second.jpg"
        title="Jewelry Image"
        clickHandler={mockClickHandler}
      />
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", "https://example.com/first.jpg");
    expect(image).toHaveAttribute("alt", "Jewelry Image");

    expect(image).toHaveClass("jewelry-image");
    expect(image).toHaveClass("slide-in-right");
  });

  test("renders JewelryImage with correct attributes and class names when firstImageUrlIsActive is false", () => {
    render(
      <JewelryImage
        firstImageUrlIsActive={false}
        firstImageUrl="https://example.com/first.jpg"
        secondImageUrl="https://example.com/second.jpg"
        title="Jewelry Image"
        clickHandler={mockClickHandler}
      />
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", "https://example.com/second.jpg");
    expect(image).toHaveAttribute("alt", "Jewelry Image");

    expect(image).toHaveClass("jewelry-image");
    expect(image).toHaveClass("slide-in-left");
  });

  test("calls clickHandler when image is clicked", () => {
    render(
      <JewelryImage
        firstImageUrlIsActive={true}
        firstImageUrl="https://example.com/first.jpg"
        secondImageUrl="https://example.com/second.jpg"
        title="Jewelry Image"
        clickHandler={mockClickHandler}
      />
    );

    const image = screen.getByRole("img");

    fireEvent.click(image);

    expect(mockClickHandler).toHaveBeenCalled();
  });
});

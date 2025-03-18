import { render, fireEvent, screen } from "@testing-library/react";
import { Image } from "./Image";

describe("Image Component", () => {
  const mockClickHandler = jest.fn();

  test("renders the image correctly", () => {
    render(
      <Image
        isTransitioning={false}
        clickHandler={mockClickHandler}
        imageUrl={"image-url"}
        altText={"flag"}
      />
    );

    const img = screen.getByAltText("flag");
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("image-url");
  });

  test("calls clickHandler on click", () => {
    render(
      <Image
        isTransitioning={false}
        clickHandler={mockClickHandler}
        imageUrl={"image-url"}
        altText={"flag"}
      />
    );

    const img = screen.getByAltText("flag");
    fireEvent.click(img);
    expect(mockClickHandler).toHaveBeenCalled();
  });
});

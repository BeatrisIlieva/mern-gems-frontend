import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { JewelryCard } from "./JewelryCard";

describe("JewelryCard component", () => {
  const mockImageUrl = "https://example.com/jewelry.jpg";
  const mockTitle = "Beautiful Necklace";

  test("renders the image with the correct src and alt attributes", () => {
    render(
      <JewelryCard firstImageUrl={mockImageUrl} jewelryTitle={mockTitle} />
    );

    const imgElement = screen.getByAltText(mockTitle);
    expect(imgElement).toBeInTheDocument();

    expect(imgElement).toHaveAttribute("src", mockImageUrl);

    expect(imgElement).toHaveAttribute("alt", mockTitle);
  });

  test("applies the correct CSS class to the image", () => {
    const { container } = render(
      <JewelryCard firstImageUrl={mockImageUrl} jewelryTitle={mockTitle} />
    );

    const imgElement = container.querySelector("img");
    expect(imgElement).toHaveClass("image");
  });
});

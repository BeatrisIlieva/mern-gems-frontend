import { render, screen } from "@testing-library/react";
import { Image } from "./Image";

// Mock the CSS module
jest.mock("./Image.module.css", () => ({
  image: "mocked-image-class",
}));

describe("Image Component", () => {
  const mockImage = "https://example.com/image.jpg";
  const mockTitle = "Sample Jewelry";

  it("renders an image element", () => {
    render(<Image image={mockImage} title={mockTitle} />);

    // Check if the img element is rendered
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });

  it("sets the correct src and alt attributes", () => {
    render(<Image image={mockImage} title={mockTitle} />);

    const imgElement = screen.getByRole("img");

    // Verify the src attribute
    expect(imgElement).toHaveAttribute("src", mockImage);

    // Verify the alt attribute
    expect(imgElement).toHaveAttribute("alt", mockTitle);
  });

  it("applies the correct CSS class", () => {
    render(<Image image={mockImage} title={mockTitle} />);

    const imgElement = screen.getByRole("img");

    // Verify the correct CSS class is applied
    expect(imgElement).toHaveClass("mocked-image-class");
  });
});

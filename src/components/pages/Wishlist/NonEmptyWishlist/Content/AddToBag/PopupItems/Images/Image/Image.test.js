import { render, screen } from "@testing-library/react";
import { Image } from "./Image";

jest.mock("./Image.module.css", () => ({
  image: "mocked-image-class",
}));

describe("Image Component", () => {
  const mockImage = "https://example.com/image.jpg";
  const mockTitle = "Sample Jewelry";

  test("renders an image element", () => {
    render(<Image image={mockImage} title={mockTitle} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });

  test("sets the correct src and alt attributes", () => {
    render(<Image image={mockImage} title={mockTitle} />);

    const imgElement = screen.getByRole("img");

    expect(imgElement).toHaveAttribute("src", mockImage);

    expect(imgElement).toHaveAttribute("alt", mockTitle);
  });

  test("applies the correct CSS class", () => {
    render(<Image image={mockImage} title={mockTitle} />);

    const imgElement = screen.getByRole("img");

    expect(imgElement).toHaveClass("mocked-image-class");
  });
});

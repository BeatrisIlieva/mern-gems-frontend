import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { InfoMessage } from "./InfoMessage";

describe("InfoMessage component", () => {
  const mockTitle = "Test Title";
  const mockSubtitle = "Test Subtitle";

  test("renders the title and subtitle correctly", () => {
    render(<InfoMessage title={mockTitle} subtitle={mockSubtitle} />);

    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(mockTitle);

    const subtitleElement = screen.getByText(mockSubtitle);
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement).toHaveTextContent(mockSubtitle);
  });

  test("renders the image with the correct src and alt attributes", () => {
    render(<InfoMessage title={mockTitle} subtitle={mockSubtitle} />);

    const imgElement = screen.getByAltText("ribbon");
    expect(imgElement).toBeInTheDocument();

    expect(imgElement).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/deztgvefu/image/upload/v1725543807/forget-me-not-collection/miniImages/pngtree-sweet-pink-ribbon-png-image_13127280_cfwfwv.png"
    );
  });

  test("applies correct CSS classes", () => {
    const { container } = render(
      <InfoMessage title={mockTitle} subtitle={mockSubtitle} />
    );

    const sectionElement = container.querySelector("section");
    expect(sectionElement).toHaveClass("info-message");

    const imgElement = container.querySelector("img");
    expect(imgElement).toHaveClass("ribbon");
  });
});

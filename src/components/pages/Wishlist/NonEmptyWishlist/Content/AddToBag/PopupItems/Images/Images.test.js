import { render, screen } from "@testing-library/react";
import { Images } from "./Images";

// Mock child components
jest.mock("./Image/Image", () => ({
  Image: ({ image, title }) => (
    <div data-testid="image-component">
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  ),
}));

jest.mock("../../../../../../../reusable/Images/Images", () => ({
  Images: ({ jewelriesByCategory, backgroundColor }) => (
    <div data-testid="single-image-component">
      {jewelriesByCategory.length} items with background: {backgroundColor}
    </div>
  ),
}));

describe("Images Component", () => {
  const mockJewelries = [
    {
      firstImageUrl: "https://example.com/first-image.jpg",
      secondImageUrl: "https://example.com/second-image.jpg",
      categories: [{ title: "Necklace" }],
    },
  ];

  it("renders without crashing", () => {
    render(<Images jewelriesByCategory={mockJewelries} />);

    // Check if both Image components are rendered
    const imageComponents = screen.getAllByTestId("image-component");
    expect(imageComponents.length).toBe(2);

    // Check if SingleImage component is rendered
    const singleImageComponent = screen.getByTestId("single-image-component");
    expect(singleImageComponent).toBeInTheDocument();
  });

  it("passes correct props to Image components", () => {
    render(<Images jewelriesByCategory={mockJewelries} />);

    // Verify the first Image component props
    const imageComponents = screen.getAllByTestId("image-component");

    expect(imageComponents[0].querySelector("img").src).toBe(
      "https://example.com/first-image.jpg"
    );
    expect(imageComponents[0].querySelector("span").textContent).toBe(
      "Necklace"
    );

    // Verify the second Image component props
    expect(imageComponents[1].querySelector("img").src).toBe(
      "https://example.com/second-image.jpg"
    );
    expect(imageComponents[1].querySelector("span").textContent).toBe(
      "Necklace"
    );
  });

  it("passes correct props to SingleImage component", () => {
    render(<Images jewelriesByCategory={mockJewelries} />);

    const singleImageComponent = screen.getByTestId("single-image-component");

    // Verify that the SingleImage component receives the correct props
    expect(singleImageComponent).toHaveTextContent("1 items with background: with-background");
  });
});

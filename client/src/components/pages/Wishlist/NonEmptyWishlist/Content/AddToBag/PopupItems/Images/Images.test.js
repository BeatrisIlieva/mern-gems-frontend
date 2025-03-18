import { render, screen } from "@testing-library/react";
import { Images } from "./Images";

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

  test("renders without crashing", () => {
    render(<Images jewelriesByCategory={mockJewelries} />);

    const imageComponents = screen.getAllByTestId("image-component");
    expect(imageComponents.length).toBe(2);

    const singleImageComponent = screen.getByTestId("single-image-component");
    expect(singleImageComponent).toBeInTheDocument();
  });

  test("passes correct props to Image components", () => {
    render(<Images jewelriesByCategory={mockJewelries} />);

    const imageComponents = screen.getAllByTestId("image-component");

    expect(imageComponents[0].querySelector("img").src).toBe(
      "https://example.com/first-image.jpg"
    );
    expect(imageComponents[0].querySelector("span").textContent).toBe(
      "Necklace"
    );

    expect(imageComponents[1].querySelector("img").src).toBe(
      "https://example.com/second-image.jpg"
    );
    expect(imageComponents[1].querySelector("span").textContent).toBe(
      "Necklace"
    );
  });

  test("passes correct props to SingleImage component", () => {
    render(<Images jewelriesByCategory={mockJewelries} />);

    const singleImageComponent = screen.getByTestId("single-image-component");

    expect(singleImageComponent).toHaveTextContent(
      "1 items with background: with-background"
    );
  });
});

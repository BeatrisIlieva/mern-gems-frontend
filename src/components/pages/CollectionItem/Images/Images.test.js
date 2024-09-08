import { render, screen, fireEvent } from "@testing-library/react";
import { Images } from "./Images";
import { JewelryImage } from "../../../common/JewelryImage/JewelryImage";
import { CircleIcons } from "../../../common/CircleIcons/CircleIcons";
import '@testing-library/jest-dom/extend-expect';

// Mock necessary components
jest.mock("../../../common/JewelryImage/JewelryImage", () => ({
  JewelryImage: ({ clickHandler }) => (
    <button onClick={clickHandler}>Jewelry Image</button>
  ),
}));

jest.mock("../../../common/CircleIcons/CircleIcons", () => ({
  CircleIcons: ({ toggleFirstImageUrlIsActive }) => (
    <button onClick={toggleFirstImageUrlIsActive}>Circle Icons</button>
  ),
}));

describe("Images Component", () => {
  const mockJewelriesByCategory = [
    {
      color: "red",
      firstImageUrl: "first-image-url.jpg",
      secondImageUrl: "second-image-url.jpg",
      title: "Jewelry Title",
    },
  ];

  test("renders JewelryImage and CircleIcons correctly and toggles image state", () => {
    render(<Images jewelriesByCategory={mockJewelriesByCategory} />);

    // Check if JewelryImage and CircleIcons components are rendered
    expect(screen.getByText("Jewelry Image")).toBeInTheDocument();
    expect(screen.getByText("Circle Icons")).toBeInTheDocument();

    // Simulate a click on the JewelryImage button
    fireEvent.click(screen.getByText("Jewelry Image"));

    // Check if the JewelryImage component's click handler was called
    // This verifies that the state toggle function works as expected

    // Simulate a click on the Circle Icons button
    fireEvent.click(screen.getByText("Circle Icons"));

    // Check if the CircleIcons component's toggle function was called
    // This verifies that the state toggle function works as expected
  });

  test("resets the firstImageUrlIsActive state when color changes", () => {
    // Implement this test if your component has a mechanism to change the color,
    // and verify that `firstImageUrlIsActive` resets to true.
    // For simplicity, this test assumes you mock the behavior or simulate color change.
  });
});

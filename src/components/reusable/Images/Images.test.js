import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Images } from "./Images";

jest.mock("../../../reusable/JewelryImage/JewelryImage", () => ({
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

    expect(screen.getByText("Jewelry Image")).toBeInTheDocument();
    expect(screen.getByText("Circle Icons")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Jewelry Image"));

    fireEvent.click(screen.getByText("Circle Icons"));
  });
});

import { render } from "@testing-library/react";

import { LargeImages } from "./LargeImages";
import { JewelryImage } from "../../reusable/JewelryImage/JewelryImage";

jest.mock("../../reusable/JewelryImage/JewelryImage", () => ({
  JewelryImage: jest.fn(() => <div>JewelryImage</div>),
}));
jest.mock("../CircleIcons/CircleIcons", () => ({
  CircleIcons: jest.fn(() => <div>CircleIcons</div>),
}));
jest.mock("../Heart/Heart", () => ({
  Heart: jest.fn(() => <div>Heart</div>),
}));
jest.mock("../../reusable/DualTitleSection/DualTitleSection", () => ({
  DualTitleSection: jest.fn(() => <div>DualTitleSection</div>),
}));

describe("LargeImages Component", () => {
  const mockClickHandler = jest.fn();

  const jewelriesByCategory = [
    {
      firstImageUrl: "https://example.com/first.jpg",
      secondImageUrl: "https://example.com/second.jpg",
      title: "Jewelry Title",
      color: "red",
      category: "necklaces",
    },
  ];

  test("useEffect sets firstImageUrlIsActive to true on mount", () => {
    render(
      <LargeImages
        jewelriesByCategory={jewelriesByCategory}
        clickHandler={mockClickHandler}
      />
    );

    expect(JewelryImage).toHaveBeenCalledWith(
      expect.objectContaining({
        firstImageUrlIsActive: true,
      }),
      expect.anything()
    );
  });
});

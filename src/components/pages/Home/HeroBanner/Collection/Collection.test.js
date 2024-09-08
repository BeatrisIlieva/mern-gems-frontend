import { render, screen } from "@testing-library/react";

import { Collection } from "./Collection";

jest.mock("./Description/Description", () => ({
  Description: () => <div>Mocked Description Component</div>,
}));

describe("Collection Component", () => {
  test("renders the image with correct src attribute", () => {
    render(<Collection />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/deztgvefu/image/upload/v1716995569/collections/forgetmenot_rz0umv.png"
    );
  });

  test("renders the Description component", () => {
    render(<Collection />);

    const descriptionElement = screen.getByText("Mocked Description Component");
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders the collection overlay", () => {
    const { container } = render(<Collection />);

    const overlayDiv = container.querySelector(".collection-overlay");
    expect(overlayDiv).toBeInTheDocument();
  });
});

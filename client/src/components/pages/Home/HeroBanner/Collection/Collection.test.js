import { render, screen } from "@testing-library/react";

import { Collection } from "./Collection";

jest.mock("./Description/Description", () => ({
  Description: () => <div>Mocked Description Component</div>,
}));

describe("Collection Component", () => {
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

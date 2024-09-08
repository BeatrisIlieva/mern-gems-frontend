import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { NormalTitle } from "./NormalTitle";

describe("NormalTitle component", () => {
  const mockTitle = "Test Title";
  const mockVariant = "bolded";

  test("renders the title correctly", () => {
    render(<NormalTitle title={mockTitle} variant={mockVariant} />);

    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(mockTitle);
  });

  test("applies correct CSS classes", () => {
    const { container } = render(
      <NormalTitle title={mockTitle} variant={mockVariant} />
    );

    const headingElement = container.querySelector("h4");
    expect(headingElement).toHaveClass("bolded");
  });
});

import { render, screen } from "@testing-library/react";

import { Label } from "./Label";

describe("Label Component", () => {
  it("renders the correct title", () => {
    const mockTitle = "Test Title";

    render(<Label title={mockTitle} />);

    const labelElement = screen.getByRole("heading", { level: 3 });
    expect(labelElement).toHaveTextContent(mockTitle);
  });

  it("applies the correct CSS class", () => {
    const mockTitle = "Test Title";

    render(<Label title={mockTitle} />);

    const labelElement = screen.getByRole("heading", { level: 3 });
    expect(labelElement).toHaveClass("label");
  });
});

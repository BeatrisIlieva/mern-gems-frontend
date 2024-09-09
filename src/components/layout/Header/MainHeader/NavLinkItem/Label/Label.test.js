import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

// Test suite for the Label component
describe("Label Component", () => {
  it("renders the correct title", () => {
    const mockTitle = "Test Title";

    // Render the Label component with the mock title prop
    render(<Label title={mockTitle} />);

    // Check if the title is rendered correctly
    const labelElement = screen.getByRole("heading", { level: 3 });
    expect(labelElement).toHaveTextContent(mockTitle);
  });

  it("applies the correct CSS class", () => {
    const mockTitle = "Test Title";

    // Render the Label component
    render(<Label title={mockTitle} />);

    // Check if the correct CSS class is applied
    const labelElement = screen.getByRole("heading", { level: 3 });
    expect(labelElement).toHaveClass("label");
  });
});

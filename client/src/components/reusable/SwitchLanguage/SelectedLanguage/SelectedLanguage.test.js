import { render, fireEvent, screen } from "@testing-library/react";
import { SelectedLanguage } from "./SelectedLanguage";

describe("SelectedLanguage Component", () => {
  const mockHandler = jest.fn();

  test("renders the SelectedLanguage component with correct icon", () => {
    render(
      <SelectedLanguage
        updateIsTransitioningHandler={mockHandler}
        displayDropdown={false}
        isTransitioning={false}
        selectedImage={"image-url"}
      />
    );

    const img = screen.getByAltText("flag");
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("image-url");

    const icon = screen.getByTestId("caret-icon");
    expect(icon).toHaveClass("fa-caret-down");
  });

  test("displays up icon when dropdown is open", () => {
    render(
      <SelectedLanguage
        updateIsTransitioningHandler={mockHandler}
        displayDropdown={true}
        isTransitioning={false}
        selectedImage={"image-url"}
      />
    );

    const icon = screen.getByTestId("caret-icon");
    expect(icon).toHaveClass("fa-caret-up");
  });

  test("calls handler on icon click", () => {
    render(
      <SelectedLanguage
        updateIsTransitioningHandler={mockHandler}
        displayDropdown={false}
        isTransitioning={false}
        selectedImage={"image-url"}
      />
    );

    const icon = screen.getByTestId("caret-icon");
    fireEvent.click(icon);
    expect(mockHandler).toHaveBeenCalled();
  });
});

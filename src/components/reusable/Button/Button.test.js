import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { Button } from "./Button";

describe("Button Component", () => {
  test("renders the button with the correct text", () => {
    render(<Button title="Click Me" />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("applies the correct class names based on props", () => {
    const { container } = render(<Button title="Click Me" variant="primary" />);

    const button = container.querySelector("button");
    expect(button).toHaveClass("button primary");
  });

  test("disables the button when buttonIsDisabled is true", () => {
    render(<Button title="Click Me" buttonIsDisabled />);

    const button = screen.getByText("Click Me");
    expect(button).toBeDisabled();
  });

  test("shows loading text when isLoading is true", () => {
    render(<Button title="Click Me" isLoading />);

    expect(screen.getByText("Processing...")).toBeInTheDocument();
  });

  test("calls callBackFunction on click", () => {
    const mockCallBackFunction = jest.fn();
    render(<Button title="Click Me" callBackFunction={mockCallBackFunction} />);

    fireEvent.click(screen.getByText("Click Me"));

    expect(mockCallBackFunction).toHaveBeenCalledTimes(1);
  });

  test("changes appearance on hover", () => {
    const { container } = render(<Button title="Hover Me" variant="primary" />);

    const button = container.querySelector("button");

    act(() => {
      fireEvent.mouseEnter(button);
    });

    expect(button).toHaveClass("hovered");

    act(() => {
      fireEvent.mouseLeave(button);
    });

    expect(button).not.toHaveClass("hovered");
  });

  test("handles touch events correctly", () => {
    const { container } = render(<Button title="Touch Me" variant="primary" />);
    const button = container.querySelector("button");

    act(() => {
      fireEvent.touchStart(button);
    });

    expect(button).toHaveClass("hovered");

    act(() => {
      fireEvent.touchEnd(button);
    });

    expect(button).not.toHaveClass("hovered");
  });
});

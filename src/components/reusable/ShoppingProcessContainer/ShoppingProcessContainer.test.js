import { render } from "@testing-library/react";

import { ShoppingProcessContainer } from "./ShoppingProcessContainer";

import styles from "./ShoppingProcessContainer.module.css";

describe("ShoppingProcessContainer Component", () => {
  test("renders with the correct class names and children", () => {
    const { container, getByText } = render(
      <ShoppingProcessContainer>
        <div>Child Content</div>
      </ShoppingProcessContainer>
    );

    const sectionElement = container.querySelector("section");
    expect(sectionElement).toHaveClass(styles["shopping-process-container"]);

    const divElement = container.querySelector("div");
    expect(divElement).toHaveClass(styles["children"]);

    expect(getByText("Child Content")).toBeInTheDocument();
  });
});

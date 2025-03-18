import { render } from "@testing-library/react";

import { CheckoutProcessContainer } from "./CheckoutProcessContainer";

import styles from "./CheckoutProcessContainer.module.css";

describe("CheckoutProcessContainer Component", () => {
  test("renders with the correct class names and children", () => {
    const { container, getByText } = render(
      <CheckoutProcessContainer>
        <div>Child Content</div>
      </CheckoutProcessContainer>
    );

    const sectionElement = container.querySelector("section");
    expect(sectionElement).toHaveClass(styles["shopping-process-container"]);

    const divElement = container.querySelector("div");
    expect(divElement).toHaveClass(styles["children"]);

    expect(getByText("Child Content")).toBeInTheDocument();
  });
});

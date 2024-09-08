import { render } from "@testing-library/react";

import { Delivery } from "./Delivery";

import styles from "./Delivery.module.css";

describe("Delivery Component", () => {
  test("applies the correct CSS class to the outer div", () => {
    const { container } = render(<Delivery />);

    const outerDiv = container.querySelector(`.${styles["delivery"]}`);
    expect(outerDiv).toBeInTheDocument();
  });
});

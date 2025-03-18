import { render } from "@testing-library/react";

import { Title } from "./Title";

import styles from "./Title.module.css";

describe("Title Component", () => {
  test("renders the title text correctly", () => {
    const titleText = "Sample Title";

    const { getByText } = render(<Title title={titleText} variant="default" />);

    expect(getByText(titleText)).toBeInTheDocument();
  });

  test("applies the correct variant class", () => {
    const titleText = "Sample Title";
    const variant = "primary";

    const { container } = render(<Title title={titleText} variant={variant} />);

    const titleElement = container.querySelector("span");
    expect(titleElement).toHaveClass(styles["title"]);
    expect(titleElement).toHaveClass(styles[variant]);
  });

  test("always applies the default title class", () => {
    const titleText = "Sample Title";

    const { container } = render(
      <Title title={titleText} variant="secondary" />
    );

    const titleElement = container.querySelector("span");
    expect(titleElement).toHaveClass(styles["title"]);
  });
});

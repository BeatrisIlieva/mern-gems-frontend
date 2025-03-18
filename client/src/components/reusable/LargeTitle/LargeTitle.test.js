import { render } from "@testing-library/react";

import { LargeTitle } from "./LargeTitle";

import styles from "./LargeTitle.module.css";

describe("LargeTitle Component", () => {
  test("renders the title text correctly", () => {
    const titleText = "Sample Title";

    const { getByText } = render(
      <LargeTitle title={titleText} textAlign="center" />
    );

    expect(getByText(titleText)).toBeInTheDocument();
  });

  test("applies the correct textAlign class", () => {
    const titleText = "Sample Title";
    const textAlign = "center";

    const { container } = render(
      <LargeTitle title={titleText} textAlign={textAlign} />
    );

    const titleElement = container.querySelector("h2");
    expect(titleElement).toHaveClass(styles["title"]);
    expect(titleElement).toHaveClass(styles[textAlign]);
  });

  test("always applies the default title class", () => {
    const titleText = "Sample Title";

    const { container } = render(
      <LargeTitle title={titleText} textAlign="left" />
    );

    const titleElement = container.querySelector("h2");
    expect(titleElement).toHaveClass(styles["title"]);
  });
});

import { render } from "@testing-library/react";

import { Paragraph } from "./Paragraph";

import styles from "./Paragraph.module.css";

describe("Paragraph Component", () => {
  test("renders the text correctly", () => {
    const paragraphText = "This is a sample paragraph.";

    const { getByText } = render(
      <Paragraph text={paragraphText} textAlign="left" color="black" />
    );

    expect(getByText(paragraphText)).toBeInTheDocument();
  });

  test("applies the correct textAlign class", () => {
    const paragraphText = "This is a sample paragraph.";
    const textAlign = "center";

    const { container } = render(
      <Paragraph text={paragraphText} textAlign={textAlign} color="black" />
    );

    const paragraphElement = container.querySelector("p");
    expect(paragraphElement).toHaveClass(styles["paragraph"]);
    expect(paragraphElement).toHaveClass(styles[textAlign]);
  });

  test("applies the correct color class", () => {
    const paragraphText = "This is a sample paragraph.";
    const color = "red";

    const { container } = render(
      <Paragraph text={paragraphText} textAlign="left" color={color} />
    );

    const paragraphElement = container.querySelector("p");
    expect(paragraphElement).toHaveClass(styles["paragraph"]);
    expect(paragraphElement).toHaveClass(styles[color]);
  });

  test("always applies the default paragraph class", () => {
    const paragraphText = "This is a sample paragraph.";

    const { container } = render(
      <Paragraph text={paragraphText} textAlign="left" color="black" />
    );

    const paragraphElement = container.querySelector("p");
    expect(paragraphElement).toHaveClass(styles["paragraph"]);
  });
});

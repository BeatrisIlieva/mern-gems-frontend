import { render } from "@testing-library/react";

import { HorizontalLine } from "./HorizontalLine";

import styles from "./HorizontalLine.module.css";

describe("HorizontalLine Component", () => {
  test("renders with header variant", () => {
    const { container } = render(
      <HorizontalLine variantHorizontalLine="header" variantHr="thin" />
    );

    const divElement = container.querySelector(
      `.${styles["horizontal-line-header"]}`
    );
    expect(divElement).toBeInTheDocument();
  });

  test("renders with default variant", () => {
    const { container } = render(
      <HorizontalLine variantHorizontalLine="default" variantHr="thick" />
    );

    const divElement = container.querySelector(`.${styles["horizontal-line"]}`);
    expect(divElement).toBeInTheDocument();
  });

  test("applies correct classes to hr elements", () => {
    const { container } = render(
      <HorizontalLine variantHorizontalLine="header" variantHr="thin" />
    );

    const hrElements = container.querySelectorAll(
      `.${styles["hr-line"]}.${styles["thin"]}`
    );
    expect(hrElements).toHaveLength(2);
  });

  test("renders image with correct src", () => {
    const { getByAltText } = render(
      <HorizontalLine variantHorizontalLine="header" variantHr="thin" />
    );

    const imgElement = getByAltText("");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/deztgvefu/image/upload/v1724934188/forget-me-not-collection/miniImages/forget_me_not_earrings_diamond_and_pink_sapphire_eapsp1mflrfmn_ee-1_k5iyct_1_liyyq0_1_1_nyks5t.png"
    );
  });
});

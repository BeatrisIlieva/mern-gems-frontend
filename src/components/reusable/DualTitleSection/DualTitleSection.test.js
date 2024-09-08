import { render } from "@testing-library/react";

import { DualTitleSection } from "./DualTitleSection";

import styles from "./DualTitleSection.module.css";

jest.mock("./Title/Title", () => ({
  Title: ({ title, variant }) => (
    <div>
      <span>{title}</span>
      <span>{variant}</span>
    </div>
  ),
}));

describe("DualTitleSection Component", () => {
  test("applies the correct class to the wrapper", () => {
    const { getByTestId } = render(
      <DualTitleSection
        firstTitle="Title 1"
        secondTitle="Title 2"
        variant="secondary"
      />
    );

    const wrapper = getByTestId("dual-title-section");
    expect(wrapper).toHaveClass(styles["wrapper"]);
  });
});

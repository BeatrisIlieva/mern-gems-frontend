import { render, screen } from "@testing-library/react";

import { Popup } from "./Popup";

import styles from "./Popup.module.css";

const renderPopup = (movePopup) => {
  return render(
    <Popup movePopup={movePopup}>
      <div>Popup Content</div>
    </Popup>
  );
};

describe("Popup Component", () => {
  test("renders children correctly", () => {
    renderPopup(false);

    expect(screen.getByText("Popup Content")).toBeInTheDocument();
  });

  test("applies transition-in class when movePopup is false", () => {
    const { container } = renderPopup(false);

    const overlay = container.querySelector(`.${styles["overlay"]}`);
    const modal = container.querySelector(`.${styles["modal"]}`);

    expect(overlay).toHaveClass(styles["transition-in"]);
    expect(modal).toHaveClass(styles["slide-in"]);
  });

  test("applies transition-out class when movePopup is true", () => {
    const { container } = renderPopup(true);

    const overlay = container.querySelector(`.${styles["overlay"]}`);
    const modal = container.querySelector(`.${styles["modal"]}`);

    expect(overlay).toHaveClass(styles["transition-out"]);
    expect(modal).toHaveClass(styles["slide-out"]);
  });
});

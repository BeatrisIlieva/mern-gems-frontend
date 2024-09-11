import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { Popup } from "./Popup";

import styles from "./Popup.module.css";

jest.mock("../../common/XMark/XMark", () => ({
  XMark: ({ callbackFunction }) => (
    <button onClick={callbackFunction}>Close</button>
  ),
}));

describe("Popup Component", () => {
  test("renders with the correct classes and children", () => {
    const { container } = render(
      <Popup
        toggleDisplayPopup={() => {}}
        modalVariant="large"
        overlayVariant="dark"
      >
        <div>Popup Content</div>
      </Popup>
    );

    const sectionElement = container.querySelector("section");
    const divElement = container.querySelector("div.modal");

    expect(sectionElement).toHaveClass(styles["overlay"]);
    expect(sectionElement).toHaveClass(styles["dark"]);
    expect(divElement).toHaveClass(styles["modal"]);
    expect(divElement).toHaveClass(styles["large"]);
    expect(screen.getByText("Popup Content")).toBeInTheDocument();
  });

  test("calls popupCloseHandler when XMark is clicked", async () => {
    const toggleDisplayPopup = jest.fn();

    render(
      <Popup
        toggleDisplayPopup={toggleDisplayPopup}
        modalVariant="large"
        overlayVariant="dark"
      >
        <div>Popup Content</div>
      </Popup>
    );

    fireEvent.click(screen.getByText("Close"));

    await waitFor(() => {
      expect(toggleDisplayPopup).toHaveBeenCalledTimes(1);
    });
  });

  test("applies transitioning classes when isTransitioning is true", async () => {
    const { container } = render(
      <Popup
        toggleDisplayPopup={() => {}}
        modalVariant="large"
        overlayVariant="dark"
      >
        <div>Popup Content</div>
      </Popup>
    );

    const sectionElement = container.querySelector("section");
    const divElement = container.querySelector("div.modal");

    fireEvent.click(screen.getByText("Close"));

    await waitFor(() => {
      expect(sectionElement).toHaveClass(styles["transition-out"]);
      expect(divElement).toHaveClass(styles["slide-out"]);
    });
  });
});

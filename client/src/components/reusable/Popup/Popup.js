import { XMark } from "../../reusable/XMark/XMark";
import { CursorImageEffect } from "../../common/CursorImageEffect/CursorImageEffect";

import { usePopup } from "../../../hooks/usePopup";

import styles from "./Popup.module.css";

export const Popup = ({
  toggleDisplayPopup,
  children,
  displayPopup,
  movePopup,
  overlayVariant,
  modalVariant,
}) => {
  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleDisplayPopup,
    displayPopup,
  });

  const transitionStyle =
    modalVariant === "top"
      ? `${
          isTransitioning || movePopup
            ? styles["slide-out-top"]
            : styles["slide-in-top"]
        }`
      : `${
          isTransitioning || movePopup
            ? styles["slide-out-right"]
            : styles["slide-in-right"]
        }`;

  return (
    <section
      className={`${styles["overlay"]} ${styles[overlayVariant]} ${
        isTransitioning || movePopup
          ? styles["transition-out"]
          : styles["transition-in"]
      }`}
    >
      <CursorImageEffect />
      <div
        ref={popupRef}
        className={`${styles["modal"]} ${styles[modalVariant]} ${transitionStyle}`}
      >
        <XMark callbackFunction={popupCloseHandler} />
        {children}
      </div>
    </section>
  );
};

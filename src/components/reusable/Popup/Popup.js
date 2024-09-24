import { XMark } from "../../reusable/XMark/XMark";
import { CursorImageEffect } from "../../common/CursorImageEffect/CursorImageEffect";

import { usePopup } from "../../../hooks/usePopup";

import styles from "./Popup.module.css";

export const Popup = ({
  toggleDisplayPopup,
  children,
  displayPopup,
  movePopup,
}) => {
  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleDisplayPopup,
    displayPopup,
  });

  return (
    <section
      className={`${styles["overlay"]} ${
        isTransitioning || movePopup
          ? styles["transition-out"]
          : styles["transition-in"]
      }`}
    >
      <CursorImageEffect />
      <div
        ref={popupRef}
        className={`${styles["modal"]} ${
          isTransitioning || movePopup
            ? styles["slide-out"]
            : styles["slide-in"]
        }`}
      >
        <XMark callbackFunction={popupCloseHandler} />
        {children}
      </div>
    </section>
  );
};

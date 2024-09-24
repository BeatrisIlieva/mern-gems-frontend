import { CursorImageEffect } from "../../../../common/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../../../reusable/XMark/XMark";

import { usePopup } from "../../../../../hooks/usePopup";

import styles from "./Popup.module.css";

export const Popup = ({ toggleDisplayPopup, displayPopup }) => {
  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleDisplayPopup,
    displayPopup,
  });

  return (
    <section
      className={`${styles["overlay"]} ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
    >
      <CursorImageEffect />
      <div
        ref={popupRef}
        className={`${styles["modal"]} ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        <XMark callbackFunction={popupCloseHandler} />
        <div className={styles["mini-bag"]}>Content</div>
      </div>
    </section>
  );
};

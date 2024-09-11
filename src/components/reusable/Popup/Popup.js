import { XMark } from "../../common/XMark/XMark";

import { usePopup } from "../../../hooks/usePopup";

import styles from "./Popup.module.css";

export const Popup = ({
  toggleDisplayPopup,
  children,
  modalVariant,
  overlayVariant,
  displayPopup,
}) => {
  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleDisplayPopup,
    displayPopup,
  });

  return (
    <section
      className={`${styles["overlay"]}  ${styles[overlayVariant]} ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
    >
      <div
        className={`${styles["modal"]} ${styles[modalVariant]} ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        <XMark callbackFunction={popupCloseHandler} />
        <div ref={popupRef} className={styles["content"]}>
          {children}
        </div>
      </div>
    </section>
  );
};

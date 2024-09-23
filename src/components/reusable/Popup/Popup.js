import { XMark } from "../../reusable/XMark/XMark";

import { usePopup } from "../../../hooks/usePopup";

import styles from "./Popup.module.css";

export const Popup = ({
  toggleDisplayPopup,
  children,
  modalVariant,
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
      <div
        className={`${styles["modal"]} ${styles[modalVariant]} ${
          isTransitioning || movePopup
            ? styles["slide-out"]
            : styles["slide-in"]
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

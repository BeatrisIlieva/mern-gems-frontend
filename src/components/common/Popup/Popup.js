import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Popup.module.css";

export const Popup = ({
  popupCloseHandler,
  children,
  modalVariant,
  overlayVariant,
}) => {
  const showXMark = modalVariant !== "authentication";

  const [isTransitioning, setIsTransitioning] = useState(false);

  const closeHandler = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      popupCloseHandler();
      setIsTransitioning(false);
    }, 400);
  };

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
        {showXMark && (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles["x-mark"]}
            onClick={closeHandler}
          />
        )}
        <div className={styles["content"]}>{children}</div>
      </div>
    </section>
  );
};

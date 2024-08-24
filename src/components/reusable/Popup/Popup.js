import { useEffect, useState } from "react";

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

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const headerElement = document.getElementById("header");

    if (isOpen) {
      document.body.style.overflow = "hidden";
      headerElement.style.zIndex = "0";
    } else {
      document.body.style.overflow = "visible";
      headerElement.style.zIndex = "100";
    }

    return () => {
      headerElement.style.zIndex = "100";
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const closeHandler = () => {
    setIsOpen(false);
    popupCloseHandler();
  };

  return (
    <section
      className={`isOpen ? ${styles["overlay"]} ${styles["slide-in"]} ${styles[overlayVariant]} : ${styles["overlay"]} ${styles["slide-out"]} ${styles[overlayVariant]}`}
      onAnimationEnd={() => !isOpen && setIsOpen(false)}
    >
      <div className={`${styles["modal"]} ${styles[modalVariant]}`}>
        {showXMark && (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles["x-mark"]}
            onClick={closeHandler}
          />
        )}
        {children}
      </div>
    </section>
  );
};

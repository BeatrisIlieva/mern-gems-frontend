import React from "react";
import styles from "./Popup.module.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../Icon/Icon";

export const Popup = ({ isVisible, children, variant, popupCloseHandler }) => {
  document.body.style.overflow = "hidden";

  const onClose = () => {
    document.body.style.overflow = "visible";

    popupCloseHandler();
  };

  return (
    <section
      className={`${styles.overlay} ${isVisible ? styles.visible : ""}`.trim()}
    >
      <div className={styles[variant]}>
        <div className={styles["icon"]}>
          {variant !== "authentication" && (
            <Icon icon={faXmark} popupCloseHandler={onClose} />
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

import React from "react";
import styles from "./Popup.module.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../Icon/Icon";

export const Popup = ({ isVisible, children, variant, popupCloseHandler }) => {
  return (
    <section
      className={`${styles.overlay} ${isVisible ? styles.visible : ""}`.trim()}
    >
      <div className={styles[variant]}>
        <div className={styles["icon"]}>
          {variant !== "modal-authentication" && (
            <Icon icon={faXmark} popupCloseHandler={popupCloseHandler} />
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

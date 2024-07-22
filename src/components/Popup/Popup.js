import React from "react";
import styles from "./Popup.module.css";

export const Popup = ({ isVisible, children, variant }) => {
  return (
    <section
      className={`${styles.overlay} ${isVisible ? styles.visible : ""}`.trim()}
    >
      <div className={styles[variant]}>{children}</div>
    </section>
  );
};

import React from "react";
import styles from "./Popup.module.css";

export const Popup = ({ isVisible, children }) => {
  return (
    <section className={`${styles.overlay} ${isVisible ? styles.visible : ''}`.trim()}>
      <div className={styles["modal"]}>{children}</div>
    </section>
  );
};

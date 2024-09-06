import { useState } from "react";

import styles from "./Popup.module.css";

export const Popup = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const closeHandler = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section
      className={`${styles["overlay"]}  ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
    >
      <div
        className={`${styles["modal"]}  ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        {children}
      </div>
    </section>
  );
};

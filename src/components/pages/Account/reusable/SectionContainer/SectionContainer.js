import { memo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SectionContainer.module.css";

export const SectionContainer = memo(
  ({ sectionTitle, callBackFunction, icon, buttonTitle }) => {
    return (
      <section className={styles["section-container"]}>
        <h2 className={styles["title"]}>{sectionTitle}</h2>
        <button onClick={callBackFunction} className={styles["button"]}>
          <FontAwesomeIcon icon={icon} className={styles["icon"]} />
          {buttonTitle}
        </button>
      </section>
    );
  }
);

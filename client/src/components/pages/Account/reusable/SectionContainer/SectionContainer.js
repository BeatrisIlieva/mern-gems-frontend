import { memo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SectionContainer.module.css";

export const SectionContainer = memo(
  ({ sectionTitle, callBackFunction, icon, buttonTitle }) => {
    return (
      <section className={styles["section-container"]}>
        <h2 className={styles["title"]}>{sectionTitle}</h2>
        <div className={styles["wrapper"]}>
          <FontAwesomeIcon
            icon={icon}
            className={styles["icon"]}
            onClick={callBackFunction}
          />
          <h3 className={styles["sub-title"]} onClick={callBackFunction}>
            {buttonTitle}
          </h3>
        </div>
      </section>
    );
  }
);

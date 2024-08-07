import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SectionContainer.module.css";

export const SectionContainer = ({
  sectionTitle,
  callBackFunction,
  icon,
  buttonTitle,
}) => {
  return (
    <section className={styles["section-container"]}>
      <div className={styles["section-title"]}>
        <h2>{sectionTitle}</h2>
      </div>
      <button onClick={callBackFunction} className={styles["button"]}>
        <FontAwesomeIcon icon={icon} className={styles["icon"]} />
        {buttonTitle}
      </button>
    </section>
  );
};

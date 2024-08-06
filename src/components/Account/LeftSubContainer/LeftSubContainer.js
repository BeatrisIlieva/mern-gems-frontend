import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./LeftSubContainer.module.css";

export const LeftSubContainer = ({
  title,
  callBackFunction,
  icon,
  buttonTitle,
}) => {
  return (
    <section className={styles["left-sub-container"]}>
      <div className={styles["title"]}>
        <h2>{title}</h2>
      </div>
      <button onClick={callBackFunction} className={styles["button"]}>
        <FontAwesomeIcon icon={icon} className={styles["icon"]} />
        {buttonTitle}
      </button>
    </section>
  );
};

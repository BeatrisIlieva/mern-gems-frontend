import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Popup.module.css";

export const Popup = ({ popupCloseHandler, title, children }) => {
  return (
    <section className={styles["overlay"]}>
      <div className={styles["modal"]}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles["x-mark"]}
          onClick={popupCloseHandler}
        />
        <h2 className={styles["title"]}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

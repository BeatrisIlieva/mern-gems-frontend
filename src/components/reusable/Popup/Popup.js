import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Popup.module.css";

export const Popup = ({ popupCloseHandler, title, children, variant, overlayVariant }) => {
  return (
    <section className={`${styles["overlay"]} ${styles[overlayVariant]}`}>
      <div className={`${styles["modal"]} ${styles[variant]}`}>
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

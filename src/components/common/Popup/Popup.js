import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Popup.module.css";

export const Popup = ({
  popupCloseHandler,
  children,
  modalVariant,
  overlayVariant,
}) => {
  const showXMark = modalVariant !== "authentication";

  return (
    <section className={`${styles["overlay"]}  ${styles[overlayVariant]}`}>
      <div className={`${styles["modal"]} ${styles[modalVariant]}`}>
        {showXMark && (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles["x-mark"]}
            onClick={popupCloseHandler}
          />
        )}
        <div className={styles["content"]}>{children}</div>
      </div>
    </section>
  );
};

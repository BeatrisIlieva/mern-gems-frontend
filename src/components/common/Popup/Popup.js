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

  const closeHandler = () => {
    popupCloseHandler();
  };

  return (
    <section className={`${styles["overlay"]}  ${styles[overlayVariant]}`}>
      <div className={`${styles["modal"]} ${styles[modalVariant]}`}>
        {showXMark && (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles["x-mark"]}
            onClick={closeHandler}
          />
        )}
        <div className={styles["content"]}>{children}</div>
      </div>
    </section>
  );
};

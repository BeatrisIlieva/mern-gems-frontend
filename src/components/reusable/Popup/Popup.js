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

  document.body.style.overflow = "hidden";

  const closeHandler = () => {
    document.body.style.overflow = "visible";

    popupCloseHandler();
  };
  return (
    <section className={`${styles["overlay"]} ${styles[overlayVariant]}`}>
      <div className={`${styles["modal"]} ${styles[modalVariant]}`}>
        {showXMark && (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles["x-mark"]}
            onClick={closeHandler}
          />
        )}
        {children}
      </div>
    </section>
  );
};

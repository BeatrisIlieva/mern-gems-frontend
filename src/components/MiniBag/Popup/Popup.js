import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Popup.module.css";

export const Popup = ({ popupCloseHandler, children }) => {
  document.body.style.overflow = "hidden";

  const closeClickHandler = () => {
    document.body.style.overflow = "visible";

    popupCloseHandler();
  };

  return (
    <section className={styles["overlay"]}>
      <div className={styles["modal"]}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles["x-mark"]}
          onClick={closeClickHandler}
        />
        {children}
      </div>
    </section>
  );
};

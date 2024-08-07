import { Content } from "./Content/Content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Popup.module.css";

export const Popup = ({ displayPopup, popupCloseHandler }) => {
  return (
    <>
      {displayPopup && (
        <section className={styles["overlay"]}>
          <div className={styles["modal"]}>
            <FontAwesomeIcon
              icon={faXmark}
              className={styles["x-mark"]}
              onClick={popupCloseHandler}
            />
            <h2 className={styles["title"]}>Order History</h2>
            <Content />
          </div>
        </section>
      )}
    </>
  );
};

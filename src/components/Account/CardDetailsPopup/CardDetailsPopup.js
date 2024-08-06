import { CardDetailsForm } from "./CardDetailsForm/CardDetailsForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./CardDetailsPopup.module.css";

export const CardDetailsPopup = ({
  displayCardDetailsPopup,
  popupCloseHandler,
}) => {
  return (
    <>
      {displayCardDetailsPopup && (
        <section className={styles["overlay"]}>
          <div className={styles["modal"]}>
            <FontAwesomeIcon
              icon={faXmark}
              className={styles["x-mark"]}
              onClick={popupCloseHandler}
            />
            <h2 className={styles["title"]}>Add a New Credit Card</h2>
            <CardDetailsForm popupCloseHandler={popupCloseHandler} />
          </div>
        </section>
      )}
    </>
  );
};

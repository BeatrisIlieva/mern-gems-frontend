import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./ShippingDetailsPopup.module.css";

export const ShippingDetailsPopup = ({
  displayShippingDetailsPopup,
  popupCloseHandler,
}) => {
  return (
    <>
      {displayShippingDetailsPopup && (
        <section className={styles["overlay"]}>
          <div className={styles["modal"]}>
            <FontAwesomeIcon
              icon={faXmark}
              className={styles["x-mark"]}
              onClick={popupCloseHandler}
            />
            <h2 className={styles["title"]}>Shipping Address</h2>
            <ShippingDetailsForm popupCloseHandler={popupCloseHandler} />
          </div>
        </section>
      )}
    </>
  );
};

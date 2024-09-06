import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";
import { TrackOrder } from "./TrackOrder/TrackOrder";
import { ConfirmationEmail } from "./ConfirmationEmail/ConfirmationEmail";

import styles from "./OrderConfirmation.module.css";

export const OrderConfirmation = () => {
  return (
    <section id={styles["order-confirmation"]}>
      <div className={styles["relative-container"]}>
        <div className={styles["thumbnail"]}>
          <img
            className={styles["butterfly"]}
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1723986117/forget-me-not-collection/miniImages/1042750_d9d98_vfqzme.gif"
            alt="butterfly"
          />
        </div>
        <InfoMessage
          title={"Thank you for your purchase!"}
          subtitle={<TrackOrder />}
        />
      </div>
      <ConfirmationEmail />
    </section>
  );
};

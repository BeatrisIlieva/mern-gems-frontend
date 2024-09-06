import { Link } from "react-router-dom";

import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { NormalTitle } from "../../reusable/NormalTitle/NormalTitle";
import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";
import { TrackOrder } from "./TrackOrder/TrackOrder";

import styles from "./OrderConfirmation.module.css";

export const OrderConfirmation = () => {
  return (
    <section id={styles["order-confirmation"]}>
      <InfoMessage
        title={"Thank you for your purchase!"}
        subtitle={<TrackOrder />}
      />
    </section>
  );
};

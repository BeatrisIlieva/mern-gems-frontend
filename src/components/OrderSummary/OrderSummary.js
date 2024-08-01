import { useBagContext } from "../../contexts/BagContext";

import { MediumTitle } from "../MediumTitle/MediumTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";

import styles from "./OrderSummary.module.css";

export const OrderSummary = () => {
  
  const { totalPrice } = useBagContext();

  return (
    <section className={styles["order-summary"]}>
      <MediumTitle title={"Order Summary"} />
      <div className={styles["sub-container"]}>
        <SmallTitle title={"Subtotal"} />
        <SmallTitle title={`$ ${totalPrice}`} />
      </div>
      <div className={styles["sub-container"]}>
        <MediumTitle title={"Shipping"} />
        <MediumTitle title={"Complimentary"} />
      </div>
      <HorizontalLine variant={"large"} />
      <div className={styles["sub-container"]}>
        <SmallTitle title={"Total"} />
        <SmallTitle title={`$ ${totalPrice}`} />
      </div>
    </section>
  );
};

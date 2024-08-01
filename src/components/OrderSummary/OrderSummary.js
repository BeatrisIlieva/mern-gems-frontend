import { useBagContext } from "../../contexts/BagContext";

import { MediumTitle } from "../MediumTitle/MediumTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { NormalTitle } from "../NormalTitle/NormalTitle";

import styles from "./OrderSummary.module.css";

export const OrderSummary = () => {
  const { totalPrice } = useBagContext();

  return (
    <section className={styles["order-summary"]}>
      <MediumTitle title={"Order Summary"} />
      <div className={styles["sub-container"]}>
        <NormalTitle title={"Subtotal"} variant={"bolded"} />
        <NormalTitle title={`$ ${totalPrice}`} variant={"bolded"} />
      </div>
      <div className={styles["sub-container"]}>
        <NormalTitle title={"Shipping"} variant={"regular"} />
        <NormalTitle title={"Complimentary"} variant={"regular"} />
      </div>
      <HorizontalLine variant={"large"} />
      <div className={styles["bottom-sub-container"]}>
        <NormalTitle title={"Total"} variant={"bolded"} />
        <NormalTitle title={`$ ${totalPrice}`} variant={"bolded"} />
      </div>
    </section>
  );
};

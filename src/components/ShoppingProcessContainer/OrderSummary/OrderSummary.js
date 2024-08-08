import { useBagContext } from "../../../contexts/BagContext";

import { HorizontalLine } from "../../HorizontalLine/HorizontalLine";
import { NormalTitle } from "../../NormalTitle/NormalTitle";
import { ContainerTitle } from "../../ContainerTitle/ContainerTitle";
import { SectionContainer } from "./SectionContainer/SectionContainer";
import styles from "./OrderSummary.module.css";

export const OrderSummary = () => {
  const { totalPrice } = useBagContext();

  return (
    <section className={styles["order-summary"]}>
      <ContainerTitle title={"Order Summary"} />
      <SectionContainer firstTitle={"Subtotal"} secondTitle={`$ ${totalPrice}`} variant={"bolded"}/>
      <SectionContainer firstTitle={"Shipping"} secondTitle={"Complimentary"} variant={"regular"}/>
      <SectionContainer firstTitle={"Total"} secondTitle={`$ ${totalPrice}`} variant={"bolded"}/>
      {/* <div className={styles["sub-container"]}>
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
      </div> */}
    </section>
  );
};

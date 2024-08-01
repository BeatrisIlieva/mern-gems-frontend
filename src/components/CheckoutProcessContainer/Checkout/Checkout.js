import { CheckoutProcessContainer } from "../CheckoutProcessContainer";

import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";

import { LargeTitle } from "../../LargeTitle/LargeTitle";

import styles from "./Checkout.module.css";

export const Checkout = () => {
  return (
    <CheckoutProcessContainer title={"Checkout"}>
      <section className={styles["shipping-details"]}>
        <div className={styles["top-container"]}>
          <LargeTitle title={"Shipping Information"} />
        </div>
        <ShippingDetailsForm />
      </section>
    </CheckoutProcessContainer>
  );
};

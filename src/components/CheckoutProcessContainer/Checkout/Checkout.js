import { CheckoutProcessContainer } from "../CheckoutProcessContainer";

import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";

import { MediumTitle } from "../../MediumTitle/MediumTitle";

import styles from "./Checkout.module.css";

export const Checkout = () => {
  return (
    <CheckoutProcessContainer title={"Checkout"}>
      <section className={styles["shipping-details"]}>
        <div className={styles["top-container"]}>
          <MediumTitle title={"Shipping Details"} />
        </div>
        <ShippingDetailsForm />
      </section>
    </CheckoutProcessContainer>
  );
};

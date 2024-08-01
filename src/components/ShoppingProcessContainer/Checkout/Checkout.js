import { ShoppingProcessContainer } from "../ShoppingProcessContainer";

import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";

import { LargeTitle } from "../../LargeTitle/LargeTitle";

import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { BagList } from "../../BagList/BagList";

import styles from "./Checkout.module.css";

export const Checkout = () => {
  return (
    <ShoppingProcessContainer title={"Checkout"}>
      <LeftSide>
        <section className={styles["shipping-details"]}>
          <div className={styles["top-container"]}>
            <LargeTitle title={"Shipping Information"} />
          </div>
          <ShippingDetailsForm />
        </section>
      </LeftSide>
      <RightSide>
        <OrderSummary />
        <BagList variant={"shopping-process-container"} />
      </RightSide>
    </ShoppingProcessContainer>
  );
};

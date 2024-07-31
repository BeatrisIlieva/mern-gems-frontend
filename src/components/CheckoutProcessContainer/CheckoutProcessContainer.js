import { Children } from "react";

import { LargeTitle } from "../LargeTitle/LargeTitle";

import { Icon } from "../Icon/Icon";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import { OrderSummary } from "../OrderSummary/OrderSummary";

import { BagList } from "../BagList/BagList";

import styles from "./CheckoutProcessContainer.module.css";

export const CheckoutProcessContainer = ({ children, title }) => {
  const childrenArray = Children.toArray(children);

  return (
    <section className={styles["checkout-process-container"]}>
      <div className={styles["top"]}>
        <LargeTitle title={title} variant={"large-title"} />
        <div className={styles["delivery"]}>
          <Icon icon={faTruck} variant={"icon"} />
          <LargeTitle title={"Delivery"} variant={"large-title"} />
        </div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["left"]}>
          {childrenArray.map((child, index) => (
            <div key={index} className={styles["child"]}>
              {child}
            </div>
          ))}
        </div>
        <div className={styles["right"]}>
          <OrderSummary />
          <BagList />
        </div>
      </div>
    </section>
  );
};

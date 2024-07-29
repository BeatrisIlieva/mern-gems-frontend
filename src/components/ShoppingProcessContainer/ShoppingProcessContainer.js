import { Children } from "react";

import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { MediumTitle } from "../MediumTitle/MediumTitle";
import { SpanTitle } from "../SpanTitle/SpanTitle";
import { Icon } from "../Icon/Icon";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { PinkButton } from "../PinkButton/PinkButton";

import { useBagContext } from "../../contexts/BagContext";

import { HorizontalLine } from "../HorizontalLine/HorizontalLine";

import styles from "./ShoppingProcessContainer.module.css";

export const ShoppingProcessContainer = ({ children, title }) => {
  const { bagTotalQuantityIntoState, totalPrice } = useBagContext();

  const childrenArray = Children.toArray(children);

  return (
    <section className={styles["shopping-bag-process-container"]}>
      <div className={styles["top"]}>
        <LargeTitle title={title} variant={"large-title"} />
        <div className={styles["delivery"]}>
          <Icon icon={faTruck} variant={"icon"} />
          <LargeTitle title={"Delivery"} variant={"large-title"} />
          <span className={styles["delivery-span"]}>
            {bagTotalQuantityIntoState === 1
              ? `(${bagTotalQuantityIntoState} item)`
              : `(${bagTotalQuantityIntoState} items)`}
          </span>
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
          <MediumTitle title={"Order Summary"} />
          <div className={styles["right-sub-container"]}>
            <SmallTitle title={"Subtotal"} />
            <SmallTitle title={`$ ${totalPrice}`} />
          </div>
          <div className={styles["right-sub-container"]}>
            <SpanTitle title={"Shipping"} />
            <SpanTitle title={"Complimentary"} />
          </div>
          <HorizontalLine variant={"large"}/>
          <div className={styles["right-sub-container"]}>
            <SmallTitle title={"Total"} />
            <SmallTitle title={`$ ${totalPrice}`} />
          </div>
          <PinkButton title={"Continue Checkout"} />
        </div>
      </div>
    </section>
  );
};

import { Children } from "react";

import { Link, useLocation } from "react-router-dom";

import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { MediumTitle } from "../MediumTitle/MediumTitle";
import { SpanTitle } from "../SpanTitle/SpanTitle";
import { Icon } from "../Icon/Icon";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { PinkButton } from "../PinkButton/PinkButton";

import { BagList } from "./Bag/BagList/BagList";

import { useBagContext } from "../../contexts/BagContext";

import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { useService } from "../../hooks/useService";
import { orderServiceFactory } from "../../services/orderService";

import styles from "./ShoppingProcessContainer.module.css";

export const ShoppingProcessContainer = ({ children, title}) => {
  const { totalPrice } = useBagContext();

  // const childrenArray = Children.toArray(children);

  const childrenArray = Children.toArray(children);

  const lastChild = childrenArray[childrenArray.length - 1];

  const location = useLocation();

  const locationIsShoppingBag = location.pathname === "/users/shopping-bag";

  const locationIsPayment = location.pathname === "/users/payment";

  const { bagItems } = useBagContext();

  return (
    <section className={styles["shopping-bag-process-container"]}>
      <div className={styles["top"]}>
        <LargeTitle title={title} variant={"large-title"} />
        <div className={styles["delivery"]}>
          <Icon icon={faTruck} variant={"icon"} />
          <LargeTitle title={"Delivery"} variant={"large-title"} />
        </div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["left"]}>
          {/* {childrenArray.map((child, index) => (
            <div key={index} className={styles["child"]}>
              {child}
            </div>
          ))} */}
          {childrenArray.slice(0, -1).map((child, index) => (
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
          <HorizontalLine variant={"large"} />
          <div className={styles["right-bottom-sub-container"]}>
            <SmallTitle title={"Total"} />
            <SmallTitle title={`$ ${totalPrice}`} />
          </div>
          {lastChild}
        </div>
      </div>
    </section>
  );
};

import { Children } from "react";

import { Link, useLocation } from "react-router-dom";

import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { MediumTitle } from "../MediumTitle/MediumTitle";
import { SpanTitle } from "../SpanTitle/SpanTitle";
import { Icon } from "../Icon/Icon";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { PinkButton } from "../PinkButton/PinkButton";

import { useBagContext } from "../../contexts/BagContext";

import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { useService } from "../../hooks/useService";
import { orderServiceFactory } from "../../services/orderService";

import { OrderSummary } from "../OrderSummary/OrderSummary";

import { BagList } from "../BagList/BagList";

import styles from "./ShoppingProcessContainer.module.css";

export const ShoppingProcessContainer = ({ children, title }) => {
  const childrenArray = Children.toArray(children);
  console.log(childrenArray);

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

import { Children } from "react";

import { LargeTitle } from "../LargeTitle/LargeTitle";
import { XLargeTitle } from "../XLargeTitle/XLargeTitle";

import { Icon } from "../Icon/Icon";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import { OrderSummary } from "./OrderSummary/OrderSummary";

import { BagList } from "../BagList/BagList";

import { useLocation } from "react-router-dom";

import { LeftSide } from "./LeftSide/LeftSide";
import { RightSide } from "./RightSide/RightSide";
import { BagCount } from "../BagCount/BagCount";
import styles from "./ShoppingProcessContainer.module.css";

export const ShoppingProcessContainer = ({children, title}) => {


  return (
    <section className={styles["shopping-process-container"]}>
      <div className={styles["top"]}>
        <XLargeTitle title={title} variant={"large-title"} />
        <div className={styles["delivery"]}>
          <Icon icon={faTruck} variant={"icon"} />
          <XLargeTitle title={"Delivery"} variant={"large-title"} />
          <BagCount/>
        </div>
      </div>
      <div className={styles["bottom"]}>
        {children}
        {/* <LeftSide />
        <RightSide /> */}
      </div>
    </section>
  );
};

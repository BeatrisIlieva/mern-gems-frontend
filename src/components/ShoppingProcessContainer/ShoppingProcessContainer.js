import { Children } from "react";

import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { Icon } from "../Icon/Icon";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import { useBag } from "../../hooks/useBag";

import styles from "./ShoppingProcessContainer.module.css";

export const ShoppingProcessContainer = ({ children, title }) => {
  const { totalQuantity } = useBag();

  const childrenArray = Children.toArray(children);

  return (
    <section className={styles["shopping-bag-process-container"]}>
      <div className={styles["top"]}>
        <LargeTitle title={title} variant={"large-title"} />
        <div className={styles["delivery"]}>
          <Icon icon={faTruck} variant={"icon"} />
          <LargeTitle title={"Delivery"} variant={"large-title"} />
          <span className={styles["delivery-span"]}>
            {totalQuantity === 1
              ? `(${totalQuantity} item)`
              : `(${totalQuantity} items)`}
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
        <div className={styles["right"]}>Order Summary</div>
      </div>
    </section>
  );
};

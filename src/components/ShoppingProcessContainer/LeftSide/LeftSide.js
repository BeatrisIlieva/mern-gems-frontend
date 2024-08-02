import { Children } from "react";

import { LargeTitle } from "../../LargeTitle/LargeTitle";

import styles from "./LeftSide.module.css";

const ChildrenByTitles = {
  PaymentForm: "Payment",
  ShippingDetailsForm: "Shipping Information",
};

export const LeftSide = ({ children }) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className={styles["left"]}>
      {childrenArray.map((child, index) => (
        <div key={index} className={styles["child"]}>
          <div className={styles["title"]}>
            <LargeTitle
              title={ChildrenByTitles[child.props.name || child.type.name]}
            />
          </div>
          {child}
        </div>
      ))}
    </div>
  );
};

import { Children } from "react";

import { LargeTitle } from "../../LargeTitle/LargeTitle";

import styles from "./LeftSide.module.css"

const ChildrenByTitles = {
  PaymentForm: "Payment",
  ShippingInformation: "Shipping Information",
  ShippingDetailsForm: "Shipping Information",

}

export const LeftSide = ({ children }) => {
  const childrenArray = Children.toArray(children);
  
//   childrenArray.forEach(child => {
//     const childName = child.props.name || child.type.name;
//     console.log(childName)
// });

  

  return (
    <div className={styles["left"]}>
      {childrenArray.map((child, index) => (
        <div key={index} className={styles["child"]}>
          <LargeTitle title={ChildrenByTitles[child.props.name || child.type.name]}/>
          {child}
        </div>
      ))}
    </div>
  );
};

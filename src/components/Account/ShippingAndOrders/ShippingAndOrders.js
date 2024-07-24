import { LargeTitle } from "../../LargeTitle/LargeTitle";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { Icon } from "../../Icon/Icon"; 

import styles from "./ShippingAndOrders.module.css"


export const ShippingAndOrders = ({
  largeTitleContent,
  smallTitleContent,
  icon,
  titleVariant,
  iconVariant,
}) => {
  return (
    <div className={styles["top-container"]}>
      <LargeTitle title={largeTitleContent} variant={titleVariant} />
      <div className={styles["button-wrapper"]}>
        <Icon icon={icon} variant={  iconVariant} />
        <SmallTitle title={smallTitleContent} />
      </div>
    </div>
  );
};

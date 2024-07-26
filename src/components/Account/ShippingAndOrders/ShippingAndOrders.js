import { useState } from "react";
import { LargeTitle } from "../../LargeTitle/LargeTitle";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { Icon } from "../../Icon/Icon";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";

import styles from "./ShippingAndOrders.module.css";

export const ShippingAndOrders = ({
  largeTitleContent,
  smallTitleContent,
  icon,
  titleVariant,
  iconVariant,
}) => {
  const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
    useState(false);

  const toggleDisplayShippingDetailsPopup = () => {
    setDisplayShippingDetailsPopup(
      (displayShippingDetailsPopup) => !displayShippingDetailsPopup
    );
  };

  return (
    <div className={styles["top-container"]}>
      <LargeTitle title={largeTitleContent} variant={titleVariant} />
      <div
        className={styles["button-wrapper"]}
        onClick={toggleDisplayShippingDetailsPopup}
      >
        <Icon icon={icon} variant={iconVariant} />
        <SmallTitle title={smallTitleContent} />
      </div>
      {displayShippingDetailsPopup && (
        <ShippingDetails
          toggleDisplayShippingDetailsPopup={toggleDisplayShippingDetailsPopup}
        />
      )}
    </div>
  );
};

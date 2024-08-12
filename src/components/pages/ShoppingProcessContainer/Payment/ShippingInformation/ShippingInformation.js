import { useState } from "react";

import { Popup } from "../../../reusable/Popup/Popup";
import { ShippingDetailsForm } from "../../../ShippingDetailsForm/ShippingDetailsForm";
import { Button } from "../../../reusable/Button/Button";
import { UserShippingDetails } from "./UserShippingDetails/UserShippingDetails";
import { UserLoginDetails } from "./UserLoginDetails/UserLoginDetails";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = () => {
  const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
    useState(false);

  const toggleDisplayShippingDetailsPopup = () => {
    setDisplayShippingDetailsPopup(
      (displayShippingDetailsPopup) => !displayShippingDetailsPopup
    );
  };

  return (
    <section className={styles["shipping-information"]}>
      <div className={styles["header-wrapper"]}>
        <h2 className={styles["title"]}>Shipping Information</h2>
        <Button
          title={"Edit"}
          callBackFunction={toggleDisplayShippingDetailsPopup}
          variant={"underlined"}
        />
      </div>
      <UserLoginDetails />
      <UserShippingDetails />
      {displayShippingDetailsPopup && (
        <Popup
          popupCloseHandler={toggleDisplayShippingDetailsPopup}
          title={"Edit Shipping Address"}
          variant={"large"}
        >
          <ShippingDetailsForm
            popupCloseHandler={toggleDisplayShippingDetailsPopup}
          />
        </Popup>
      )}
    </section>
  );
};

import { useState, useEffect } from "react";

import { NormalTitle } from "../../../NormalTitle/NormalTitle";
import { Popup } from "../../../Popup/Popup";
import { ShippingDetailsForm } from "../../../ShippingDetailsForm/ShippingDetailsForm";
import { Button } from "../../../Button/Button";
import { UserShippingDetails } from "./UserShippingDetails/UserShippingDetails";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useService } from "../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = () => {
  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
    useState(false);

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);


  const { userId } = useAuthenticationContext();

  useEffect(() => {
    userLoginDetailsService
      .getOne(userId)
      .then((data) => {
        setUserLoginDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userLoginDetailsService, userId]);

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
      <div className={styles["top"]}>
        <NormalTitle title={"Email Address"} variant={"bolded"} />
        <NormalTitle title={userLoginDetails.email} variant={"regular"} />
      </div>
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

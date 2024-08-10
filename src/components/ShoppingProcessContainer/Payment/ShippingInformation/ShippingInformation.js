import { useState, useEffect } from "react";

import { NormalTitle } from "../../../NormalTitle/NormalTitle";
import { Popup } from "../../../Popup/Popup";
import { ShippingDetailsForm } from "../../../ShippingDetailsForm/ShippingDetailsForm";
import { Button } from "../../../Button/Button";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useService } from "../../../../hooks/useService";

import { userShippingDetailsServiceFactory } from "../../../../services/userShippingDetailsService";
import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = () => {
  const [userShippingDetails, setUserShippingDetails] = useState([]);

  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
    useState(false);

  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  useEffect(() => {
    userShippingDetailsService
      .getOne(userId)
      .then((data) => {
        setUserShippingDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userShippingDetailsService, userId]);

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
      <ul role="list">
        <li className={styles["list-item"]}>
          <NormalTitle title={"Shipping Address"} variant={"bolded"} />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={`${userShippingDetails.firstName} ${userShippingDetails.lastName}`}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={userShippingDetails.phoneNumber}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={userShippingDetails.country}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={`${userShippingDetails.city} ${userShippingDetails.zipCode}`}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={`${userShippingDetails.street} St.`}
            variant={"regular"}
          />
        </li>
        {userShippingDetails.apartment && (
          <li className={styles["list-item"]}>
            <NormalTitle
              title={`Apt. ${userShippingDetails.apartment}`}
              variant={"regular"}
            />
          </li>
        )}
      </ul>
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

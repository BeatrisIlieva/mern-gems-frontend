import { useState, useEffect } from "react";

import { NormalTitle } from "../../../NormalTitle/NormalTitle";
import { LargeTitle } from "../../../LargeTitle/LargeTitle";
import { UnderlinedButton } from "../../../UnderlinedButton/UnderlinedButton";

import { AddressBookPopup } from "../../../Account/AddressBookPopup/AddressBookPopup";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useService } from "../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../services/userShippingDetailsService";
import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";
import styles from "./ShippingInformation.module.css";

export const ShippingInformation = () => {
  const [userShippingDetails, setUserShippingDetails] = useState([]);

  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

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

  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

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

  const [displayAddressBookPopup, setDisplayAddressBookPopup] = useState(false);

  const toggleDisplayAddressBookPopup = () => {
    setDisplayAddressBookPopup(
      (displayAddressBookPopup) => !displayAddressBookPopup
    );
  };

  return (
    <section className={styles["shipping-information"]}>
      <div className={styles["wrapper"]}>
        <LargeTitle title={"Shipping Information"} />
        <UnderlinedButton
          title={"Edit"}
          callBackFunction={toggleDisplayAddressBookPopup}
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
      {displayAddressBookPopup && (
        <AddressBookPopup
          toggleDisplayAddressBookPopup={toggleDisplayAddressBookPopup}
        />
      )}
    </section>
  );
};

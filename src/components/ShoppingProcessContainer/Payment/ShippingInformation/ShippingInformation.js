import { useState } from "react";

import { NormalTitle } from "../../../NormalTitle/NormalTitle";
import { LargeTitle } from "../../../LargeTitle/LargeTitle";
import { UnderlinedButton } from "../../../UnderlinedButton/UnderlinedButton";

import { AddressBookPopup } from "../../../Account/AddressBookPopup/AddressBookPopup";

import { UserEmail } from "../../../UserEmail/UserEmail";

import { useUserShippingDetails } from "../../../../hooks/useUserShipingDetails";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = () => {
  const {userShippingDetails} = useUserShippingDetails()
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
        <UserEmail/>
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

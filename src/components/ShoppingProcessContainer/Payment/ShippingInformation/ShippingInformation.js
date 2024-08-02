import { useState } from "react";

import { NormalTitle } from "../../../NormalTitle/NormalTitle";
import { LargeTitle } from "../../../LargeTitle/LargeTitle";
import { UnderlinedButton } from "../../../UnderlinedButton/UnderlinedButton";

import { AddressBookPopup } from "../../../Account/AddressBookPopup/AddressBookPopup";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = ({
  userShippingInformation,
  userLoginInformation,
}) => {
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
        <NormalTitle title={userLoginInformation.email} variant={"regular"} />
      </div>
      <ul role="list">
        <li className={styles["list-item"]}>
          <NormalTitle title={"Shipping Address"} variant={"bolded"} />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={`${userShippingInformation.firstName} ${userShippingInformation.lastName}`}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={userShippingInformation.phoneNumber}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={userShippingInformation.country}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={`${userShippingInformation.city} ${userShippingInformation.zipCode}`}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={`${userShippingInformation.street} St.`}
            variant={"regular"}
          />
        </li>
        {userShippingInformation.apartment && (
          <li className={styles["list-item"]}>
            <NormalTitle
              title={`Apt. ${userShippingInformation.apartment}`}
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

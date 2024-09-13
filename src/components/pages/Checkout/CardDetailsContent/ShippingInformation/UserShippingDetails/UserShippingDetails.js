import { useState, useEffect } from "react";

import { NormalTitle } from "../../../../../reusable/NormalTitle/NormalTitle";

import { useLanguageContext } from "../../../../../../contexts/LanguageContext";
import { useAuthenticationContext } from "../../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../../hooks/useService";

import { userShippingDetailsServiceFactory } from "../../../../../../services/userShippingDetailsService";

import { SHIPPING_ADDRESS_NAMING } from "../../../../../../constants/languageRelated";

import { STREET_NAMING, APARTMENT_NAMING } from "./constants/languageRelated";

import styles from "./UserShippingDetails.module.css";

export const UserShippingDetails = ({ toggleDisplayShippingDetailsPopup }) => {
  const { language } = useLanguageContext();

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
  }, [userShippingDetailsService, userId, toggleDisplayShippingDetailsPopup]);

  const streetTitle =
    language !== "Bulgarian"
      ? `${userShippingDetails.street}${STREET_NAMING[language]}`
      : `${STREET_NAMING[language]}${userShippingDetails.street}`;

  const apartmentTitle =
    language !== "Chinese"
      ? `${APARTMENT_NAMING[language]}${userShippingDetails.apartment}`
      : `${userShippingDetails.apartment}${APARTMENT_NAMING[language]}`;

  return (
    <ul role="list">
      <li className={styles["list-item"]}>
        <NormalTitle
          title={SHIPPING_ADDRESS_NAMING[language]}
          variant={"bolded"}
        />
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
        <NormalTitle title={userShippingDetails.country} variant={"regular"} />
      </li>
      <li className={styles["list-item"]}>
        <NormalTitle
          title={`${userShippingDetails.city} ${userShippingDetails.zipCode}`}
          variant={"regular"}
        />
      </li>
      <li className={styles["list-item"]}>
        <NormalTitle title={streetTitle} variant={"regular"} />
      </li>
      {userShippingDetails.apartment && (
        <li className={styles["list-item"]}>
          <NormalTitle title={apartmentTitle} variant={"regular"} />
        </li>
      )}
    </ul>
  );
};

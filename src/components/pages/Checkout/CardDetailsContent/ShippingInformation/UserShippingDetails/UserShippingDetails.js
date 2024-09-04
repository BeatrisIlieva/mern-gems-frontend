import { useState, useEffect } from "react";

import { NormalTitle } from "../../../../../reusable/NormalTitle/NormalTitle";

import { useAuthenticationContext } from "../../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../../hooks/useService";

import { userShippingDetailsServiceFactory } from "../../../../../../services/userShippingDetailsService";

import styles from "./UserShippingDetails.module.css";

export const UserShippingDetails = () => {
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

  return (
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
        <NormalTitle title={userShippingDetails.country} variant={"regular"} />
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
  );
};

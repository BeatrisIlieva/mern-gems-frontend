import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";
import { userServiceFactory } from "../../../services/userService";

import { CheckoutProcessContainer } from "../CheckoutProcessContainer";

import { ShippingInformation } from "./ShippingInformation/ShippingInformation";

import { PaymentForm } from "./PaymentForm/PaymentForm";

import { MediumTitle } from "../../MediumTitle/MediumTitle";

import styles from "./Payment.module.css";

export const Payment = () => {
  const { userId } = useAuthenticationContext();

  const userService = useService(userServiceFactory);
  const [userShippingInformation, setUserShippingInformation] = useState([]);
  const [userLoginInformation, setUserLoginInformation] = useState([]);

  useEffect(() => {
    userService
      .getUserShippingDetails(userId)
      .then((data) => setUserShippingInformation(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, userService]);

  useEffect(() => {
    userService
      .getUserLoginDetails(userId)
      .then((data) => setUserLoginInformation(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, userService]);

  return (
    <CheckoutProcessContainer title={"Payment"}>
      <ShippingInformation
        userShippingInformation={userShippingInformation}
        userLoginInformation={userLoginInformation}
      />
      <section className={styles["payment-information"]}>
        <div className={styles["top-container"]}>
          <MediumTitle title={"Payment"} />
        </div>
        <PaymentForm />
      </section>
    </CheckoutProcessContainer>
  );
};

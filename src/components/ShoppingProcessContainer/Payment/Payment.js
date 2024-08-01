import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";
import { userServiceFactory } from "../../../services/userService";

import { ShoppingProcessContainer } from "../ShoppingProcessContainer";

import { ShippingInformation } from "./ShippingInformation/ShippingInformation";

import { PaymentForm } from "./PaymentForm/PaymentForm";

import { LargeTitle } from "../../LargeTitle/LargeTitle";

import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { BagList } from "../../BagList/BagList";

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
    <ShoppingProcessContainer title={"Payment"}>
      <LeftSide>
        <ShippingInformation
          userShippingInformation={userShippingInformation}
          userLoginInformation={userLoginInformation}
        />
        {/* <section className={styles["payment-information"]}>
          <div className={styles["top-container"]}>
            <LargeTitle title={"Payment"} />
          </div> */}
          <PaymentForm />
        {/* </section> */}
      </LeftSide>
      <RightSide>
        <OrderSummary />
        <BagList variant={"shopping-process-container"} />
      </RightSide>
    </ShoppingProcessContainer>
  );
};

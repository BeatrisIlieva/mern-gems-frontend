import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";
import { userServiceFactory } from "../../../services/userService";

import { ShoppingProcessContainer } from "../ShoppingProcessContainer";

import { ShippingInformation } from "./ShippingInformation/ShippingInformation";

import { PaymentForm } from "./PaymentForm/PaymentForm";


import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { BagList } from "../../BagList/BagList";


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
        <PaymentForm />
      </LeftSide>
      <RightSide>
        <OrderSummary />
        <BagList variant={"shopping-process-container"} />
      </RightSide>
    </ShoppingProcessContainer>
  );
};

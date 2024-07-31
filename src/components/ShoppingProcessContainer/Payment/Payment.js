import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";
import { userServiceFactory } from "../../../services/userService";

import { ShoppingProcessContainer } from "../ShoppingProcessContainer";

import { ShippingInformation } from "../ShippingInformation/ShippingInformation";

import { PaymentForm } from "./PaymentForm/PaymentForm";

import { OrderSummary } from "../../OrderSummary/OrderSummary"; 

import { BagList } from "../../BagList/BagList";


export const Payment = () => {
  const { userId } = useAuthenticationContext();

  const userService = useService(userServiceFactory);
  const [userInformation, setUserInformation] = useState([]);

  useEffect(() => {
    userService
      .getUserShippingDetails(userId)
      .then((data) => setUserInformation(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, userService]);


  return (
    <ShoppingProcessContainer title={"Payment"}>
      <ShippingInformation userInformation={userInformation} />
      <PaymentForm/>
      {/* <OrderSummary/> */}
      {/* <BagList/> */}
    </ShoppingProcessContainer>
  );
};

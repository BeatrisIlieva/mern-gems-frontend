import { CheckoutProcessContainer } from "../CheckoutProcessContainer";

import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm"
import { OrderSummary } from "../../OrderSummary/OrderSummary"; 

export const Checkout = () => {
  return (
    <CheckoutProcessContainer title={"Checkout"}>
      <ShippingDetailsForm />
      {/* <OrderSummary /> */}
    </CheckoutProcessContainer>
  );
};

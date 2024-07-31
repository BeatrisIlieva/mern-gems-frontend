import { CheckoutProcessContainer } from "../CheckoutProcessContainer";

import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";

export const Checkout = () => {
  return (
    <CheckoutProcessContainer title={"Checkout"}>
      <ShippingDetailsForm />
    </CheckoutProcessContainer>
  );
};

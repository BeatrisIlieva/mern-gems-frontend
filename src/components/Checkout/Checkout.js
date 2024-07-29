import { ShoppingProcessContainer } from "../ShoppingProcessContainer/ShoppingProcessContainer";

import { ShippingDetailsForm } from "../Account/ShippingAndOrders/ShippingDetails/ShippingDetailsForm/ShippingDetailsForm";

export const Checkout = () => {
  return (
    <ShoppingProcessContainer title={"Checkout"}>
      <ShippingDetailsForm />
    </ShoppingProcessContainer>
  );
};

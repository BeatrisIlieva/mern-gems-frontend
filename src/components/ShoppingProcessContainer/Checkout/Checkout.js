import { ShoppingProcessContainer } from "../ShoppingProcessContainer";

import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";

import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { BagList } from "../../BagList/BagList";


export const Checkout = () => {
  return (
    <ShoppingProcessContainer title={"Checkout"}>
      <LeftSide>
        <ShippingDetailsForm />
      </LeftSide>
      <RightSide>
        <OrderSummary />
        <BagList variant={"shopping-process-container"} />
      </RightSide>
    </ShoppingProcessContainer>
  );
};

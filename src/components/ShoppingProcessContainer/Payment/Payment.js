import { ShoppingProcessContainer } from "../ShoppingProcessContainer";

import { ShippingInformation } from "./ShippingInformation/ShippingInformation";

import { PaymentForm } from "./PaymentForm/PaymentForm";

import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { BagList } from "../../BagList/BagList";

export const Payment = () => {
  return (
    <ShoppingProcessContainer title={"Payment"}>
      <LeftSide>
        <ShippingInformation />
        <PaymentForm />
      </LeftSide>
      <RightSide>
        <OrderSummary />
        <BagList variant={"shopping-process-container"} />
      </RightSide>
    </ShoppingProcessContainer>
  );
};

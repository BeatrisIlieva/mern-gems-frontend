import { ShoppingProcessContainer } from "../ShoppingProcessContainer";

import { ShippingInformation } from "./ShippingInformation/ShippingInformation";

import { CardDetailsForm } from "../../CardDetailsForm/CardDetailsForm";

import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { BagList } from "../../BagList/BagList";

export const Payment = () => {
  return (
    <ShoppingProcessContainer title={"Payment"}>
      <LeftSide>
        <ShippingInformation />
        <CardDetailsForm />
      </LeftSide>
      <RightSide>
        <OrderSummary />
        <BagList variant={"shopping-process-container"} />
      </RightSide>
    </ShoppingProcessContainer>
  );
};

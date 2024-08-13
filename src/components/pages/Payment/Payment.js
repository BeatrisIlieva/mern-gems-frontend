import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer"; 
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { ShippingInformation } from "./ShippingInformation/ShippingInformation";
import { CardDetailsForm } from "../../reusable/CardDetailsForm/CardDetailsForm";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { BagList } from "../../reusable/BagList/BagList";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";

export const Payment = () => {
  return (
    <ShoppingProcessContainer title={"Payment"}>
      <ChildWrapper>
        <ShippingInformation />
        <>
          <LargeTitle title={"Payment"} />
          <CardDetailsForm />
        </>
      </ChildWrapper>
      <ChildWrapper>
        <>
          <OrderSummary />
          <BagList variant={"shopping-process-container"} />
        </>
      </ChildWrapper>
    </ShoppingProcessContainer>
  );
};

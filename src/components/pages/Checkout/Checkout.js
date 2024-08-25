import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer"; 
import { ShippingDetailsForm } from "../../reusable/ShippingDetailsForm/ShippingDetailsForm";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { BagList } from "../../reusable/BagList/BagList";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";

export const Checkout = () => {
  return (
    <ShoppingProcessContainer title={"Checkout"}>
      <ChildWrapper>
        <>
          <LargeTitle title={"Shipping Address"} />
          <ShippingDetailsForm />
        </>
      </ChildWrapper>
      <ChildWrapper>
        <>
          <OrderSummary />
          <BagList />
        </>
      </ChildWrapper>
    </ShoppingProcessContainer>
  );
};

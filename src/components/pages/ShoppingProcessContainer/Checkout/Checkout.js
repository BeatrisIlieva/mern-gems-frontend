import { ShoppingProcessContainer } from "../ShoppingProcessContainer";
import { ShippingDetailsForm } from "../../../reusable/ShippingDetailsForm/ShippingDetailsForm";
import { ContainerTitle } from "../reusable/ContainerTitle/ContainerTitle";
import { OrderSummary } from "../common/OrderSummary/OrderSummary";
import { BagList } from "../../../reusable/BagList/BagList";
import { SectionContainer } from "../reusable/SectionContainer/SectionContainer";

export const Checkout = () => {
  return (
    <ShoppingProcessContainer title={"Checkout"}>
      <SectionContainer>
        <>
          <ContainerTitle title={"Shipping Address"} />
          <ShippingDetailsForm />
        </>
      </SectionContainer>
      <SectionContainer>
        <>
          <OrderSummary />
          <BagList variant={"shopping-process-container"} />
        </>
      </SectionContainer>
    </ShoppingProcessContainer>
  );
};

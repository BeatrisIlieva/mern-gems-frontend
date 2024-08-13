import { ShoppingProcessContainer } from "../ShoppingProcessContainer";
import { ShippingInformation } from "./ShippingInformation/ShippingInformation";
import { CardDetailsForm } from "../../../reusable/CardDetailsForm/CardDetailsForm";
import { ContainerTitle } from "../reusable/ContainerTitle/ContainerTitle";
import { OrderSummary } from "../common/OrderSummary/OrderSummary";
import { BagList } from "../../../reusable/BagList/BagList";
import { SectionContainer } from "../reusable/SectionContainer/SectionContainer";

export const Payment = () => {
  return (
    <ShoppingProcessContainer title={"Payment"}>
      <SectionContainer>
        <ShippingInformation />
        <>
          <ContainerTitle title={"Payment"} />
          <CardDetailsForm />
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

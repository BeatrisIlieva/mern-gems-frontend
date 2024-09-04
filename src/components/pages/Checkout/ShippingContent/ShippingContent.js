import { ChildWrapper } from "../../../reusable/ChildWrapper/ChildWrapper";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";
import { ShippingDetailsForm } from "../../../common/ShippingDetailsForm/ShippingDetailsForm";

export const ShippingContent = () => {
  return (
    <ChildWrapper>
      <>
        <LargeTitle title={"Shipping Address"} />
        <ShippingDetailsForm />
      </>
    </ChildWrapper>
  );
};

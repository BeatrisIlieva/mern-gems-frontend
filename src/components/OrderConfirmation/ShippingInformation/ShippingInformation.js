import { useUserShippingDetails } from "../../../hooks/useUserShippingDetails";

import { XLargeTitle } from "../../XLargeTitle/XLargeTitle";

export const ShippingInformation = () => {
  const { userShippingDetails } = useUserShippingDetails();

  return (
    <XLargeTitle
      title={`Thank you for your purchase, ${userShippingDetails.firstName}!`}
    />
  );
};

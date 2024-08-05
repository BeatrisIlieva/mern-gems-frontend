import { XLargeTitle } from "../../XLargeTitle/XLargeTitle";

export const ShippingInformation = ({ userShippingDetails }) => {
  return (
    <XLargeTitle
      title={`Thank you for your purchase, ${userShippingDetails.firstName}!`}
    />
  );
};

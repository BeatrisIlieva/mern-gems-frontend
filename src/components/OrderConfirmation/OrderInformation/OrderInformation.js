import { NormalTitle } from "../../NormalTitle/NormalTitle";

import { convertToReadableDate } from "../../../utils/convertToReadableDate";

export const OrderInformation = ({ orderInformation }) => {
  const readableDate = convertToReadableDate(orderInformation.createdAt);

  return (
    <>
      <NormalTitle
        title={`Order Number: ${orderInformation._id}`}
        variant={"regular"}
      />
      <NormalTitle title={`Order Date: ${readableDate}`} variant={"regular"} />
      <NormalTitle
        title={`Status: ${orderInformation.status}`}
        variant={"regular"}
      />
    </>
  );
};

import { useState, useEffect } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";

import { orderServiceFactory } from "../../../services/orderService";

import { NormalTitle } from "../../NormalTitle/NormalTitle";

import { convertToReadableDate } from "../../../utils/convertToReadableDate";

export const OrderInformation = () => {
  const { userId } = useAuthenticationContext();
  const orderService = useService(orderServiceFactory);
  const [orderInformation, setOrderInformation] = useState([]);

  useEffect(() => {
    orderService
      .confirm(userId)
      .then((data) => {
        setOrderInformation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [orderService, userId]);

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

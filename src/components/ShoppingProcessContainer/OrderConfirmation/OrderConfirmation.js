import { useEffect, useState } from "react";


import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";
import { orderServiceFactory } from "../../../services/orderService";
import { userServiceFactory } from "../../../services/userService";

import { MediumTitle } from "../../MediumTitle/MediumTitle";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { NormalTitle } from "../../NormalTitle/NormalTitle";


import { convertToReadableDate } from "../../../utils/convertToReadableDate";
import styles from "./OrderConfirmation.module.css";


export const OrderConfirmation = () => {
  const { userId } = useAuthenticationContext();
  const [userShippingInformation, setUserShippingInformation] = useState([]);
  const [userLoginInformation, setUserLoginInformation] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const orderService = useService(orderServiceFactory);
  const userService = useService(userServiceFactory);


  useEffect(() => {
    orderService
      .confirm(userId)
      .then((data) => {
        setOrderItems(data);

      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [orderService, userId]);

  useEffect(() => {
    userService
      .getUserShippingDetails(userId)
      .then((data) => {
        setUserShippingInformation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userService, userId]);

  useEffect(() => {
    userService
      .getUserLoginDetails(userId)
      .then((data) => {
        setUserLoginInformation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userService, userId]);

  const readableDate = convertToReadableDate(orderItems.createdAt);

  return (
    <>
      <section className={styles["order-confirmation"]}>
        <MediumTitle
          title={`Thank you for your purchase, ${userShippingInformation.firstName}!`}
        />
        <SmallTitle title={"Your order has been successfully placed"} />
        <NormalTitle title={`Order Number: ${orderItems._id}`} />
        <NormalTitle title={`Order Date: ${readableDate}`} />
        <NormalTitle title={`Status: ${orderItems.status}`} />

        <MediumTitle
          title={`A confirmation email has been sent to: ${userLoginInformation.email}`}
        />
      </section>
    </>
  );
};

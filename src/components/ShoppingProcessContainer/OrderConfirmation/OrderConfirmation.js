import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";
import { orderServiceFactory } from "../../../services/orderService";
import { userServiceFactory } from "../../../services/userService";
import { XLargeTitle } from "../../XLargeTitle/XLargeTitle";
import { MediumTitle } from "../../MediumTitle/MediumTitle";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { NormalTitle } from "../../NormalTitle/NormalTitle";

import { Link } from "react-router-dom";

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
    <section className={styles["order-confirmation"]}>
      <div className={styles["info"]}>
        <XLargeTitle
          title={`Thank you for your purchase, ${userShippingInformation.firstName}!`}
        />
        <NormalTitle
          title={"Your order has been successfully placed."}
          variant={"bolded"}
        />
        <NormalTitle
          title={`Order Number: ${orderItems._id}`}
          variant={"regular"}
        />
        <NormalTitle
          title={`Order Date: ${readableDate}`}
          variant={"regular"}
        />
        <NormalTitle
          title={`Status: ${orderItems.status}`}
          variant={"regular"}
        />
        <NormalTitle
          title={`A confirmation email has been sent to: ${userLoginInformation.email}`}
          variant={"bolded"}
        />
        <div className={styles["link-to-account"]}>
          <NormalTitle
            title={"You can track your order status in your"}
            variant={"bolded"}
          />

          <Link to={"/users/account"} className={styles["link"]}>Account</Link>
        </div>
      </div>
      <div className={styles["image"]}>
        <img
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1718984589/template_images/sbs_lp_forgetmenot_whetr3.jpg"
          alt="image"
          className={styles["img"]}
        />
      </div>
    </section>
  );
};

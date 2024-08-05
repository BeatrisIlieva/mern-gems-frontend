import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

import { XLargeTitle } from "../XLargeTitle/XLargeTitle";

import { NormalTitle } from "../NormalTitle/NormalTitle";

import { OrderInformation } from "./OrderInformation/OrderInformation";

import { useService } from "../../hooks/useService";

import { orderServiceFactory } from "../../services/orderService";

import styles from "./OrderConfirmation.module.css";

export const OrderConfirmation = () => {
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

  return (
    <section className={styles["order-confirmation"]}>
      <div className={styles["info"]}>
        <XLargeTitle title={"Thank you for your purchase!"} />
        <NormalTitle
          title={"Your order has been successfully placed."}
          variant={"bolded"}
        />
        <OrderInformation orderInformation={orderInformation} />
        <div className={styles["link-to-account"]}>
          <NormalTitle
            title={"You can track your order status in your"}
            variant={"bolded"}
          />
          <Link to={"/users/account"} className={styles["link"]}>
            Account
          </Link>
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

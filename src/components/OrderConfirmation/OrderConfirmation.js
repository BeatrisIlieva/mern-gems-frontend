import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

import { NormalTitle } from "../NormalTitle/NormalTitle";

import { ShippingInformation } from "./ShippingInformation/ShippingInformation";
import { LoginInformation } from "./LoginInformation/LoginInformation";
import { OrderInformation } from "./OrderInformation/OrderInformation";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

import { useService } from "../../hooks/useService";
import { userLoginDetailsServiceFactory } from "../../services/userLoginDetailsService";
import { userShippingDetailsServiceFactory } from "../../services/userShippingDetailsService";
import { orderServiceFactory } from "../../services/orderService";

import styles from "./OrderConfirmation.module.css";

export const OrderConfirmation = () => {
  const [userLoginDetails, setUserLoginDetails] = useState(null);

  const { userId } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  const orderService = useService(orderServiceFactory);
  const [orderInformation, setOrderInformation] = useState(null);

  const [userShippingDetails, setUserShippingDetails] = useState(null);

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  useEffect(() => {
    userLoginDetailsService
      .getOne(userId)
      .then((data) => {
        setUserLoginDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userLoginDetailsService, userId]);

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

  useEffect(() => {
    userShippingDetailsService
      .getOne(userId)
      .then((data) => {
        setUserShippingDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userShippingDetailsService, userId]);

  return (
    <>
      {userLoginDetails && orderInformation && userShippingDetails ? (
        <section className={styles["order-confirmation"]}>
          <div className={styles["info"]}>
            <ShippingInformation userShippingDetails={userShippingDetails} />
            <NormalTitle
              title={"Your order has been successfully placed."}
              variant={"bolded"}
            />
            <LoginInformation userLoginDetails={userLoginDetails} />
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
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

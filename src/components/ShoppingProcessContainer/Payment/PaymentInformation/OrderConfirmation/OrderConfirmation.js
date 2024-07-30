import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../hooks/useService";
import { orderServiceFactory } from "../../../../../services/orderService";
import { userServiceFactory } from "../../../../../services/userService";

import { Popup } from "../../../../Popup/Popup";

import { MediumTitle } from "../../../../MediumTitle/MediumTitle";
import { SmallTitle } from "../../../../SmallTitle/SmallTitle";
import { SpanTitle } from "../../../../SpanTitle/SpanTitle";

import { convertToReadableDate } from "../../../../../utils/convertToReadableDate";
import styles from "./OrderConfirmation.module.css";
export const OrderConfirmation = ({ toggleDisplayOrderConfirmationPopup }) => {
  const { userId } = useAuthenticationContext();
  const [userShippingInformation, setUserShippingInformation] = useState([]);
  const [userLoginInformation, setUserLoginInformation] = useState([]);
  const [order, setOrder] = useState([]);
  const orderService = useService(orderServiceFactory);
  const userService = useService(userServiceFactory);

  const navigate = useNavigate();

  useEffect(() => {
    orderService
      .confirm(userId)
      .then((data) => {
        setOrder(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    userService
      .getUserShippingDetails(userId)
      .then((data) => {
        setUserShippingInformation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    userService
      .getUserLoginDetails(userId)
      .then((data) => {
        setUserLoginInformation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const readableDate = convertToReadableDate(order.createdAt);

  const closePopup = () => {
    toggleDisplayOrderConfirmationPopup()
navigate("/users/shopping-bag")
  }

  return (
    <Popup
      isVisible={true}
      variant={"order"}
      popupCloseHandler={closePopup}
    >
      <section className={styles["order-confirmation"]}>
        <MediumTitle
          title={`Thank you for your purchase, ${userShippingInformation.firstName}!`}
        />
        <SmallTitle title={"Your order has been successfully placed"} />
        <SpanTitle title={`Order Number: ${order._id}`} />
        <SpanTitle title={`Order Date: ${readableDate}`} />
        <SpanTitle title={`Status: ${order.status}`} />

        <MediumTitle
          title={`A confirmation email has been sent to: ${userLoginInformation.email}`}
        />
        <h3>
          You can track your order status and find detailed order information in
          your <Link to={"/users/account"}>Account</Link>
        </h3>
      </section>
    </Popup>
  );
};

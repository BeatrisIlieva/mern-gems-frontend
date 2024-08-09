import { useState, useEffect } from "react";

import { OrderHistoryList } from "./OrderHistoryList/OrderHistoryList";
import { EmptyOrderHistory } from "./EmptyOrderHistory/EmptyOrderHistory";
import { SectionContainer } from "../SectionContainer/SectionContainer";
import { Popup } from "../../Popup/Popup";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";

import { orderServiceFactory } from "../../../services/orderService";

import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./OrderHistory.module.css";

export const OrderHistory = () => {
  const { userId } = useAuthenticationContext();

  const orderService = useService(orderServiceFactory);

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    orderService
      .getAll(userId)
      .then((data) => {
        setOrderItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [orderService, userId]);

  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  return (
    <>
      <SectionContainer
        sectionTitle={"Order History"}
        callBackFunction={toggleDisplayPopup}
        icon={faClockRotateLeft}
        buttonTitle={"View Order History"}
      />
      {displayPopup && (
        <Popup
          popupCloseHandler={toggleDisplayPopup}
          title={"Order History"}
          variant={"large"}
        >
          {orderItems.length < 1 ? (
            <EmptyOrderHistory />
          ) : (
            <ul role="list" className={styles["order-history"]}>
              {orderItems.map((item) => (
                <li key={item._id}>
                  <OrderHistoryList {...item} />
                </li>
              ))}
            </ul>
          )}
        </Popup>
      )}
    </>
  );
};

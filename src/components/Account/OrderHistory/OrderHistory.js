import { useState, useEffect } from "react";
import { useService } from "../../../hooks/useService";
import { orderServiceFactory } from "../../../services/orderService";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { OrderHistoryList } from "./OrderHistoryList/OrderHistoryList";
import { InfoMessage } from "../../InfoMessage/InfoMessage";

import { Collection } from "../../Collection/Collection";
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

  return (
    <>
      {orderItems.length < 1 ? (
        <div>
          <InfoMessage
            title={"You have no orders"}
            subtitle={"Explore and add something you love."}
          />
          <Collection />
        </div>
      ) : (
        <ul role="list" className={styles["order-history"]}>
          {orderItems.map((item) => (
            <li key={item._id} className={styles["order-history-item"]}>
              <OrderHistoryList {...item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

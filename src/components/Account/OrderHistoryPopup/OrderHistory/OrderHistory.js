import { useState, useEffect } from "react";
import { useService } from "../../../../hooks/useService";
import { orderServiceFactory } from "../../../../services/orderService";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { OrderHistoryList } from "./OrderHistoryList/OrderHistoryList";

export const OrderHistory = () => {
  const { userId } = useAuthenticationContext();

  const orderService = useService(orderServiceFactory);

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    orderService
      .getAll(userId)
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [orderService, userId]);

  return (
    <ul role="list">
      {orderItems.map((item) => (
        <li key={item._id}>
          <OrderHistoryList {...item} />
        </li>
      ))}
    </ul>
  );
};

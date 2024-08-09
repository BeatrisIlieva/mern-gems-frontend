import { OrderHistoryList } from "./OrderHistoryList/OrderHistoryList";

import styles from "./NonEmptyOrderHistory.module.css";

export const NonEmptyOrderHistory = ({ orderItems }) => {
  return (
    <ul role="list" className={styles["order-history"]}>
      {orderItems.map((item) => (
        <li key={item._id}>
          <OrderHistoryList {...item} />
        </li>
      ))}
    </ul>
  );
};

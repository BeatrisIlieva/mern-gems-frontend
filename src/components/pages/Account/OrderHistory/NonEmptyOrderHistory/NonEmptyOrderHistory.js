import { OrderHistoryList } from "./OrderHistoryList/OrderHistoryList";
import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";

import styles from "./NonEmptyOrderHistory.module.css";

export const NonEmptyOrderHistory = ({ orderItems }) => {
  return (
    <>
      <LargeTitle title={"Order History"} textAlign={"align-center"} />
      <ul role="list" className={styles["non-empty-order-history"]}>
        {orderItems.map((item) => (
          <li key={item._id}>
            <OrderHistoryList {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

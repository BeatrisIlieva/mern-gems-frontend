import styles from "./OrderHistoryList.module.css";
import { JewelryCard } from "../../../../JewelryCard/JewelryCard";

export const OrderHistoryList = ({
  _id,
  status,
  createdAt,
  totalPrice,
  jewelries,
}) => {
  const date = createdAt.split("T")[0];
  return (
    <section className={styles["order-history-list"]}>
      <div className={styles["order-info"]}>
        <div className={styles["status"]}>
          <span className={styles["bolded"]}>Status:</span> {status}
        </div>
        <div className={styles["created-at"]}>
          <span className={styles["bolded"]}>Created At:</span> {date}
        </div>
        <div className={styles["total-price"]}>
          <span className={styles["bolded"]}>Total:</span> ${totalPrice}
        </div>
      </div>
      <ul className={styles["jewelries"]} role="list">
        {jewelries.map((item) => (
          <li key={item._id} className={styles["jewelry-item"]}>
            <JewelryCard {...item} variant={"bag-list"} />
          </li>
        ))}
      </ul>
    </section>
  );
};

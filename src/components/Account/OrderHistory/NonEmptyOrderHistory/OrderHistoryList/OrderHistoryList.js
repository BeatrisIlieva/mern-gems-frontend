import { JewelryCard } from "../../../../JewelryCard/JewelryCard";
import { NormalTitle } from "../../../../reusable/NormalTitle/NormalTitle";

import { convertToReadableDate } from "../../../../../utils/convertToReadableDate";

import styles from "./OrderHistoryList.module.css";

export const OrderHistoryList = ({
  status,
  createdAt,
  totalPrice,
  jewelries,
}) => {
  const readableDate = convertToReadableDate(createdAt);

  return (
    <section className={styles["order-history-list"]}>
      <div className={styles["order-info"]}>
        <NormalTitle title={`Status: ${status}`} variant={"regular"} />
        <NormalTitle
          title={`Created at: ${readableDate}`}
          variant={"regular"}
        />
        <NormalTitle title={`Total: $ ${totalPrice}`} variant={"regular"} />
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

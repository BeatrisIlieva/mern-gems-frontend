import { OrderHistoryList } from "./OrderHistoryList/OrderHistoryList";
import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import { ORDER_HISTORY_NAMING } from "../constants/languageRelated";

import styles from "./NonEmptyOrderHistory.module.css";

export const NonEmptyOrderHistory = ({ orderItems }) => {
  const { language } = useLanguageContext();

  const title = ORDER_HISTORY_NAMING[language];

  return (
    <>
      <LargeTitle title={title} textAlign={"align-center"} />
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

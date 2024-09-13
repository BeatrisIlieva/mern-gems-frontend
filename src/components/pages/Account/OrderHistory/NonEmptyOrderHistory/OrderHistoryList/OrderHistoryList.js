import { JewelryCard } from "../../../../../reusable/JewelryCard/JewelryCard";
import { NormalTitle } from "../../../../../reusable/NormalTitle/NormalTitle";

import { useLanguageContext } from "../../../../../../contexts/LanguageContext";

import {
  STATUS_NAMING,
  CREATED_AT_NAMING,
  TOTAL_NAMING,
} from "./constants/languageRelated";

import { convertToReadableDate } from "../../../../../../utils/convertToReadableDate";

import styles from "./OrderHistoryList.module.css";

export const OrderHistoryList = ({
  status,
  createdAt,
  totalPrice,
  jewelries,
}) => {
  const { language } = useLanguageContext();

  const statusTitle = STATUS_NAMING[language];

  const createdAtTitle = CREATED_AT_NAMING[language];

  const totalTitle = TOTAL_NAMING[language];

  const readableDate = convertToReadableDate(createdAt);

  return (
    <section className={styles["order-history-list"]}>
      <div className={styles["order-info"]}>
        <NormalTitle title={`${statusTitle}: ${status}`} variant={"regular"} />
        <NormalTitle
          title={`${createdAtTitle}: ${readableDate}`}
          variant={"regular"}
        />
        <NormalTitle
          title={`${totalTitle}: $ ${totalPrice}`}
          variant={"regular"}
        />
      </div>
      <ul className={styles["jewelries"]} role="list">
        {jewelries.map((item) => (
          <li key={item._id} className={styles["jewelry-item"]}>
            <JewelryCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

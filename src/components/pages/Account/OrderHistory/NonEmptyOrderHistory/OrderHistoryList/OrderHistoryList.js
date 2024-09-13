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
  statusEnglish,
  statusChinese,
  statusBulgarian,
  createdAt,
  totalPrice,
  jewelries,
}) => {
  const { language } = useLanguageContext();

  const statusTitle = STATUS_NAMING[language];

  const createdAtTitle = CREATED_AT_NAMING[language];

  const totalTitle = TOTAL_NAMING[language];

  const readableDate = convertToReadableDate(createdAt);

  let status;

  if (language === English) {
    status = statusEnglish;
  } else if (language === Chinese) {
    status = statusChinese;
  } else {
    status = statusBulgarian;
  }

  return (
    <section className={styles["order-history-list"]}>
      <div className={styles["order-info"]}>
        <div className={styles["title-wrapper"]}>
          <NormalTitle title={`${statusTitle}:`} variant={"bolded"} />
          <NormalTitle title={`${status}`} variant={"regular"} />
        </div>
        <div className={styles["title-wrapper"]}>
          <NormalTitle title={`${createdAtTitle}:`} variant={"bolded"} />
          <NormalTitle title={`${readableDate}`} variant={"regular"} />
        </div>
        <div className={styles["title-wrapper"]}>
          <NormalTitle title={`${totalTitle}:`} variant={"bolded"} />
          <NormalTitle title={`$ ${totalPrice}`} variant={"regular"} />
        </div>
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

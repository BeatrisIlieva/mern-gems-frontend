import { memo } from "react";

import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import { DELIVERY_NAMING } from "./constants/languageRelated";

import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Delivery.module.css";

export const Delivery = memo(() => {
  const { language } = useLanguageContext();

  return (
    <div className={styles["delivery"]}>
      <FontAwesomeIcon icon={faTruck} className={styles["icon"]} />
      <LargeTitle title={DELIVERY_NAMING[language]} variant={"italic"} />
    </div>
  );
});

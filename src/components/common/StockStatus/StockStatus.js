import { useState, useEffect, memo } from "react";

import { useLanguageContext } from "../../../contexts/LanguageContext";

import { STATUS_BY_LANGUAGE } from "./constants/languageRelated";
import { checkIfItemsHasBeenSoldOut } from "./helpers/checkIfItemsHasBeenSoldOut";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./StockStatus.module.css";

export const StockStatus = memo(({ jewelriesByCategory }) => {
  const { language } = useLanguageContext();

  const allQuantitiesZero = checkIfItemsHasBeenSoldOut(jewelriesByCategory[0]);

  const [isSoldOut, setIsSoldOut] = useState(allQuantitiesZero);

  useEffect(() => {
    setIsSoldOut(checkIfItemsHasBeenSoldOut(jewelriesByCategory[0]));
  }, [jewelriesByCategory]);

  return (
    <span className={styles["stock"]}>
      <FontAwesomeIcon
        icon={faCircle}
        className={`${styles["icon"]} ${
          isSoldOut ? styles["sold-out"] : styles["in-stock"]
        }`}
      />
      {isSoldOut
        ? STATUS_BY_LANGUAGE["Sold Out"][language]
        : STATUS_BY_LANGUAGE["In Stock"][language]}
      {/* {isSoldOut ? "Sold Out" : "In Stock"} */}
    </span>
  );
});

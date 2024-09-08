import { useState, useEffect, memo } from "react";

import { checkIfItemsHasBeenSoldOut } from "./helpers/checkIfItemsHasBeenSoldOut";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./StockStatus.module.css";

export const StockStatus = memo(({ jewelriesByCategory }) => {
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
      {isSoldOut ? "Sold Out" : "In Stock"}
    </span>
  );
});

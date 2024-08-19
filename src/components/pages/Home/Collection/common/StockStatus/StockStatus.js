import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { checkIfItemsHasBeenSoldOut } from "../../Category/CategoryCard/helpers/checkIfItemsHasBeenSoldOut";

import styles from "./StockStatus.module.css";

export const StockStatus = ({ entity }) => {
  const allQuantitiesZero = checkIfItemsHasBeenSoldOut(entity);

  const [isSoldOut, setIsSoldOut] = useState(allQuantitiesZero);

  useEffect(() => {
    setIsSoldOut(checkIfItemsHasBeenSoldOut(entity));
  }, [entity]);

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
};

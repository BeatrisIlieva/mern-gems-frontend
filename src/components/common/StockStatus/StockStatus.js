import { useState, useEffect } from "react";

import { checkIfItemsHasBeenSoldOut } from "./helpers/checkIfItemsHasBeenSoldOut";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./StockStatus.module.css";

export const StockStatus = ({ selectedEntityColor }) => {
  const allQuantitiesZero = checkIfItemsHasBeenSoldOut(selectedEntityColor);

  const [isSoldOut, setIsSoldOut] = useState(allQuantitiesZero);

  useEffect(() => {
    setIsSoldOut(checkIfItemsHasBeenSoldOut(selectedEntityColor));
  }, [selectedEntityColor]);

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

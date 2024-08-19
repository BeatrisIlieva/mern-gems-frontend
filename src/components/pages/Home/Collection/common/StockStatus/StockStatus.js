import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./StockStatus.module.css";

export const StockStatus = ({ isSoldOut }) => {
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Quantity.module.css";

export const Quantity = ({ quantity }) => {
  return (
    <div className={styles["quantity"]}>
      <FontAwesomeIcon icon={faPlus} className={styles["icon"]} />
      {quantity}
      <FontAwesomeIcon icon={faMinus} className={styles["icon"]} />
    </div>
  );
};

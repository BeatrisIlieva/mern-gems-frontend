import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import styles from "./Remove.module.css";

export const Remove = () => {
  return (
    <div className={styles["wrapper"]}>
      <FontAwesomeIcon icon={faTrashCan} className={styles["icon"]} />
      <span>Remove</span>
    </div>
  );
};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Increase } from "./Increase/Increase";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./UpdateQuantity.module.css";

export const UpdateQuantity = ({ bagId, inventoryId, quantity }) => {
  return (
    <div className={styles["update-quantity"]}>
      <Increase bagId={bagId} inventoryId={inventoryId}/>
      {quantity}
      <FontAwesomeIcon icon={faMinus} className={styles["icon"]} />
    </div>
  );
};

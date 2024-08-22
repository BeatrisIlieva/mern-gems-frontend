import { useBagContext } from "../../../../contexts/BagContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Quantity.module.css";

export const Quantity = ({ bagId, quantity }) => {
  const { increase, decrease } = useBagContext();

  return (
    <div>
      <FontAwesomeIcon
        icon={faPlus}
        className={styles["icon"]}
        onClick={() => increase(bagId)}
      />
      {quantity}
      <FontAwesomeIcon
        icon={faMinus}
        className={styles["icon"]}
        onClick={() => decrease(bagId)}
      />
    </div>
  );
};

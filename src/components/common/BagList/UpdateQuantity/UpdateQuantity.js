import { memo } from "react";

import { useBagContext } from "../../../../contexts/BagContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./UpdateQuantity.module.css";

export const UpdateQuantity = memo(
  ({ bagId, bagQuantity, inventoryQuantity }) => {
    const { increase, decrease } = useBagContext();

    return (
      <div className={styles["update-quantity"]} data-testid="increase-button">
        <button disabled={inventoryQuantity < 1} className={styles["button"]}>
          <FontAwesomeIcon
            data-testid="increase-icon"
            icon={faPlus}
            className={
              inventoryQuantity >= 1 ? styles["enabled"] : styles["disabled"]
            }
            onClick={() => increase(bagId)}
          />
        </button>
        {bagQuantity}
        <FontAwesomeIcon
          data-testid="decrease-icon"
          icon={faMinus}
          className={styles["enabled"]}
          onClick={() => decrease(bagId)}
        />
      </div>
    );
  }
);

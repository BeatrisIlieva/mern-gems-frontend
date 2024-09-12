import { memo } from "react";

import { useBagContext } from "../../../../contexts/BagContext";
import { useLanguageContext } from "../../../../contexts/LanguageContext";

import { UPDATING_NAMING } from "./constants/languageRelated";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./UpdateQuantity.module.css";

export const UpdateQuantity = memo(
  ({
    bagId,
    bagQuantity,
    inventoryQuantity,
    isProcessing,
    processingBagId,
  }) => {
    const { language } = useLanguageContext();

    const { increase, decrease } = useBagContext();

    return (
      <div className={styles["wrapper"]}>
        {isProcessing && processingBagId === bagId && (
          <span className={styles["updating"]}>
            {UPDATING_NAMING[language]}
          </span>
        )}
        <div
          className={styles["update-quantity"]}
          data-testid="increase-button"
        >
          <button
            disabled={inventoryQuantity < 1 || isProcessing}
            className={styles["button"]}
          >
            <FontAwesomeIcon
              data-testid="increase-icon"
              icon={faPlus}
              className={
                inventoryQuantity < 1 || isProcessing
                  ? styles["disabled"]
                  : styles["enabled"]
              }
              onClick={() => increase(bagId)}
            />
          </button>
          {bagQuantity}
          <FontAwesomeIcon
            data-testid="decrease-icon"
            icon={faMinus}
            onClick={() => decrease(bagId)}
            className={isProcessing ? styles["disabled"] : styles["enabled"]}
          />
        </div>
      </div>
    );
  }
);

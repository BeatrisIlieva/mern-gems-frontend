import { useEffect, useState } from "react";

import { useService } from "../../../../hooks/useService";
import { bagServiceFactory } from "../../../../services/bagService";

import { useBagContext } from "../../../../contexts/BagContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Icon } from "../../../Icon/Icon";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./IncreaseQuantityButton.module.css";

export const IncreaseQuantityButton = ({
  bagId,
  quantity,
  inventoryQuantity,
}) => {
  const bagService = useService(bagServiceFactory);
  const [buttonDisabled, setButtonDisabled] = useState(
    quantity >= inventoryQuantity
  );

  const { updateBagTotalQuantityIntoState, updateBagItemQuantityIntoState } =
    useBagContext();

  const updateBagItemQuantity = async () => {
    try {
      await bagService.increase(bagId);

      updateBagItemQuantityIntoState(bagId, +1);

      updateBagTotalQuantityIntoState(+1);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    setButtonDisabled(quantity >= inventoryQuantity);
  }, [quantity, inventoryQuantity]);

  return (
    <button disabled={buttonDisabled} className={styles["button"]}>
      <FontAwesomeIcon
        onClick={updateBagItemQuantity}
        icon={faPlus}
        className={
          buttonDisabled === true
            ? `${styles["disabled"]}`
            : `${styles["enabled"]}`
        }
      />
    </button>
  );
};

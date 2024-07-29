import { useService } from "../../../../hooks/useService";
import { bagServiceFactory } from "../../../../services/bagService";

import { useBagContext } from "../../../../contexts/BagContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Icon } from "../../../Icon/Icon";

import styles from "./UpdateQuantityButton.module.css";

export const UpdateQuantityButton = ({
  icon,
  bagId,
  buttonDisabled,
  delta,
}) => {
  const bagService = useService(bagServiceFactory);

  const { updateBagTotalQuantityIntoState, updateBagItemQuantityIntoState } =
    useBagContext();

  const updateBagItemQuantity = async (bagId, delta) => {
    try {
      if (delta > 0) {
        await bagService.increase(bagId);
      } else {
        await bagService.decrease(bagId);
      }

      updateBagItemQuantityIntoState(bagId, delta);

      updateBagTotalQuantityIntoState(delta);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <button className={styles["button"]} disabled={buttonDisabled}>
      <FontAwesomeIcon
        onClick={() => updateBagItemQuantity(bagId, delta)}
        icon={icon}
        className={
          buttonDisabled === true
            ? `${styles["disabled"]}`
            : `${styles["enabled"]}`
        }
      />
    </button>
  );
};

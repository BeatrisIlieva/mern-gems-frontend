import { useService } from "../../../../hooks/useService";
import { bagServiceFactory } from "../../../../services/bagService";

import { useBagContext } from "../../../../contexts/BagContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Icon } from "../../../Icon/Icon";

import { useBag } from "../../../../hooks/useBag";

import styles from "./UpdateQuantityButton.module.css";

export const UpdateQuantityButton = ({
  title,
  icon,
  bagId,
  buttonDisabled,
  updateBagItemQuantityIntoState,
  delta,
}) => {
  const bagService = useService(bagServiceFactory);

  const { updateBagTotalQuantityIntoState } = useBagContext();

  // const { updateBagItemQuantityIntoState } = useBag();

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
    <FontAwesomeIcon
      onClick={() => updateBagItemQuantity(bagId, delta)}
      icon={icon}
      className={
        buttonDisabled === true
          ? `${styles["disabled"]}`
          : `${styles["enabled"]}`
      }
    />
  );
};

{
  /* <Icon icon={icon} variant={buttonDisabled === true ? "disabled" : "header"} /> */
}

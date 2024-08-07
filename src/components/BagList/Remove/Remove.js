import { useService } from "../../../hooks/useService";
import { bagServiceFactory } from "../../../services/bagService";

import { useBagContext } from "../../../contexts/BagContext";

import styles from "./Remove.module.css";

export const Remove = ({ bagId }) => {
  const { removeBagItem, updateBagTotalQuantity } = useBagContext();

  const bagService = useService(bagServiceFactory);

  const removeItem = async () => {
    await bagService.delete(bagId);

    removeBagItem(bagId);

    updateBagTotalQuantity(-1);
  };

  return (
    <button className={styles["button"]} onClick={removeItem}>
      Remove
    </button>
  );
};

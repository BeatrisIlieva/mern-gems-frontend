import { useBagContext } from "../../../../contexts/BagContext";

import styles from "./BagCount.module.css";

export const BagCount = () => {
  const { bagTotalQuantity } = useBagContext();

  return (
      <h4 className={styles["title"]}>
        {bagTotalQuantity > 1
          ? `(${bagTotalQuantity} items)`
          : `(${bagTotalQuantity} item)`}
      </h4>
  );
};

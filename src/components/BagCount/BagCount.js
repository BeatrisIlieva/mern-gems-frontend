import { NormalTitle } from "../NormalTitle/NormalTitle";

import { useBagContext } from "../../contexts/BagContext";

import styles from "./BagCount.module.css";

export const BagCount = () => {
  const { bagTotalQuantity } = useBagContext();

  return (
    <div className={styles["bag-count"]}>
      <NormalTitle
        title={
          bagTotalQuantity > 1
            ? `(${bagTotalQuantity}) items`
            : `(${bagTotalQuantity}) item`
        }
      />
    </div>
  );
};

import { NormalTitle } from "../NormalTitle/NormalTitle";

import { useBagContext } from "../../contexts/BagContext";

import styles from "./BagCount.module.css";

export const BagCount = () => {
  const { bagTotalQuantityIntoState } = useBagContext();

  return (
    <div className={styles["bag-count"]}>
      <NormalTitle
        title={
          bagTotalQuantityIntoState > 1
            ? `(${bagTotalQuantityIntoState}) items`
            : `(${bagTotalQuantityIntoState}) item`
        }
      />
    </div>
  );
};

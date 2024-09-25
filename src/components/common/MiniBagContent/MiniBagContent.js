import { useEffect, useState, memo } from "react";

import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";

import { useBagContext } from "../../../contexts/BagContext";

import styles from "./MiniBagContent.module.css";

export const MiniBagContent = memo(({ toggleDisplayMiniBagPopup }) => {
  const { bagTotalQuantity } = useBagContext();

  const [miniBagIsEmpty, setMiniBagIsEmpty] = useState(false);

  useEffect(() => {
    setMiniBagIsEmpty(bagTotalQuantity === 0);
  }, [bagTotalQuantity]);

  return (
    <div className={styles["mini-bag"]}>
      {miniBagIsEmpty ? (
        <EmptyMiniBag popupCloseHandler={toggleDisplayMiniBagPopup} />
      ) : (
        <NonEmptyMiniBag popupCloseHandler={toggleDisplayMiniBagPopup} />
      )}
    </div>
  );
});

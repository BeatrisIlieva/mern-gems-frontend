import { useEffect, useState, memo, useCallback } from "react";

import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";

import { useBagContext } from "../../../contexts/BagContext";

import styles from "./MiniBagContent.module.css";

export const MiniBagContent = memo(
  ({ toggleDisplayMiniBagPopup, updateMovePopup }) => {
    const { bagTotalQuantity } = useBagContext();

    const [miniBagIsEmpty, setMiniBagIsEmpty] = useState(false);

    useEffect(() => {
      setMiniBagIsEmpty(bagTotalQuantity === 0);
    }, [bagTotalQuantity]);

    const clickHandler = useCallback(() => {
      return new Promise((resolve) => {
        updateMovePopup();

        setTimeout(() => {
          toggleDisplayMiniBagPopup();
          updateMovePopup();
          resolve();
        }, 400);
      });
    }, []);

    return (
      <div className={styles["mini-bag"]}>
        {miniBagIsEmpty ? (
          <EmptyMiniBag popupCloseHandler={clickHandler} />
        ) : (
          <NonEmptyMiniBag popupCloseHandler={clickHandler} />
        )}
      </div>
    );
  }
);

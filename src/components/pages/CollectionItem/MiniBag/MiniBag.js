import { useEffect, useState, memo } from "react";

import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { XMark } from "../../../reusable/XMark/XMark";
import { CursorImageEffect } from "../../../common/CursorImageEffect/CursorImageEffect";

import { useBagContext } from "../../../../contexts/BagContext";

import { usePopup } from "../../../../hooks/usePopup";

import styles from "./MiniBag.module.css";

export const MiniBag = memo(({ toggleDisplayMiniBagPopup, displayPopup }) => {
  const { bagTotalQuantity } = useBagContext();

  const [miniBagIsEmpty, setMiniBagIsEmpty] = useState(false);

  useEffect(() => {
    setMiniBagIsEmpty(bagTotalQuantity === 0);
  }, [bagTotalQuantity]);

  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleDisplayPopup: toggleDisplayMiniBagPopup,
    displayPopup,
  });

  return (
    <section
      className={`${styles["overlay"]} ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
      data-testid="mini-bag"
    >
      <CursorImageEffect />
      <div
        ref={popupRef}
        className={`${styles["modal"]} ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        <XMark callbackFunction={popupCloseHandler} />
        <div className={styles["mini-bag"]}>
          {miniBagIsEmpty ? (
            <EmptyMiniBag popupCloseHandler={popupCloseHandler} />
          ) : (
            <NonEmptyMiniBag popupCloseHandler={popupCloseHandler} />
          )}
        </div>
      </div>
    </section>
  );
});

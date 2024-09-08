import { useEffect, useState, memo } from "react";

import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { XMark } from "../../../common/XMark/XMark";

import { useBagContext } from "../../../../contexts/BagContext";

import styles from "./MiniBag.module.css";

export const MiniBag = memo(({ toggleDisplayMiniBagPopup }) => {
  const { bagTotalQuantity } = useBagContext();

  const [miniBagIsEmpty, setMiniBagIsEmpty] = useState(false);

  useEffect(() => {
    setMiniBagIsEmpty(bagTotalQuantity === 0);
  }, [bagTotalQuantity]);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const popupCloseHandler = () => {
    return new Promise((resolve) => {
      setIsTransitioning(true);

      setTimeout(() => {
        toggleDisplayMiniBagPopup();
        setIsTransitioning(false);
        resolve();
      }, 400);
    });
  };

  return (
    <section
      className={`${styles["overlay"]} ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
      data-testid="mini-bag"
    >
      <div
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

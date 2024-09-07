import { useEffect, useState } from "react";

import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { XMark } from "../../../common/XMark/XMark";

import { useBagContext } from "../../../../contexts/BagContext";

import styles from "./MiniBag.module.css";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { totalPrice, bagTotalQuantity } = useBagContext();

  const [miniBagIsEmpty, setMiniBagIsEmpty] = useState(false);

  useEffect(() => {
    setMiniBagIsEmpty(bagTotalQuantity === 0 && totalPrice === 0);
  }, [bagTotalQuantity, totalPrice]);

  const [isTransitioning, setIsTransitioning] = useState(false);

  // const popupCloseHandler = () => {
  //   setIsTransitioning(true);

  //   setTimeout(() => {
  //     toggleDisplayMiniBagPopup();
  //     setIsTransitioning(false);
  //   }, 400);
  // };

  const popupCloseHandler = () => {
    return new Promise((resolve) => {
      setIsTransitioning(true);

      setTimeout(() => {
        toggleDisplayMiniBagPopup();
        setIsTransitioning(false);
        resolve(); // Resolve the promise once the transition is done
      }, 400); // Assuming 400ms is your transition duration
    });
  };

  return (
    <section
      className={`${styles["overlay"]} ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
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
};

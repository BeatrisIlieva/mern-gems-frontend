import { useEffect, useState, useRef, memo } from "react";

import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { XMark } from "../../../common/XMark/XMark";

import { useBagContext } from "../../../../contexts/BagContext";

import { usePopup } from "../../../../hooks/usePopup";

import styles from "./MiniBag.module.css";

export const MiniBag = memo(({ toggleDisplayMiniBagPopup, displayPopup}) => {
  // const popupRef = useRef(null);

  const { bagTotalQuantity } = useBagContext();

  const [miniBagIsEmpty, setMiniBagIsEmpty] = useState(false);

  useEffect(() => {
    setMiniBagIsEmpty(bagTotalQuantity === 0);
  }, [bagTotalQuantity]);

  const {isTransitioning, popupRef, popupCloseHandler} = usePopup({ toggleDisplayMiniBagPopup, displayPopup})

  // const [isTransitioning, setIsTransitioning] = useState(false);

  // const popupCloseHandler = () => {
  //   return new Promise((resolve) => {
  //     setIsTransitioning(true);

  //     setTimeout(() => {
  //       toggleDisplayMiniBagPopup();
  //       setIsTransitioning(false);
  //       resolve();
  //     }, 400);
  //   });
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (popupRef.current && !popupRef.current.contains(event.target)) {
  //       popupCloseHandler();
  //     }
  //   };

  //   const handleKeyDown = (event) => {
  //     if (event.key === "Escape") {
  //       popupCloseHandler();
  //     }
  //   };

  //   if (displayPopup) {
  //     document.addEventListener("mousedown", handleClickOutside);

  //     window.addEventListener("keydown", handleKeyDown);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);

  //     window.removeEventListener("keydown", handleKeyDown);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);

  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [displayPopup]);

  return (
    <section
      className={`${styles["overlay"]} ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
      data-testid="mini-bag"
    >
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

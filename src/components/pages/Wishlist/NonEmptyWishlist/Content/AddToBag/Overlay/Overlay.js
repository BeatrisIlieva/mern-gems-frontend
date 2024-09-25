import { Modal } from "./Modal/Modal";
import { CursorImageEffect } from "../../../../../../common/CursorImageEffect/CursorImageEffect";

import styles from "./Overlay.module.css";

export const Overlay = ({
  toggleDisplayPopup,
  jewelriesByCategory,
  popupCloseHandler,
  updateSelectedColor,
  toggleDisplayMiniBagPopup,
  isTransitioning,
  popupRef,
  categoryId,
}) => {
  return (
    <section
      className={`${styles["overlay"]} ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
    >
      <CursorImageEffect />
      <Modal
        toggleDisplayPopup={toggleDisplayPopup}
        jewelriesByCategory={jewelriesByCategory}
        popupCloseHandler={popupCloseHandler}
        updateSelectedColor={updateSelectedColor}
        toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
        isTransitioning={isTransitioning}
        popupRef={popupRef}
        categoryId={categoryId}
      />
    </section>
  );
};

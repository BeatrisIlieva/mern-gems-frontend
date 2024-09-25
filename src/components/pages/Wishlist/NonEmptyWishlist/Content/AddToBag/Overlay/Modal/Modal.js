import { Images } from "./Images/Images";
import { InfoAndAction } from "./InfoAndAction/InfoAndAction";

import styles from "./Modal.module.css";

export const Modal = ({
  toggleDisplayPopup,
  jewelriesByCategory,
  popupCloseHandler,
  updateSelectedColor,
  toggleDisplayMiniBagPopup,
  isTransitioning,
  popupRef,
  categoryId,
  displayPopup,
displayMiniBagPopup,
displayPopupContent
}) => {
  return (
    <div
      ref={popupRef}
      className={`${styles["modal"]} ${
        isTransitioning ? styles["slide-out"] : styles["slide-in"]
      }`}
    >
      <div className={styles["add-to-bag"]}>
        <div className={styles["wrapper"]}>
          <Images jewelriesByCategory={jewelriesByCategory} />
          <InfoAndAction
            popupCloseHandler={popupCloseHandler}
            jewelriesByCategory={jewelriesByCategory}
            updateSelectedColor={updateSelectedColor}
            toggleDisplayPopup={toggleDisplayPopup}
            toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
            categoryId={categoryId}
          />
        </div>
      </div>
    </div>
  );
};

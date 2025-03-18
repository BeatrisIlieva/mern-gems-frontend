import { Images } from "./Images/Images";
import { InfoAndAction } from "./InfoAndAction/InfoAndAction";

import styles from "./PopupItems.module.css";

export const PopupItems = ({
  toggleDisplayPopup,
  jewelriesByCategory,
  popupCloseHandler,
  updateSelectedColor,
  toggleDisplayMiniBagPopup,
  categoryId,
}) => {
  return (
    <section className={styles["popup-items"]}>
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
    </section>
  );
};

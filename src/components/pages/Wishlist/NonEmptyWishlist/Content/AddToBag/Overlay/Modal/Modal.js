import { XMark } from "../../../../../../../reusable/XMark/XMark";
import { Form } from "./Form/Form";
import { LargeTitle } from "../../../../../../../reusable/LargeTitle/LargeTitle";
import { Paragraph } from "../../../../../../../reusable/Paragraph/Paragraph";
import { MiniImages } from "../../../../../../../reusable/MiniImages/MiniImages";
import { StockStatus } from "../../../../../../../common/StockStatus/StockStatus";
import { Images } from "./Images/Images";

import { useLanguageContext } from "../../../../../../../../contexts/LanguageContext";

import { CATEGORY_NAMES_BY_LANGUAGE } from "../../../../../../../../constants/categoryNamesByLanguage";

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
}) => {
  const { language } = useLanguageContext();

  const jewelryTitle = CATEGORY_NAMES_BY_LANGUAGE[categoryId][language];

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
          <div className={styles["info-and-action-wrapper"]}>
            <XMark callbackFunction={popupCloseHandler} />
            <div className={styles["top-wrapper"]}>
              <StockStatus jewelriesByCategory={jewelriesByCategory} />
              <MiniImages
                jewelriesByCategory={jewelriesByCategory}
                clickHandler={updateSelectedColor}
              />
            </div>
            <div>
              <LargeTitle title={jewelryTitle} textAlign={"left"} />
              <Paragraph
                text={`${jewelriesByCategory[0].description[language]}`}
                textAlign={"left"}
                color={"gray"}
              />
            </div>
            <Form
              jewelriesByCategory={jewelriesByCategory}
              toggleDisplayPopup={toggleDisplayPopup}
              toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

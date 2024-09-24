import { CursorImageEffect } from "../../../../common/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../../../reusable/XMark/XMark";
import { Form } from "./Form/Form";
import { Images } from "../../../CollectionItem/Images/Images";
import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { Paragraph } from "../../../../reusable/Paragraph/Paragraph";
import { JewelryImage } from "../../../../reusable/JewelryImage/JewelryImage";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";
import { usePopup } from "../../../../../hooks/usePopup";

import { CATEGORY_NAMES_BY_LANGUAGE } from "../../../../../constants/categoryNamesByLanguage";

import styles from "./Popup.module.css";

export const Popup = ({
  toggleDisplayPopup,
  displayPopup,
  jewelriesByCategory,
}) => {
  const { language } = useLanguageContext();

  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleDisplayPopup,
    displayPopup,
  });

  const categoryId = jewelriesByCategory[0].category;
  const jewelryTitle = CATEGORY_NAMES_BY_LANGUAGE[categoryId][language];

  return (
    <section
      className={`${styles["overlay"]} ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
    >
      <CursorImageEffect />
      <div
        ref={popupRef}
        className={`${styles["modal"]} ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        <XMark callbackFunction={popupCloseHandler} />
        <div className={styles["add-to-bag"]}>
          <div className={styles["wrapper"]}>
            <div className={styles["images"]}>
              {/* <div className={styles["thumbnail"]}> */}
                <img
                  className={styles["image"]}
                  src={jewelriesByCategory[0].firstImageUrl}
                  alt=""
                />
              {/* </div> */}
              {/* <div className={styles["thumbnail"]}> */}
                <img
                  className={styles["image"]}
                  src={jewelriesByCategory[0].secondImageUrl}
                  alt=""
                />
              {/* </div> */}
            </div>
            <div className={styles["info-and-action-wrapper"]}>
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

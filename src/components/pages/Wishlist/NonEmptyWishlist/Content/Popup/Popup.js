import { useState, useEffect, useCallback } from "react";

import { CursorImageEffect } from "../../../../../common/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../../../../reusable/XMark/XMark";
import { Form } from "./Form/Form";
import { LargeTitle } from "../../../../../reusable/LargeTitle/LargeTitle";
import { Paragraph } from "../../../../../reusable/Paragraph/Paragraph";
import { MiniImages } from "../../../../../reusable/MiniImages/MiniImages";
import { StockStatus } from "../../../../../common/StockStatus/StockStatus";
import { Images } from "./Images/Images";

import { useLanguageContext } from "../../../../../../contexts/LanguageContext";
import { useBagContext } from "../../../../../../contexts/BagContext";

import { usePopup } from "../../../../../../hooks/usePopup";
import { useService } from "../../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../../services/jewelryService";

import { CATEGORIES_BY_ID } from "../../../../../../constants/categoriesById";
import { COLORS_BY_ID } from "../../../../../../constants/colorsById";
import { CATEGORY_NAMES_BY_LANGUAGE } from "../../../../../../constants/categoryNamesByLanguage";

import styles from "./Popup.module.css";

export const Popup = ({
  toggleDisplayPopup,
  displayPopup,
  categoryTitle,
  colorTitle,
  toggleDisplayMiniBagPopup,
}) => {
  const { language } = useLanguageContext();

  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleDisplayPopup,
    displayPopup,
  });

  const [isColorInitialized, setIsColorInitialized] = useState(false);

  const [selectedColor, setSelectedColor] = useState(colorTitle);

  const updateSelectedColor = useCallback(
    (color) => {
      setSelectedColor(color);
    },
    [setSelectedColor]
  );

  useEffect(() => {
    if (!isColorInitialized) {
      setSelectedColor(colorTitle);
      setIsColorInitialized(true);
    }
  }, [colorTitle, isColorInitialized]);

  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const { bagTotalQuantity } = useBagContext();

  const [jewelryService, setJewelryService] = useState(
    useService(jewelryServiceFactory)
  );

  const categoryId = CATEGORIES_BY_ID[categoryTitle];
  const colorId = COLORS_BY_ID[selectedColor];

  useEffect(() => {
    jewelryService
      .getOne(categoryId, colorId)
      .then((data) => {
        setJewelriesByCategory(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [categoryTitle, jewelryService, bagTotalQuantity, selectedColor]);

  const jewelryTitle = CATEGORY_NAMES_BY_LANGUAGE[categoryId][language];

  return (
    <>
      {jewelriesByCategory.length > 0 && (
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
        </section>
      )}
    </>
  );
};

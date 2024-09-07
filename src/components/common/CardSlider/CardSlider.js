import { useState, useCallback } from "react";

import DualTitleSection from "../../reusable/DualTitleSection/DualTitleSection";
import { PriceRange } from "../PriceRange/PriceRange";
import { StockStatus } from "../StockStatus/StockStatus";
import LargeImages from "../LargeImages/LargeImages";

import { useJewelry } from "../../../hooks/useJewelry";

import { useLargeImagesClick } from "../../../hooks/useLargeImagesClick";

import { INITIAL_CATEGORY_CARD_VALUES } from "../../../constants/initialCategoryCardValues";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./CardSlider.module.css";

export const CardSlider = ({ popupCloseHandler }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = Object.keys(INITIAL_CATEGORY_CARD_VALUES);

  const selectedCategory = categories[currentIndex];

  const selectedColor = INITIAL_CATEGORY_CARD_VALUES[selectedCategory];

  const { jewelriesByCategory } = useJewelry({
    categoryTitle: selectedCategory,
    colorTitle: selectedColor,
  });

  const { largeImagesClickHandler } = useLargeImagesClick({
    categoryTitle: selectedCategory,
    colorTitle: selectedColor,
  });

  const clickHandler = useCallback(() => {
    if (popupCloseHandler) {
      popupCloseHandler();
    }

    largeImagesClickHandler();
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <section className={styles["card-slider"]}>
          <DualTitleSection
            firstTitle={
              <PriceRange jewelriesByCategory={jewelriesByCategory} />
            }
            secondTitle={
              <StockStatus jewelriesByCategory={jewelriesByCategory} />
            }
            variant={"regular"}
          />
          <LargeImages
            jewelriesByCategory={jewelriesByCategory}
            clickHandler={clickHandler}
          />
          <div className={styles["button-wrapper"]}>
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className={styles["icon"]}
              onClick={handlePrev}
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className={styles["icon"]}
              onClick={handleNext}
            />
          </div>
        </section>
      )}
    </>
  );
};

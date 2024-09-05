import { useState, useEffect } from "react";

import { Content } from "../../pages/CollectionList/CategoryCard/Content/Content";

import { useJewelry } from "../../../hooks/useJewelry";

import { INITIAL_CATEGORY_CARD_VALUES } from "../../../constants/initialCategoryCardValues";

import styles from "./CardSlider.module.css";

export const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = Object.keys(INITIAL_CATEGORY_CARD_VALUES);

  const selectedCategory = categories[currentIndex];

  const selectedColor = INITIAL_CATEGORY_CARD_VALUES[selectedCategory];

  const { jewelriesByCategory } = useJewelry({
    categoryTitle: selectedCategory,
    colorTitle: selectedColor,
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
          <Content
            jewelriesByCategory={jewelriesByCategory}
          />

          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </section>
      )}
    </>
  );
};

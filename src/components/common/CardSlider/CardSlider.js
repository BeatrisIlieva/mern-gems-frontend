import { useState } from "react";

import { useJewelry } from "../../../hooks/useJewelry";

import { INITIAL_CATEGORY_CARD_VALUES } from "../../pages/CollectionList/constants/initialCategoryCardValues";

export const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = Object.keys(INITIAL_CATEGORY_CARD_VALUES);

  const currentCategory = categories[currentIndex];

  const currentColor = INITIAL_CATEGORY_CARD_VALUES[currentCategory];

  const { jewelriesByCategory } = useJewelry({
    categoryTitle: currentCategory,
    colorTitle: currentColor,
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
    <div>
      <h2>{currentCategory}</h2>
      <p>Color: {currentColor}</p>

      <ul>
        {jewelriesByCategory.map((jewelry) => (
          <li key={jewelry.id}>{jewelry.name}</li>
        ))}
      </ul>

      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

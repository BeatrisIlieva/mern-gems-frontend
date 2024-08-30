import { useState } from "react";

import { Card } from "./Card/Card";

import { useJewelry } from "../../../../hooks/useJewelry";

export const CategoryCard = ({ categoryTitle, colorTitle }) => {
  const [selectedColor, setSelectedColor] = useState(colorTitle);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateSelectedColor = (color) => {
    setSelectedColor(color);

    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  };

  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle: selectedColor,
  });

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <Card
          jewelriesByCategory={jewelriesByCategory}
          isTransitioning={isTransitioning}
          updateSelectedColor={updateSelectedColor}
        />
      )}
    </>
  );
};

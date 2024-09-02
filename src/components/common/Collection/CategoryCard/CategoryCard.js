import { useState } from "react";

import { Card } from "./Card/Card";

import { useJewelry } from "../../../../hooks/useJewelry";

export const CategoryCard = ({ categoryTitle, colorTitle }) => {
  const [selectedColor, setSelectedColor] = useState(colorTitle);

  const updateSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const { jewelriesByCategory, isLoading } = useJewelry({
    categoryTitle,
    colorTitle: selectedColor,
  });

  return (
    <Card
      jewelriesByCategory={jewelriesByCategory}
      isLoading={isLoading}
      updateSelectedColor={updateSelectedColor}
    />
  );
};

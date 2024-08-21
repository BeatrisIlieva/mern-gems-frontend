import { useState } from "react";

import { CategoryCard } from "./CategoryCard/CategoryCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { useJewelry } from "../../../../../hooks/useJewelry";

export const Category = ({ categoryTitle, colorTitle }) => {
  const [selectedColorTitle, setSelectedColorTitle] = useState(colorTitle);

  const updateColorTitle = (title) => {
    setSelectedColorTitle(title);
  };

  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle: selectedColorTitle,
  });

  return (
    <>
      {jewelriesByCategory.length < 1 ? (
        <CardSkeleton />
      ) : (
        <CategoryCard
          jewelriesByCategory={jewelriesByCategory}
          updateColorTitle={updateColorTitle}
        />
      )}
    </>
  );
};

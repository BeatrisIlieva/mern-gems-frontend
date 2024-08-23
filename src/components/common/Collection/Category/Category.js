import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CategoryCard } from "./CategoryCard/CategoryCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { useJewelry } from "../../../../hooks/useJewelry";

export const Category = ({ categoryTitle, colorTitle }) => {
  const navigate = useNavigate();

  const [selectedColorTitle, setSelectedColorTitle] = useState(colorTitle);

  const updateColorTitle = (title) => {
    navigate(`/collection/${colorTitle}`)
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

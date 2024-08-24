import { CategoryCard } from "./CategoryCard/CategoryCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { useJewelry } from "../../../../hooks/useJewelry";

export const Category = ({ categoryTitle, colorTitle }) => {
  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle,
  });

  return (
    <>
      {jewelriesByCategory.length < 1 ? (
        <CardSkeleton />
      ) : (
        <CategoryCard jewelriesByCategory={jewelriesByCategory} />
      )}
    </>
  );
};

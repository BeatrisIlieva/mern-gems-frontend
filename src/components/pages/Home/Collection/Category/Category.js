import { CategoryCard } from "./CategoryCard/CategoryCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { useJewelry } from "../../../../../hooks/useJewelry";

export const Category = ({ categoryId, colorId }) => {
  const { jewelriesByCategory } = useJewelry({
    categoryId,
    colorId,
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

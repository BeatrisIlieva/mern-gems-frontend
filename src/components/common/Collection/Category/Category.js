import { CategoryCard } from "./CategoryCard/CategoryCard";

import { useJewelry } from "../../../../hooks/useJewelry";

export const Category = ({ categoryTitle, colorTitle }) => {
  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle,
  });

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <CategoryCard jewelriesByCategory={jewelriesByCategory} />
      )}
    </>
  );
};

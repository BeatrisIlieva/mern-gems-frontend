import { CategoryCard } from "./CategoryCard/CategoryCard";

import { CATEGORIES_BY_ID_AND_INITIAL_COLOR_ID } from "./constants/categoriesByIdAndInitialColorId";

import styles from "./CollectionList.module.css";

export const CollectionList = () => {
  return (
    <section id={styles["collection-list"]}>
      {Object.entries(CATEGORIES_BY_ID_AND_INITIAL_COLOR_ID).map(
        ([categoryTitle, colorTitle]) => (
          <CategoryCard
            key={categoryTitle}
            categoryTitle={categoryTitle}
            colorTitle={colorTitle}
          />
        )
      )}
    </section>
  );
};

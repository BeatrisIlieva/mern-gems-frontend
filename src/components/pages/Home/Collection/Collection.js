import { HeroBanner } from "./HeroBanner/HeroBanner";
import { Category } from "./Category/Category";

import { CATEGORIES_BY_ID_AND_INITIAL_COLOR_ID } from "./constants/categoriesByIdAndInitialColorId";

import styles from "./Collection.module.css";

export const Collection = () => {
  return (
    <section id={styles["collection"]}>
      <HeroBanner />
      <div className={styles["wrapper"]}>
        {Object.entries(CATEGORIES_BY_ID_AND_INITIAL_COLOR_ID).map(
          ([_, { id, initialColorId }]) => (
            <Category
              key={id}
              categoryId={id}
              colorId={initialColorId}
            />
          )
        )}
      </div>
    </section>
  );
};

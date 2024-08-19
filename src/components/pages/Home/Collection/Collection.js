import { HeroBanner } from "./HeroBanner/HeroBanner";
import { Category } from "./Category/Category";

import { CATEGORIES_BY_ID_AND_INITIAL_COLOR_INDEX } from "./constants/categoriesByIdAndInitialColorIndex";

import styles from "./Collection.module.css";

export const Collection = () => {
  return (
    <section id={styles["jewelry"]}>
      <HeroBanner />
      <div className={styles["wrapper"]}>
        {Object.entries(CATEGORIES_BY_ID_AND_INITIAL_COLOR_INDEX).map(
          ([_, { id, initialColorIndex }]) => (
            <Category entityId={id} initialColorIndex={initialColorIndex} />
          )
        )}
      </div>
    </section>
  );
};

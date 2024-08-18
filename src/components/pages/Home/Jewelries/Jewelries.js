import { HeroBanner } from "./HeroBanner/HeroBanner";
import { Category } from "./Category/Category";

import { CATEGORIES_BY_ID_AND_INITIAL_COLOR_INDEX } from "./constants/categoriesByIdAndInitialColorIndex";

import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section id={styles["jewelries"]}>
      <HeroBanner />
      <div className={styles["wrapper"]}>
        {Object.entries(CATEGORIES_BY_ID_AND_INITIAL_COLOR_INDEX).map(
          ([_, { id, colorIndex }]) => (
            <Category entityId={id} initialColorIndex={colorIndex} />
          )
        )}
      </div>
    </section>
  );
};

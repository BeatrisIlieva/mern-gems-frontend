import { useState } from "react";

import { HeroBanner } from "./HeroBanner/HeroBanner";
import { Category } from "./Category/Category";

import { CATEGORIES_BY_ID_AND_INITIAL_COLOR_INDEX } from "./constants/categoriesByIdAndInitialColorIndex";

import styles from "./Jewelry.module.css";

export const Jewelry = () => {
  const [displayJewelryItem, setDisplayJewelryItem] = useState(false);

  return (
    <>
      {!displayJewelryItem ? (
        <section id={styles["jewelry"]}>
          <HeroBanner />
          <div className={styles["wrapper"]}>
            {Object.entries(CATEGORIES_BY_ID_AND_INITIAL_COLOR_INDEX).map(
              ([_, { id, colorIndex }]) => (
                <Category entityId={id} initialColorIndex={colorIndex} />
              )
            )}
          </div>
        </section>
      ) : (
        <section></section>
      )}
    </>
  );
};

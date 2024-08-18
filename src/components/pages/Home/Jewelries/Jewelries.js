import { HeroBanner } from "./HeroBanner/HeroBanner";
import { Bracelet } from "./Bracelet/Bracelet";
import { RingAndEarring } from "./RingAndEarring/RingAndEarring";
import { Necklace } from "./Necklace/Necklace";

import { Bracelets } from "./Bracelet/Bracelets/Bracelets";
import { Earrings } from "./RingAndEarring/Earrings/Earrings";
import { Necklaces } from "./Necklace/Necklaces/Necklaces";
import { Rings } from "./RingAndEarring/Rings/Rings";

import { Category } from "./Category/Category";

import { CATEGORIES_BY_ID_AND_INITIAL_COLOR_INDEX } from "./constants/categoriesByIdAndInitialColorIndex";

import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section id={styles["jewelries"]}>
      <HeroBanner />
      <div className={styles["wrapper"]}>
        {Object.entries(CATEGORIES_BY_ID_AND_INITIAL_COLOR_INDEX).map(
          ([category, { id, colorIndex }]) => (
            <Category entityId={id} initialColorIndex={colorIndex}/>
          )
        )}
      </div>
    </section>
  );
};

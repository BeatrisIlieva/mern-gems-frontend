import { useState } from "react";

import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "../../../LargeImages/LargeImages";
import { MiniImages } from "../../../MiniImages/MiniImages";
import { StockStatus } from "../../../StockStatus/StockStatus";
import { LoadingSpinner } from "../../../LoadingSpinner/LoadingSpinner";

import styles from "./Card.module.css";

export const Card = ({
  jewelriesByCategory,
  isTransitioning,
  updateSelectedColor,
}) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  return (
    <div className={styles["outer-wrapper"]}>
      {isTransitioning && <LoadingSpinner isTransitioning={isTransitioning} />}
      <div
        className={`${styles["spinner-wrapper"]} ${
          isTransitioning ? `${styles["transitioning"]}` : ""
        }`.trim()}
      >
        <article
          onMouseEnter={() => setArticleIsHovered(true)}
          onMouseLeave={() => setArticleIsHovered(false)}
          className={
            articleIsHovered
              ? `${styles["category-card"]} ${styles["hovered"]}`
              : styles["category-card"]
          }
        >
          <DualTitleSection
            firstTitle={`$${jewelriesByCategory[0].inventories[0].price} - $${jewelriesByCategory[0].inventories[2].price}`}
            secondTitle={
              <StockStatus jewelriesByCategory={jewelriesByCategory} />
            }
            variant={"regular"}
          />
          <LargeImages jewelriesByCategory={jewelriesByCategory} />
          <MiniImages
            jewelriesByCategory={jewelriesByCategory}
            updateSelectedColor={updateSelectedColor}
          />
        </article>
      </div>
    </div>
  );
};

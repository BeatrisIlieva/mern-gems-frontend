import { useState } from "react";

import { DualTitleSection } from "../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "../../LargeImages/LargeImages";
import { MiniImages } from "../../MiniImages/MiniImages";
import { StockStatus } from "../../StockStatus/StockStatus";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";

import { useJewelry } from "../../../../hooks/useJewelry";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ categoryTitle, colorTitle }) => {
  const [selectedColor, setSelectedColor] = useState(colorTitle);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateSelectedColor = (color) => {
    setSelectedColor(color);

    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  };

  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle: selectedColor,
  });

  const [articleIsHovered, setArticleIsHovered] = useState(false);

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <div className={styles["outer-wrapper"]}>
          {isTransitioning && (
            <LoadingSpinner isTransitioning={isTransitioning} />
          )}
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
      )}
    </>
  );
};

import { useState } from "react";

import { DualTitleSection } from "../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "../../LargeImages/LargeImages";
import { MiniImages } from "../../MiniImages/MiniImages";
import { StockStatus } from "../../StockStatus/StockStatus";

import { useJewelry } from "../../../../hooks/useJewelry";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ categoryTitle, colorTitle }) => {
  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle,
  });

  const [articleIsHovered, setArticleIsHovered] = useState(false);

  return (
    <>
      {jewelriesByCategory.length > 0 && (
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
          <MiniImages jewelriesByCategory={jewelriesByCategory} />
        </article>
      )}
    </>
  );
};

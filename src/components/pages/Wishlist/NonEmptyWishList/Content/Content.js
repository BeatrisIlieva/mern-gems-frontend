import { useState, memo } from "react";

import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";
import { PriceRange } from "../../../../common/PriceRange/PriceRange";
import { StockStatus } from "../../../../common/StockStatus/StockStatus";
import { LargeImages } from "../../../../common/LargeImages/LargeImages";

import { useJewelry } from "../../../../../hooks/useJewelry";

import styles from "./Content.module.css";

const Content = ({ categoryTitle, colorTitle }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle,
  });

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <article
          onMouseEnter={() => setArticleIsHovered(true)}
          onMouseLeave={() => setArticleIsHovered(false)}
          onTouchStart={() => setArticleIsHovered(true)}
          onTouchEnd={() => setArticleIsHovered(false)}
          className={
            articleIsHovered
              ? `${styles["content"]} ${styles["hovered"]}`
              : styles["content"]
          }
        >
          <LargeImages jewelriesByCategory={jewelriesByCategory} />
          <DualTitleSection
            firstTitle={
              <PriceRange jewelriesByCategory={jewelriesByCategory} />
            }
            secondTitle={
              <StockStatus jewelriesByCategory={jewelriesByCategory} />
            }
            variant={"regular"}
          />
        </article>
      )}
    </>
  );
};

export default memo(Content);

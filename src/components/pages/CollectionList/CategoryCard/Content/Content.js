import { useState } from "react";

import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "../../../../common/LargeImages/LargeImages";
import { MiniImages } from "../../../../common/MiniImages/MiniImages";
import { StockStatus } from "../../../../common/StockStatus/StockStatus";
import { PriceRange } from "../../../../common/PriceRange/PriceRange";

import styles from "./Content.module.css";

export const Content = ({ jewelriesByCategory, updateSelectedColor }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  return (
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
      <DualTitleSection
        firstTitle={<PriceRange jewelriesByCategory={jewelriesByCategory} />}
        secondTitle={<StockStatus jewelriesByCategory={jewelriesByCategory} />}
        variant={"regular"}
      />
      <LargeImages jewelriesByCategory={jewelriesByCategory} />
      <MiniImages
        jewelriesByCategory={jewelriesByCategory}
        clickHandler={updateSelectedColor}
      />
    </article>
  );
};

import { useState } from "react";

import { DualTitleSection } from "../../../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "../../../../LargeImages/LargeImages";
import { MiniImages } from "../../../../MiniImages/MiniImages";
import { StockStatus } from "../../../../StockStatus/StockStatus";

import styles from "./Content.module.css";

export const Content = ({ jewelriesByCategory, updateSelectedColor }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setArticleIsHovered(true)}
      onMouseLeave={() => setArticleIsHovered(false)}
      className={
        articleIsHovered
          ? `${styles["content"]} ${styles["hovered"]}`
          : styles["content"]
      }
    >
      <DualTitleSection
        firstTitle={`$${jewelriesByCategory[0].inventories[0].price} - $${jewelriesByCategory[0].inventories[2].price}`}
        secondTitle={<StockStatus jewelriesByCategory={jewelriesByCategory} />}
        variant={"regular"}
      />
      <LargeImages
        jewelriesByCategory={jewelriesByCategory}
        updateSelectedColor={updateSelectedColor}
      />
      <MiniImages
        jewelriesByCategory={jewelriesByCategory}
        updateSelectedColor={updateSelectedColor}
      />
    </article>
  );
};

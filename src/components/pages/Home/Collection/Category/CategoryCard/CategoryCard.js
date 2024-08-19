import { useState } from "react";

import { DualTitleSection } from "../../../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "../../../../../common/LargeImages/LargeImages";
import { MiniImages } from "../../../../../common/MiniImages/MiniImages";
import { StockStatus } from "../../../../../common/StockStatus/StockStatus";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ entity, colorIndex, updateColorIndex }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const selectedEntityColor = entity[colorIndex];

  return (
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
        firstTitle={`$${entity[0].inventories[0].price} - $${entity[0].inventories[2].price}`}
        secondTitle={<StockStatus selectedEntityColor={selectedEntityColor} />}
        variant={"regular"}
      />
      <LargeImages entity={entity} colorIndex={colorIndex} />
      <MiniImages
        colorIndex={colorIndex}
        entity={entity}
        updateColorIndex={updateColorIndex}
      />
    </article>
  );
};

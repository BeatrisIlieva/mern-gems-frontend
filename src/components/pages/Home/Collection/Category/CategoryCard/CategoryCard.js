import { useState } from "react";

import { DualTitleSection } from "../../../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "../../../../../common/LargeImages/LargeImages";
import { MiniImages } from "../../../../../common/MiniImages/MiniImages";
import { StockStatus } from "../../../../../common/StockStatus/StockStatus";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ jewelriesByCategory }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

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
        firstTitle={`$${jewelriesByCategory[0].inventories[0].price} - $${jewelriesByCategory[0].inventories[2].price}`}
        secondTitle={<StockStatus jewelriesByCategory={jewelriesByCategory} />}
        variant={"regular"}
      />
      {/* <div onClick={clickHandler}> */}
      <LargeImages jewelriesByCategory={jewelriesByCategory} />
      {/* </div> */}
      <MiniImages jewelriesByCategory={jewelriesByCategory} />
    </article>
  );
};

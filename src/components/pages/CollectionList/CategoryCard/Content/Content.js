import { useState, memo, useMemo } from "react";

import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";
import LargeImages from "../../../../common/LargeImages/LargeImages";
import { MiniImages } from "../../../../common/MiniImages/MiniImages";
import { StockStatus } from "../../../../common/StockStatus/StockStatus";
import { PriceRange } from "../../../../common/PriceRange/PriceRange";

import { useLargeImagesClick } from "../../../../../hooks/useLargeImagesClick";

import styles from "./Content.module.css";

export const Content = memo(({ jewelriesByCategory, updateSelectedColor }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const categoryTitle = jewelriesByCategory[0].categories[0].title;

  const colorTitle = jewelriesByCategory[0].colors[0].title;

  const { largeImagesClickHandler } = useLargeImagesClick({
    categoryTitle,
    colorTitle,
  });

  const firstTitle = useMemo(() => {
    return <PriceRange jewelriesByCategory={jewelriesByCategory} />;
  }, [jewelriesByCategory]);

  const secondTitle = useMemo(() => {
    return <StockStatus jewelriesByCategory={jewelriesByCategory} />;
  }, [jewelriesByCategory]);

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
        firstTitle={firstTitle}
        secondTitle={secondTitle}
        variant={"regular"}
      />
      <LargeImages
        jewelriesByCategory={jewelriesByCategory}
        clickHandler={largeImagesClickHandler}
      />
      <MiniImages
        jewelriesByCategory={jewelriesByCategory}
        clickHandler={updateSelectedColor}
      />
    </article>
  );
});

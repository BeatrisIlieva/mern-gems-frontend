import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Content } from "./Content/Content";
import { ShopBy } from "../../../common/ShopBy/ShopBy";

import { DualTitleSection } from "../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "./LargeImages/LargeImages";
import { MiniImages } from "../../../common/MiniImages/MiniImages";
import { StockStatus } from "../../../common/StockStatus/StockStatus";
import { PriceRange } from "../../../common/PriceRange/PriceRange";

import { useJewelry } from "../../../../hooks/useJewelry";

import { slugify } from "../../../../utils/slugify";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ categoryTitle, colorTitle }) => {
  const [selectedColor, setSelectedColor] = useState(colorTitle);

  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const navigate = useNavigate();

  const updateSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle: selectedColor,
  });

  const buttonClickHandler = () => {
    const slugifiedCategoryTitle = slugify(categoryTitle);

    const slugifiedColorTitle = selectedColor;

    navigate(`/collection/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  };

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <section className={styles["category-card"]}>
          <ShopBy
            categoryTitle={categoryTitle}
            buttonClickHandler={buttonClickHandler}
          />
          {/* <div
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
              firstTitle={
                <PriceRange jewelriesByCategory={jewelriesByCategory} />
              }
              secondTitle={
                <StockStatus jewelriesByCategory={jewelriesByCategory} />
              }
              variant={"regular"}
            />
            <LargeImages
              jewelriesByCategory={jewelriesByCategory}
              updateSelectedColor={updateSelectedColor}
              circleIconsPosition={"top"}
            />
            <MiniImages
              jewelriesByCategory={jewelriesByCategory}
              clickHandler={updateSelectedColor}
            />
          </div> */}
          <Content
            jewelriesByCategory={jewelriesByCategory}
            updateSelectedColor={updateSelectedColor}
          />
        </section>
      )}
    </>
  );
};

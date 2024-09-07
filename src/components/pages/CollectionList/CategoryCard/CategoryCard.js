import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Content from "./Content/Content";
import { ShopBy } from "../../../common/ShopBy/ShopBy";

import { useJewelry } from "../../../../hooks/useJewelry";

import { slugify } from "../../../../utils/slugify";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ categoryTitle, colorTitle }) => {
  const [selectedColor, setSelectedColor] = useState(colorTitle);

  const navigate = useNavigate();

  const updateSelectedColor = (color) => {
    setSelectedColor(color);
  };

  // const updateSelectedColor = useCallback((color) => {
  //   setSelectedColor(color);
  // }, []);

  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle: selectedColor,
  });

  const buttonClickHandler = () => {
    const slugifiedCategoryTitle = slugify(categoryTitle);

    const slugifiedColorTitle = selectedColor;

    navigate(`/collection/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  };

  // const buttonClickHandler = useCallback(() => {
  //   const slugifiedCategoryTitle = slugify(categoryTitle);

  //   const slugifiedColorTitle = selectedColor;

  //   navigate(`/collection/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  // }, [slugify]);

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <section className={styles["category-card"]}>
          <ShopBy
            categoryTitle={categoryTitle}
            buttonClickHandler={buttonClickHandler}
          />
          <Content
            jewelriesByCategory={jewelriesByCategory}
            updateSelectedColor={updateSelectedColor}
          />
        </section>
      )}
    </>
  );
};

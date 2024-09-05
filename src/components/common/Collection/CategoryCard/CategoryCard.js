import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "./Card/Card";
import { ShopBy } from "../../ShopBy/ShopBy";

import { useJewelry } from "../../../../hooks/useJewelry";

import { slugify } from "../../../../utils/slugify";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ categoryTitle, colorTitle }) => {
  const [selectedColor, setSelectedColor] = useState(colorTitle);

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
    <section className={styles["category-card"]}>
      <ShopBy
        categoryTitle={categoryTitle}
        buttonClickHandler={buttonClickHandler}
      />
      <Card
        jewelriesByCategory={jewelriesByCategory}
        updateSelectedColor={updateSelectedColor}
      />
    </section>
  );
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { DualTitleSection } from "../../../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "../../../../../common/LargeImages/LargeImages";
import { MiniImages } from "../../../../../common/MiniImages/MiniImages";
import { StockStatus } from "../../../../../common/StockStatus/StockStatus";

import { slugify } from "../../../../../../utils/slugify";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ jewelriesByCategory, updateColorTitle }) => {


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
      
        <LargeImages jewelriesByCategory={jewelriesByCategory} />
     
      <MiniImages jewelriesByCategory={jewelriesByCategory} updateColorTitle={updateColorTitle}/>
    </article>
  );
};

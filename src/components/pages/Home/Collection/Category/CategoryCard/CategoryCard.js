import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DualTitleSection } from "../../../../../reusable/DualTitleSection/DualTitleSection";
import { LargeImages } from "../../common/LargeImages/LargeImages";
import { MiniImages } from "../../common/MiniImages/MiniImages";
import { StockStatus } from "../../common/StockStatus/StockStatus";

import { useJewelryContext } from "../../../../../../contexts/JewelryContext";

import { slugify } from "../../../../../../utils/slugify";

import { checkIfItemsHasBeenSoldOut } from "./helpers/checkIfItemsHasBeenSoldOut";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ entity, colorIndex, updateColorIndex }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const [activeMiniImage, setActiveMiniImage] = useState(colorIndex);



  // const { updateSelectedEntity, updateSelectedColor } = useJewelryContext();

  // const navigate = useNavigate();



  const updateActiveMiniImage = (index) => {
    setActiveMiniImage(index);
  };

  // const slugifiedJewelryTitle = slugify(entity[colorIndex].title);

  // const clickHandler = () => {
  //   updateSelectedEntity(entity);

  //   updateSelectedColor(colorIndex);

  //   navigate(`/${slugifiedJewelryTitle}`);
  // };

  const selectedEntity = entity[colorIndex];

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
      {/* <DualTitleSection
        firstTitle={`$${entity[0].inventories[0].price} - $${entity[0].inventories[2].price}`}
        secondTitle={
          <span className={styles["stock"]}>
            <FontAwesomeIcon
              icon={faCircle}
              className={`${styles["icon"]} ${
                isSoldOut ? styles["sold-out"] : styles["in-stock"]
              }`}
            />¸¸¸
            {isSoldOut ? "Sold Out" : "In Stock"}
          </span>
        }
        variant={"regular"}
      /> */}
          <DualTitleSection
      firstTitle={`$${entity[0].inventories[0].price} - $${entity[0].inventories[2].price}`}
      secondTitle={<StockStatus entity={selectedEntity} />}
      variant={"regular"}
    />
      <LargeImages entity={entity} colorIndex={colorIndex} />
      <MiniImages
        colorIndex={colorIndex}
        entity={entity}
        activeMiniImage={activeMiniImage}
        updateActiveMiniImage={updateActiveMiniImage}
        updateColorIndex={updateColorIndex}
      />
    </article>
  );
};

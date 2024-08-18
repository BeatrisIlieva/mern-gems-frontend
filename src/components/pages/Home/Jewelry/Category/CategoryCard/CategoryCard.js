import { useState, useEffect } from "react";

import { DualTitleSection } from "../../../../../reusable/DualTitleSection/DualTitleSection";
import { CircleIcon } from "../../common/CircleIcon/CircleIcon";
import { LargeImages } from "../../common/LargeImages/LargeImages";
import { MiniImages } from "../../common/MiniImages/MiniImages";

import { checkIfItemsHasBeenSoldOut } from "./helpers/checkIfItemsHasBeenSoldOut";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ entity, colorIndex, updateColorIndex }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  const [activeMiniImage, setActiveMiniImage] = useState(colorIndex);

  const allQuantitiesZero = checkIfItemsHasBeenSoldOut(entity[colorIndex]);

  const [isSoldOut, setIsSoldOut] = useState(allQuantitiesZero);

  useEffect(() => {
    setFirstImageUrlIsActive(true);
    setIsSoldOut(checkIfItemsHasBeenSoldOut(entity[colorIndex]));
  }, [activeMiniImage]);

  const updateActiveMiniImage = (index) => {
    setActiveMiniImage(index);
  };

  const updateFirstImageUrlIsActive = (image) => {
    setFirstImageUrlIsActive(entity[colorIndex].firstImageUrl === image);
  };

  const clickHandler = () => {};

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
      <div onClick={clickHandler}>
        <DualTitleSection
          firstTitle={`$${entity[0].inventories[0].price} - $${entity[0].inventories[2].price}`}
          secondTitle={
            <span className={styles["stock"]}>
              <FontAwesomeIcon
                icon={faCircle}
                className={`${styles["icon"]} ${
                  isSoldOut ? styles["sold-out"] : styles["in-stock"]
                }`}
              />
              {isSoldOut ? "Sold Out" : "In Stock"}
            </span>
          }
          variant={"regular"}
        />
      </div>
      <div className={styles["circle-icons-container"]}>
        <CircleIcon
          isSelected={firstImageUrlIsActive}
          image={entity[colorIndex].firstImageUrl}
          updateFirstImageUrlIsActive={updateFirstImageUrlIsActive}
        />
        <CircleIcon
          isSelected={!firstImageUrlIsActive}
          image={entity[colorIndex].secondImageUrl}
          updateFirstImageUrlIsActive={updateFirstImageUrlIsActive}
        />
      </div>
      <LargeImages
        firstImageUrlIsActive={firstImageUrlIsActive}
        entity={entity}
        colorIndex={colorIndex}
        clickHandler={clickHandler}
      />
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

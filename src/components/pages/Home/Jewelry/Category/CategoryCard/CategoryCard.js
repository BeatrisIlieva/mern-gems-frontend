import { useState, useEffect } from "react";

import { CircleIcon } from "./CircleIcon/CircleIcon";
import { LargeImages } from "./LargeImages/LargeImages";
import { MiniImages } from "./MiniImages/MiniImages";
import { DualTitleSection } from "../../../../../reusable/DualTitleSection/DualTitleSection";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ entity, colorIndex, updateColorIndex }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  const [activeMiniImage, setActiveMiniImage] = useState(colorIndex);

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [activeMiniImage]);

  const updateActiveMiniImage = (index) => {
    setActiveMiniImage(index);
  };

  const updateFirstImageUrlIsActive = (image) => {
    setFirstImageUrlIsActive(entity[colorIndex].firstImageUrl === image);
  };

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
        secondTitle={"See Details"}
        variant={"regular"}
      />
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

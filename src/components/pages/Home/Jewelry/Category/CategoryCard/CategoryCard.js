import { useState, useEffect } from "react";

import { LargeImages } from "./LargeImages/LargeImages";
import { CircleIcon } from "./CircleIcon/CircleIcon";
import { MiniImages } from "./MiniImages/MiniImages";

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

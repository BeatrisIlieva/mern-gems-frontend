import { useState } from "react";

import { CircleIcon } from "./CircleIcon/CircleIcon";
import { MiniImages } from "./MiniImages/MiniImages";

import { COLORS_BY_INDEX } from "../../constants/colorsByIndex";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ entity, entityIndex, updateColorIndex }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  const [activeMiniImage, setActiveMiniImage] = useState(entityIndex);

  const updateActiveMiniImage = (index) => {
    setActiveMiniImage(index);
  };

  const updateFirstImageUrlIsActive = (image) => {
    setFirstImageUrlIsActive(entity[entityIndex].firstImageUrl === image);
  };

  const color = COLORS_BY_INDEX[entityIndex];

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
          image={entity[entityIndex].firstImageUrl}
          updateFirstImageUrlIsActive={updateFirstImageUrlIsActive}
        />
        <CircleIcon
          isSelected={!firstImageUrlIsActive}
          image={entity[entityIndex].secondImageUrl}
          updateFirstImageUrlIsActive={updateFirstImageUrlIsActive}
        />
      </div>
      <div className={styles["thumbnail"]}>
        <img
          className={`${styles["image"]} ${
            firstImageUrlIsActive
              ? styles["slide-in-right"]
              : styles["slide-in-left"]
          }`}
          src={
            firstImageUrlIsActive
              ? entity[entityIndex].firstImageUrl
              : entity[entityIndex].secondImageUrl
          }
          alt={entity[entityIndex].title}
        />
      </div>
      <ul className={styles["mini-images-list"]} role="list">
        {entity.map((item, index) => (
          <li
            key={item._id}
            className={`${
              activeMiniImage === index
                ? `${styles["active-mini-image"]} ${styles[color]}`
                : ""
            }`.trim()}
          >
            <MiniImages
              imageObject={item.miniImage}
              index={index}
              updateActiveMiniImage={updateActiveMiniImage}
              updateColorIndex={updateColorIndex}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

import { useState } from "react";

import { CircleIcon } from "./CircleIcon/CircleIcon";
import { MiniImages } from "./MiniImages/MiniImages";

import styles from "./CategoryCard.module.css";

const COLORS_BY_INDEX = {
  0: "pink",
  1: "blue",
  2: "gray",
};

export const CategoryCard = ({ entity, entityIndex }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);
  const [activeLargeImage, setActiveLargeImage] = useState(
    entity[0].firstImageUrl
  );
  const [activeMiniImage, setActiveMiniImage] = useState(entityIndex);

  const updateActiveMiniImage = (index) => {
    setActiveMiniImage(index);
  };

  const updateActiveLargeImage = (image) => {
    setActiveLargeImage(image);
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
          isSelected={activeLargeImage === entity[0].firstImageUrl}
          image={entity[0].firstImageUrl}
          updateActiveLargeImage={updateActiveLargeImage}
        />
        <CircleIcon
          isSelected={activeLargeImage === entity[0].secondImageUrl}
          image={entity[0].secondImageUrl}
          updateActiveLargeImage={updateActiveLargeImage}
        />
      </div>
      <div className={styles["thumbnail"]}>
        <img
          // onMouseEnter={() => setActiveLargeImage(entity[0].firstImageUrl)}
          // onMouseLeave={() => setActiveLargeImage(entity[0].secondImageUrl)}
          className={`${styles["image"]} ${
            activeLargeImage === entity[0].firstImageUrl
              ? styles["slide-in-right"]
              : styles["slide-in-left"]
          }`}
          src={
            activeLargeImage === entity[0].firstImageUrl
              ? entity[0].firstImageUrl 
              : entity[0].secondImageUrl
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
                ? `${styles["active-mini-image"]} ${
                    styles[COLORS_BY_INDEX[index]]
                  }`
                : ""
            }`.trim()}
          >
            <MiniImages
              imageObject={item.miniImage}
              index={index}
              updateActiveMiniImage={updateActiveMiniImage}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

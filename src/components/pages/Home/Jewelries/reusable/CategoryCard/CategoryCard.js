import { useState } from "react";

import { MiniImages } from "./MiniImages/MiniImages";

import styles from "./CategoryCard.module.css";

const COLORS_BY_INDEX = {
  0: "pink",
  1: "blue",
  2: "gray"
}

export const CategoryCard = ({ entity, entityIndex }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);
  const [imageIsHovered, setImageIsHovered] = useState(false);

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
      <div className={styles["thumbnail"]}>
        <img
          onMouseEnter={() => setImageIsHovered(true)}
          onMouseLeave={() => setImageIsHovered(false)}
          className={`${styles["image"]} ${
            imageIsHovered ? styles["slide-in-right"] : styles["slide-in-left"]
          }`}
          src={
            imageIsHovered
              ? entity[entityIndex].secondImageUrl
              : entity[entityIndex].firstImageUrl
          }
          alt={entity[entityIndex].title}
        />
      </div>
      <ul className={styles["mini-images-list"]} role="list">
        {entity.map((item, index) => (
          <li
            key={item._id}
            className={`${
              entityIndex === index ? `${styles["active-mini-image"]} ${styles[COLORS_BY_INDEX[index]]}` : ""
            }`.trim()}
          >
            <MiniImages imageObject={item.miniImage} index={index}/>
          </li>
        ))}
      </ul>
    </article>
  );
};

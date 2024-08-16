import { useState } from "react";

import { MiniImages } from "./MiniImages/MiniImages";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ entity }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);
  const [imageIsHovered, setImageIsHovered] = useState(false);

  return (
    <article         onMouseEnter={() => setArticleIsHovered(true)}
    onMouseLeave={() => setArticleIsHovered(false)} className={articleIsHovered ? `${styles["category-card"]} ${styles["hovered"]}` : styles["category-card"]}>
      <div
        className={`${styles["category-card"]} ${styles["thumbnail"]}`}
        onMouseEnter={() => setImageIsHovered(true)}
        onMouseLeave={() => setImageIsHovered(false)}
      >
        <img
          src={
            imageIsHovered ? entity[0].secondImageUrl : entity[0].firstImageUrl
          }
          alt={entity[0].title}
        />
      </div>
      <ul
        className={`${styles["category-card"]} ${styles["image"]} ${styles["mini-images-list"]}`}
        role="list"
      >
        {entity.map((item) => (
          <li key={item._id}>
            <MiniImages imageObject={item.miniImage} />
          </li>
        ))}
      </ul>
    </article>
  );
};

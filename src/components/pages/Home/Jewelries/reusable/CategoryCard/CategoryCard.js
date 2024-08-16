import { useState } from "react";

import { MiniImages } from "./MiniImages/MiniImages";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ entity }) => {
  const [imageIsHovered, setImageIsHovered] = useState(false);

  return (
    <article className={styles["category-card"]}>
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

// className={`${styles["image"]} ${styles["category-card"]} ${styles["mini-images-list"]} ${styles["mini-image"]}`}

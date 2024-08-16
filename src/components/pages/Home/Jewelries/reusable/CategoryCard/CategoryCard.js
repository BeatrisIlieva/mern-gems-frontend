import { MiniImages } from "./MiniImages/MiniImages";

import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ entity }) => {
  return (
    <article className={styles["category-card"]}>
      {/* <div className={styles["thumbnail"]}> */}
        <img
          className={`${styles["category-card"]} ${styles["image"]}`}
          src={entity[0].firstImageUrl}
          alt={entity[0].title}
        />
        <ul className={`${styles["category-card"]} ${styles["image"]} ${styles["mini-images-list"]}`} role="list">
          {entity.map((item) => (
            <li key={item._id} >
              <MiniImages imageObject={item.miniImage} />
            </li>
          ))}
        </ul>
      {/* </div> */}
    </article>
  );
};

// className={`${styles["image"]} ${styles["category-card"]} ${styles["mini-images-list"]} ${styles["mini-image"]}`}

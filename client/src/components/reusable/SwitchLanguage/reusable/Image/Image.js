import { memo } from "react";

import styles from "./Image.module.css";

export const Image = memo(
  ({ isTransitioning, clickHandler, imageUrl, altText }) => {
    return (
      <div
        className={`${styles["thumbnail"]} ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
        onClick={clickHandler}
      >
        <img className={styles["image"]} src={imageUrl} alt={altText} />
      </div>
    );
  }
);

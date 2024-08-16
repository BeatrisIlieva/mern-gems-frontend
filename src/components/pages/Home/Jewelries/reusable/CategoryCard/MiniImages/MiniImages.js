import { useState } from "react";

import styles from "./MiniImages.module.css";

export const MiniImages = ({ imageObject }) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div
      className={styles["image-object"]}
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <img
        className={`${styles["image-object"]} ${styles["image"]}`}
        src={imageObject[0].imageUrl}
        alt={imageObject[0].title}
      />
      {showTitle && (
        <span
          className={`${styles["image-object"]} ${styles["image"]} ${styles["title"]}`}
        >
          {imageObject[0].title}
        </span>
      )}
    </div>
  );
};

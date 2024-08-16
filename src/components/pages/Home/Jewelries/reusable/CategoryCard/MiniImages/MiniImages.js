import { useState } from "react";

import styles from "./MiniImages.module.css";

export const MiniImages = ({ imageObject }) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div className={styles["image-object"]}>
      <img
        className={`${styles["image-object"]} ${styles["image"]}`}
        src={imageObject[0].imageUrl}
        alt={imageObject[0].title}
        onMouseEnter={() => setShowTitle(true)}
        onMouseLeave={() => setShowTitle(false)}
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

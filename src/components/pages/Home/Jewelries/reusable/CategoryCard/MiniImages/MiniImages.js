import { useState } from "react";

import styles from "./MiniImages.module.css";

const COLORS_BY_INDEX = {
  0: "pink",
  1: "blue",
  2: "gray"
}

export const MiniImages = ({ imageObject, index, updateActiveMiniImage }) => {
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
        onClick={() => updateActiveMiniImage(index)}
      />
      {showTitle && (
        <span
          className={`${styles["image-object"]} ${styles["image"]} ${styles["title"]} ${styles[COLORS_BY_INDEX[index]]}`}
        >
          {imageObject[0].title}
        </span>
      )}
    </div>
  );
};

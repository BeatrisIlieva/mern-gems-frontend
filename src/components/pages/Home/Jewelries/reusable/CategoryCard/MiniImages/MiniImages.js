import { useState } from "react";

import { getColorByIndex } from "../../../helpers/getColorByIndex";

import styles from "./MiniImages.module.css";

export const MiniImages = ({ imageObject, index, updateActiveMiniImage }) => {
  const [showTitle, setShowTitle] = useState(false);

  const color = getColorByIndex(index);

  return (
    <div
      className={styles["image-object"]}
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <img
        className={styles["image"]}
        src={imageObject[0].imageUrl}
        alt={imageObject[0].title}
        onClick={() => updateActiveMiniImage(index)}
      />
      {showTitle && (
        <span
          className={`${styles["title"]} ${styles[color]}`}
        >
          {imageObject[0].title}
        </span>
      )}
    </div>
  );
};

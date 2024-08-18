import { useState } from "react";

import { COLORS_BY_INDEX } from "../../../../constants/colorsByIndex";

import styles from "./Image.module.css";

export const Image = ({
  imageObject,
  index,
  updateActiveMiniImage,
  updateColorIndex,
}) => {
  const [showTitle, setShowTitle] = useState(false);

  const color = COLORS_BY_INDEX[index];

  const clickHandler = () => {
    updateActiveMiniImage(index);
    updateColorIndex(index);
  };

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
        onClick={clickHandler}
      />
      {showTitle && (
        <span className={`${styles["title"]} ${styles[color]}`}>
          {imageObject[0].title}
        </span>
      )}
    </div>
  );
};

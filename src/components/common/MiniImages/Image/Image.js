import { memo } from "react";

import { COLORS_BY_TITLE } from "../../../../constants/colorsByTitle";

import styles from "./Image.module.css";

const Image = ({
  imageUrl,
  title,
  colorName,
  updateActiveMiniImage,
  isActive,
}) => {
  const color = COLORS_BY_TITLE[colorName];

  const clickHandler = () => {
    updateActiveMiniImage(colorName);
  };

  return (
    <div className={styles["image-object"]}>
      <div className={styles["thumbnail"]}>
        <img
          className={styles["image"]}
          src={imageUrl}
          alt={title}
          onClick={clickHandler}
        />
      </div>
      {isActive && (
        <span className={`${styles["title"]} ${styles[color]}`}>{title}</span>
      )}
    </div>
  );
};

export default memo(Image);

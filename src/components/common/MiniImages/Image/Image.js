import { COLORS_BY_INDEX } from "../../../../constants/colorsByIndex";

import styles from "./Image.module.css";

export const Image = ({
  imageObject,
  index,
  updateActiveMiniImage,
  updateColorIndex,
  isActive,
}) => {
  const color = COLORS_BY_INDEX[index];

  const clickHandler = () => {
    updateActiveMiniImage(index);
    updateColorIndex(index);
  };

  return (
    <div className={styles["image-object"]}>
      <div className={styles["thumbnail"]}>
        <img
          className={styles["image"]}
          src={imageObject[0].imageUrl}
          alt={imageObject[0].title}
          onClick={clickHandler}
        />
      </div>
      {isActive && (
        <span className={`${styles["title"]} ${styles[color]}`}>
          {imageObject[0].title}
        </span>
      )}
    </div>
  );
};

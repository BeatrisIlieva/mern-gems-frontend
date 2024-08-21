import { COLORS_BY_ID } from "../../../../constants/colorsById";

import styles from "./Image.module.css";


export const Image = ({
  imageUrl,
  title,
  id,
  updateActiveMiniImage,
  isActive,
}) => {
  const color = COLORS_BY_ID[id];

  const clickHandler = () => {
    updateActiveMiniImage(id);
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
        <span className={`${styles["title"]} ${styles[color]}`}>
          {title}
        </span>
      )}
    </div>
  );
};

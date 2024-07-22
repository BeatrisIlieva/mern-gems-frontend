import { CircleIcon } from "../CircleIcon/CircleIcon";

import styles from "./JewelryImage.module.css";

export const JewelryImage = ({
  isSoldOut,
  imageUrl,
  title,
  toggleSelected,
  variant,
  leftIsSelected,
  rightIsSelected,
}) => {
  return (
    <div className={styles["jewelry-images"]}>
      <div
        className={`${styles["image"]} ${
          isSoldOut === true ? styles["sold-out"] : ""
        }`.trim()}
      >
        <img
          src={imageUrl}
          alt={title}
          onClick={toggleSelected}
          className={styles[variant]}
        />
        {isSoldOut && <span className={styles["sold-out-span"]}>SOLD OUT</span>}
      </div>
      <div className={styles["circles-container"]}>
        <CircleIcon isSelected={leftIsSelected} />
        <CircleIcon isSelected={rightIsSelected} />
      </div>
    </div>
  );
};

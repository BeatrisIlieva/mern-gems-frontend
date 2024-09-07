import { memo } from "react";

import styles from "./JewelryCard.module.css";

const JewelryCard = ({ firstImageUrl, jewelryTitle }) => {
  return (
    <div className={styles["thumbnail"]}>
      <img
        src={firstImageUrl}
        alt={jewelryTitle}
        className={`${styles["image"]}`}
      />
    </div>
  );
};

export default memo(JewelryCard);

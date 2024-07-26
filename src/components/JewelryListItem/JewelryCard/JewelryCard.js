import { Link } from "react-router-dom";

import styles from "./JewelryCard.module.css";

export const JewelryCard = ({
  firstImageUrl,
  jewelryId,
  slugifiedCategoryTitle,
  slugifiedJewelryTitle,
  isSoldOut,
}) => {
  return (
    <article className={styles["jewelry-card"]}>
      <Link
        to={`/${slugifiedCategoryTitle}/${slugifiedJewelryTitle}/${jewelryId}`}
      >
        <img
          src={firstImageUrl}
          alt={slugifiedJewelryTitle}
          className={isSoldOut ? `${styles["sold-out"]}` : `${styles["image"]}`}
        />
        {isSoldOut && <span className={styles["sold-out-span"]}>SOLD OUT</span>}
      </Link>
    </article>
  );
};

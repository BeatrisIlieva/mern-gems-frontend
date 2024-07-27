import { Link } from "react-router-dom";

import { slugify } from "../../utils/slugify";

import styles from "./JewelryCard.module.css";

export const JewelryCard = ({
  firstImageUrl,
  jewelryId,
  categoryTitle,
  jewelryTitle,
  isSoldOut,
}) => {
  const slugifiedCategoryTitle = slugify(categoryTitle);
  const slugifiedJewelryTitle = slugify(jewelryTitle);

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

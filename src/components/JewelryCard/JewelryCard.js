import { Link } from "react-router-dom";

import { slugify } from "../../utils/slugify";

import styles from "./JewelryCard.module.css";

export const JewelryCard = ({
  firstImageUrl,
  jewelryId,
  categoryTitle,
  collectionTitle,
  jewelryTitle,
  isSoldOut,
  variant,
}) => {
  console.log(categoryTitle)
  const slugifiedCollectionTitle = slugify(collectionTitle);
  const slugifiedCategoryTitle = slugify(categoryTitle);
  const slugifiedJewelryTitle = slugify(jewelryTitle);

  return (
    <article className={styles["jewelry-card"]}>
      <Link
        to={`/${slugifiedCollectionTitle}/${slugifiedCategoryTitle}/${slugifiedJewelryTitle}/${jewelryId}`}
      >
        <div className={styles[variant]}>
          <img
            src={firstImageUrl}
            alt={slugifiedJewelryTitle}
            className={
              isSoldOut ? `${styles["sold-out"]}` : `${styles["image"]}`
            }
          />
        </div>
        {isSoldOut && <span className={styles["sold-out-span"]}>SOLD OUT</span>}
      </Link>
    </article>
  );
};

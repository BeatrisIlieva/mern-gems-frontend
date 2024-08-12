import { NavLink } from "react-router-dom";

import { slugify } from "../../../utils/slugify";

import styles from "./JewelryCard.module.css";

export const JewelryCard = ({
  firstImageUrl,
  jewelryId,
  jewelryTitle,
  isSoldOut,
  variant,
  collectionTitle,
  categoryTitle,
}) => {
  const slugifiedCollectionTitle = slugify(collectionTitle);
  const slugifiedCategoryTitle = slugify(categoryTitle);
  const slugifiedJewelryTitle = slugify(jewelryTitle);

  return (
    <article className={styles["jewelry-card"]}>
      <NavLink
        to={`/${slugifiedCollectionTitle}/${slugifiedCategoryTitle}/${slugifiedJewelryTitle}/${jewelryId}`}
      >
        <div className={`${variant ? `${styles[variant]}` : ""}`.trim()}>
          <img
            src={firstImageUrl}
            alt={slugifiedJewelryTitle}
            className={
              isSoldOut ? `${styles["sold-out"]}` : `${styles["image"]}`
            }
          />
        </div>
        {isSoldOut && <span className={styles["sold-out-span"]}>SOLD OUT</span>}
      </NavLink>
    </article>
  );
};

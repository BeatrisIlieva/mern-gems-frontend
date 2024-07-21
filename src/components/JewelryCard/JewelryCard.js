import { Link } from "react-router-dom";

import styles from "./JewelryCard.module.css"

export const JewelryCard = ({
  firstImageUrl,
  jewelryId,
  slugifiedCategoryTitle,
  slugifiedJewelryTitle,
}) => {
  return (
    <Link
      to={`/${slugifiedCategoryTitle}/${slugifiedJewelryTitle}/${jewelryId}`}
    >
      <img src={firstImageUrl} alt={slugifiedJewelryTitle} className={styles["image"]}/>
    </Link>
  );
};

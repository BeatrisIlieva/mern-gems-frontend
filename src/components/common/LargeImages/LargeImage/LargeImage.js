import { useNavigate } from "react-router-dom";

import { slugify } from "../../../../utils/slugify";

import styles from "./LargeImage.module.css";

export const LargeImage = ({ jewelriesByCategory, firstImageUrlIsActive }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    const categoryTitle = jewelriesByCategory[0].categories[0].title;

    const colorTitle = jewelriesByCategory[0].colors[0].title;

    const slugifiedCategoryTitle = slugify(categoryTitle);

    const slugifiedColorTitle = slugify(colorTitle);

    navigate(`/collection/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  };

  return (
    <img
      className={`${styles["image"]} ${
        firstImageUrlIsActive
          ? styles["slide-in-right"]
          : styles["slide-in-left"]
      }`}
      src={
        firstImageUrlIsActive
          ? jewelriesByCategory[0].firstImageUrl
          : jewelriesByCategory[0].secondImageUrl
      }
      alt={jewelriesByCategory[0].title}
      onClick={clickHandler}
    />
  );
};

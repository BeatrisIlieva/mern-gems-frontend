import { useNavigate } from "react-router-dom";

import { useJewelryContext } from "../../../../contexts/JewelryContext";

import { slugify } from "../../../../utils/slugify";

import styles from "./LargeImage.module.css";

export const LargeImage = ({ jewelriesByCategory, firstImageUrlIsActive }) => {


  // const slugifiedJewelryTitle = slugify(selectedEntityColor.title);

  // const clickHandler = () => {
  //   updateSelectedEntity(entity);

  //   updateSelectedColor(colorIndex);

  //   navigate(`/${slugifiedJewelryTitle}`);
  // };

  return (
    <div className={styles["thumbnail"]} >
      <img
        className={`${styles["image"]} ${
          firstImageUrlIsActive
            ? styles["slide-in-right"]
            : styles["slide-in-left"]
        }`}
        src={
          firstImageUrlIsActive ? jewelriesByCategory[0].firstImageUrl : jewelriesByCategory[0].secondImageUrl
        }
        alt={jewelriesByCategory[0].title}
      />
    </div>
  );
};
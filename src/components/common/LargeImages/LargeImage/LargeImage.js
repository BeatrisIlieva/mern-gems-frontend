import { useNavigate } from "react-router-dom";

import { useJewelryContext } from "../../../../contexts/JewelryContext";

import { slugify } from "../../../../utils/slugify";

import styles from "./LargeImage.module.css";

export const LargeImage = ({ firstImageUrlIsActive, entity, selectedEntityColor, colorIndex }) => {
  const navigate = useNavigate();

  const { updateSelectedEntity, updateSelectedColor } = useJewelryContext();

  const slugifiedJewelryTitle = slugify(selectedEntityColor.title);

  const clickHandler = () => {
    updateSelectedEntity(entity);

    updateSelectedColor(colorIndex);

    navigate(`/${slugifiedJewelryTitle}`);
  };

  return (
    <div className={styles["thumbnail"]} onClick={clickHandler}>
      <img
        className={`${styles["image"]} ${
          firstImageUrlIsActive
            ? styles["slide-in-right"]
            : styles["slide-in-left"]
        }`}
        src={
          firstImageUrlIsActive ? selectedEntityColor.firstImageUrl : selectedEntityColor.secondImageUrl
        }
        alt={entity.title}
      />
    </div>
  );
};
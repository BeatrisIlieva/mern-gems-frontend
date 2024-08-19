import { useNavigate } from "react-router-dom";

import { useJewelryContext } from "../../../../../../../contexts/JewelryContext";

import { slugify } from "../../../../../../../utils/slugify";

import styles from "./LargeImage.module.css";

export const LargeImage = ({ firstImageUrlIsActive, entity, selectedEntity, colorIndex }) => {
  const navigate = useNavigate();

  const { updateSelectedEntity, updateSelectedColor } = useJewelryContext();

  const slugifiedJewelryTitle = slugify(selectedEntity.title);

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
          firstImageUrlIsActive ? selectedEntity.firstImageUrl : selectedEntity.secondImageUrl
        }
        alt={entity.title}
      />
    </div>
  );
};

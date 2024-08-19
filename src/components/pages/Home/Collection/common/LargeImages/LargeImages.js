import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CircleIcons } from "./CircleIcons/CircleIcons";

import { useJewelryContext } from "../../../../../../contexts/JewelryContext";

import { slugify } from "../../../../../../utils/slugify";

import styles from "./LargeImages.module.css";

export const LargeImages = ({ entity, colorIndex }) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  const { updateSelectedEntity, updateSelectedColor } = useJewelryContext();

  const navigate = useNavigate();

  const slugifiedJewelryTitle = slugify(entity[colorIndex].title);

  const clickHandler = () => {
    updateSelectedEntity(entity);

    updateSelectedColor(colorIndex);

    navigate(`/${slugifiedJewelryTitle}`);
  };

  const selectedEntity = entity[colorIndex];

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [colorIndex]);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  return (
    <>
      <CircleIcons
        firstImageUrlIsActive={firstImageUrlIsActive}
        toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
        firstImageUrl={selectedEntity.firstImageUrl}
        secondImageUrl={selectedEntity.secondImageUrl}
      />
      <div className={styles["thumbnail"]} onClick={clickHandler}>
        <img
          className={`${styles["image"]} ${
            firstImageUrlIsActive
              ? styles["slide-in-right"]
              : styles["slide-in-left"]
          }`}
          src={
            firstImageUrlIsActive
              ? selectedEntity.firstImageUrl
              : selectedEntity.secondImageUrl
          }
          alt={selectedEntity.title}
        />
      </div>
    </>
  );
};

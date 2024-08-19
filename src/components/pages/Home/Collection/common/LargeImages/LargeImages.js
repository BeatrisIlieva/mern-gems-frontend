import { useState, useEffect } from "react";

import { CircleIcons } from "./CircleIcons/CircleIcons";
import { LargeImage } from "./LargeImage/LargeImage";

import styles from "./LargeImages.module.css";

export const LargeImages = ({ entity, colorIndex }) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  const selectedEntity = entity[colorIndex];

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [colorIndex]);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  return (
    <div className={styles["large-images"]}>
      <CircleIcons
        firstImageUrlIsActive={firstImageUrlIsActive}
        toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
        firstImageUrl={selectedEntity.firstImageUrl}
        secondImageUrl={selectedEntity.secondImageUrl}
      />
      <LargeImage
        firstImageUrlIsActive={firstImageUrlIsActive}
        entity={entity}
        selectedEntity={selectedEntity}
        colorIndex={colorIndex}
      />
    </div>
  );
};

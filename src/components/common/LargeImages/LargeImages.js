import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CircleIcons } from "./CircleIcons/CircleIcons";
import { LargeImage } from "./LargeImage/LargeImage";

import styles from "./LargeImages.module.css";

export const LargeImages = ({ entity, colorIndex }) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  const location = useLocation();

  const displayCircleIconsOnTop = location.pathname === "/";

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
        variant={displayCircleIconsOnTop ? "top" : "bottom"}
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

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CircleIcons } from "./CircleIcons/CircleIcons";
import { LargeImage } from "./LargeImage/LargeImage";

import styles from "./LargeImages.module.css";

export const LargeImages = ({ entity, colorIndex }) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  const location = useLocation();

  const displayCircleIconsOnTop = location.pathname === "/";

  const selectedEntityColor = entity[colorIndex];

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
        firstImageUrl={selectedEntityColor.firstImageUrl}
        secondImageUrl={selectedEntityColor.secondImageUrl}
        variant={displayCircleIconsOnTop ? "top" : "bottom"}
      />
      <LargeImage
        firstImageUrlIsActive={firstImageUrlIsActive}
        entity={entity}
        selectedEntityColor={selectedEntityColor}
        colorIndex={colorIndex}
      />
    </div>
  );
};

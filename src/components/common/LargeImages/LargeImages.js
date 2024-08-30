import { useState, useEffect } from "react";

import { CircleIcons } from "./CircleIcons/CircleIcons";
import { LargeImage } from "./LargeImage/LargeImage";

import { useIsTransitioning } from "../../../hooks/useIsTransitioning";

import styles from "./LargeImages.module.css";

export const LargeImages = ({
  jewelriesByCategory,
  circleIconsPosition,
  variant,
}) => {
  const { isTransitioning } = useIsTransitioning();

  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [jewelriesByCategory[0].color]);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  return (
    <div
      className={`${styles["large-images"]} ${
        isTransitioning ? styles["transitioning"] : ""
      }`.trim()}
    >
      <CircleIcons
        firstImageUrlIsActive={firstImageUrlIsActive}
        toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
        firstImageUrl={jewelriesByCategory[0].firstImageUrl}
        secondImageUrl={jewelriesByCategory[0].secondImageUrl}
        position={circleIconsPosition}
      />
      <LargeImage
        firstImageUrlIsActive={firstImageUrlIsActive}
        jewelriesByCategory={jewelriesByCategory}
        variant={variant}
        toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
      />
    </div>
  );
};

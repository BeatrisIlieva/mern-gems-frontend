import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CircleIcons } from "./CircleIcons/CircleIcons";
import { LargeImage } from "./LargeImage/LargeImage";

import styles from "./LargeImages.module.css";

export const LargeImages = ({ jewelriesByCategory }) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  const location = useLocation();

  const displayCircleIconsOnTop = location.pathname === "/";

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, []);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  return (
    <div className={styles["large-images"]}>
      <CircleIcons
        firstImageUrlIsActive={firstImageUrlIsActive}
        toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
        firstImageUrl={jewelriesByCategory[0].firstImageUrl}
        secondImageUrl={jewelriesByCategory[0].secondImageUrl}
        variant={displayCircleIconsOnTop ? "top" : "bottom"}
      />
      <LargeImage
        firstImageUrlIsActive={firstImageUrlIsActive}
        jewelriesByCategory={jewelriesByCategory}
      />
    </div>
  );
};

import { useState, useEffect } from "react";

import { CircleIcons } from "./CircleIcons/CircleIcons";
import { LargeImage } from "./LargeImage/LargeImage";
import { Heart } from "../Heart/Heart";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";

import styles from "./LargeImages.module.css";

export const LargeImages = ({ jewelriesByCategory }) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [jewelriesByCategory[0].color]);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  return (
    <div className={styles["large-images"]}>
      <DualTitleSection
        firstTitle={
          <CircleIcons
            firstImageUrlIsActive={firstImageUrlIsActive}
            toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
            firstImageUrl={jewelriesByCategory[0].firstImageUrl}
            secondImageUrl={jewelriesByCategory[0].secondImageUrl}
          />
        }
        secondTitle={
          <Heart
            categoryId={jewelriesByCategory[0].category}
            colorId={jewelriesByCategory[0].color}
          />
        }
        variant={"bolded"}
      />
      <div className={styles["image-container"]}>
        <LargeImage
          firstImageUrlIsActive={firstImageUrlIsActive}
          jewelriesByCategory={jewelriesByCategory}
        />
      </div>
    </div>
  );
};

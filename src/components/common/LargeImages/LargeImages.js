import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CircleIcons } from "./CircleIcons/CircleIcons";
import { LargeImage } from "./LargeImage/LargeImage";
import { Heart } from "../Heart/Heart";

import styles from "./LargeImages.module.css";

export const LargeImages = ({ jewelriesByCategory, circleIconsPosition }) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [jewelriesByCategory[0].color]);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  const { slugifiedCategoryTitle, slugifiedColorTitle } = useParams();
  const displayLargerImage = !!(slugifiedCategoryTitle && slugifiedColorTitle);

  return (
    <div className={styles["large-images"]}>
      {/* <DualTitleSection
        firstTitle={
          <CircleIcons
            firstImageUrlIsActive={firstImageUrlIsActive}
            toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
            firstImageUrl={jewelriesByCategory[0].firstImageUrl}
            secondImageUrl={jewelriesByCategory[0].secondImageUrl}
            position={circleIconsPosition}
          />
        }
        secondTitle={<Heart />}
        variant={"bolded"}
      /> */}
      <div className={styles["image-container"]}>
        <LargeImage
          firstImageUrlIsActive={firstImageUrlIsActive}
          jewelriesByCategory={jewelriesByCategory}
          toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
          displayLargerImage={displayLargerImage}
        />
        <CircleIcons
          firstImageUrlIsActive={firstImageUrlIsActive}
          toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
          firstImageUrl={jewelriesByCategory[0].firstImageUrl}
          secondImageUrl={jewelriesByCategory[0].secondImageUrl}
          circleIconsPosition={circleIconsPosition}
        />
      </div>
    </div>
  );
};

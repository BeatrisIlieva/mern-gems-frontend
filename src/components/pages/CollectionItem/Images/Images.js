import { useState, useEffect, memo, useCallback } from "react";

import { JewelryImage } from "../../../common/JewelryImage/JewelryImage";
import { CircleIcons } from "../../../common/CircleIcons/CircleIcons";

import styles from "./Images.module.css";

export const Images = memo(({ jewelriesByCategory }) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [jewelriesByCategory[0].color]);

  const toggleFirstImageUrlIsActive = useCallback(() => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  }, []);

  return (
    <>
      <JewelryImage
        firstImageUrlIsActive={firstImageUrlIsActive}
        firstImageUrl={jewelriesByCategory[0].firstImageUrl}
        secondImageUrl={jewelriesByCategory[0].secondImageUrl}
        title={jewelriesByCategory[0].title}
        clickHandler={toggleFirstImageUrlIsActive}
      />
      <div className={styles["bottom-container"]}>
        <CircleIcons
          firstImageUrlIsActive={firstImageUrlIsActive}
          toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
          firstImageUrl={jewelriesByCategory[0].firstImageUrl}
          secondImageUrl={jewelriesByCategory[0].secondImageUrl}
        />
      </div>
    </>
  );
});

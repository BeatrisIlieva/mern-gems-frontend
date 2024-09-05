import { useState, useEffect } from "react";

import { Image } from "./Image/Image";
import { CircleIcons } from "../../../common/LargeImages/CircleIcons/CircleIcons";

import styles from "./Images.module.css";

export const Images = ({ jewelriesByCategory }) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [jewelriesByCategory[0].color]);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  const clickHandler = () => {
    toggleFirstImageUrlIsActive();
  };

  return (
    <>
      <Image
        firstImageUrlIsActive={firstImageUrlIsActive}
        firstImageUrl={jewelriesByCategory[0].firstImageUrl}
        secondImageUrl={jewelriesByCategory[0].secondImageUrl}
        title={jewelriesByCategory[0].title}
        clickHandler={clickHandler}
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
};

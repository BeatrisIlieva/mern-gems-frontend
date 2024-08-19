import { useState, useEffect } from "react";

import { CircleIcons } from "./CircleIcons/CircleIcons";

import styles from "./LargeImages.module.css";

export const LargeImages = ({ entity,}) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [entity]);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  return (
    <>
      <CircleIcons
        firstImageUrlIsActive={firstImageUrlIsActive}
        toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
        firstImageUrl={entity.firstImageUrl}
        secondImageUrl={entity.secondImageUrl}
      />
      <div className={styles["thumbnail"]} >
        <img
          className={`${styles["image"]} ${
            firstImageUrlIsActive
              ? styles["slide-in-right"]
              : styles["slide-in-left"]
          }`}
          src={
            firstImageUrlIsActive ? entity.firstImageUrl : entity.secondImageUrl
          }
          alt={entity.title}
        />
      </div>
    </>
  );
};

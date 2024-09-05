// import { LargeImages } from "../../../common/LargeImages/LargeImages";

// import styles from "./Images.module.css";

// export const Images = ({ jewelriesByCategory }) => {

//   return (
//     <div className={styles["image-container"]}>
//       {jewelriesByCategory.length > 0 && (
//         <LargeImages
//           jewelriesByCategory={jewelriesByCategory}
//           circleIconsPosition={"bottom"}
//         />
//       )}
//     </div>
//   );
// };

import { useState, useEffect } from "react";

import { LargeImages } from "../../../common/LargeImages/LargeImages";
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
      <img
        className={`${styles["image"]} ${
          firstImageUrlIsActive
            ? styles["slide-in-right"]
            : styles["slide-in-left"]
        }`}
        src={
          firstImageUrlIsActive
            ? jewelriesByCategory[0].firstImageUrl
            : jewelriesByCategory[0].secondImageUrl
        }
        alt={jewelriesByCategory[0].title}
        onClick={clickHandler}
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

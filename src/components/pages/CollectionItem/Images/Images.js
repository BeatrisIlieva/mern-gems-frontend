import { LoadingSpinner } from "../../../common/LoadingSpinner/LoadingSpinner";
import { LargeImages } from "../../../common/LargeImages/LargeImages";

import styles from "./Images.module.css";

export const Images = ({ jewelriesByCategory, isTransitioning }) => {
  return (
    <div className={styles["image-container"]}>
      {isTransitioning && <LoadingSpinner isTransitioning={isTransitioning} />}
      <LargeImages
        jewelriesByCategory={jewelriesByCategory}
        circleIconsPosition={"bottom"}
      />
    </div>
  );
};

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import styles from "./CardSkeleton.module.css";

export const CardSkeleton = () => {
  return (
    <div className={styles["card-skeleton"]}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className={styles["grid-skeleton"]}>
          <SkeletonTheme baseColor="#RRGGBB" highlightColor="#RRGGBB">
            <Skeleton />
          </SkeletonTheme>
        </div>
      ))}
    </div>
  );
};

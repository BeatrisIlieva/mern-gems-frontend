import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { ITEMS_PER_PAGE } from "../../constants/pagination";

import styles from "./CardSkeleton.module.css";

export const CardSkeleton = () => {
  return (
    <div className={styles["card-skeleton"]}>
      {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
        <div key={index} className={styles["grid-skeleton"]}>
          <SkeletonTheme baseColor="#RRGGBB" highlightColor="#RRGGBB">
            <Skeleton />
          </SkeletonTheme>
        </div>
      ))}
    </div>
  );
};

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./CardSkeleton.module.css";

export const CardSkeleton = () => {
  return (
    <div className={styles["card-skeleton"]}>
      <SkeletonTheme baseColor="#RRGGBB" highlightColor="#RRGGBB">
        <Skeleton />
      </SkeletonTheme>
      <div className={styles.spinner}></div>
    </div>
  );
};

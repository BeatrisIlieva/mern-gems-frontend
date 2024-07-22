import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./CardSkeleton.module.css";

export const CardSkeleton = () => {
  return (
    <div className={styles["card-skeleton"]}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className={styles["grid-skeleton"]}>
          <Skeleton />
        </div>
      ))}
    </div>
  );
};

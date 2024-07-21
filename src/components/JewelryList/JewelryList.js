import { useLocation } from "react-router-dom";
import { useJewelryList } from "../../hooks/useJewelryList";

import { JewelryListItem } from "./JewelryListItem/JewelryListItem";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";

import styles from "./JewelryList.module.css";

export const JewelryList = ({ categoryMap, fetchService }) => {
  const location = useLocation();
  const pathname = location.pathname.substring(1);
  const entityId = categoryMap[pathname];

  const { loading, jewelries, totalCount, loadMore, handleLoadMore } =
    useJewelryList(entityId, fetchService);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section className={styles["jewelries"]}>
          <div className={styles["jewelries-count"]}>
            Showing 1 -{" "}
            {totalCount >= jewelries.length ? jewelries.length : totalCount} of{" "}
            {totalCount}
          </div>
          <div className={styles["jewelry-grid"]}>
            {jewelries.map((j) => (
              <JewelryListItem key={j._id} {...j} />
            ))}
          </div>
          {loadMore && (
            <div className={styles["button"]} onClick={handleLoadMore}>
              <AnimatedButton title={"Load More"} />
            </div>
          )}
        </section>
      )}
    </>
  );
};

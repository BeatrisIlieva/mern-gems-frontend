import { useLocation } from "react-router-dom";
import { useJewelryList } from "../../hooks/useJewelryList";

import { JewelryListItem } from "./JewelryListItem/JewelryListItem";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { ENTITIES_MAPPER } from "../../mappers/entitiesMapper";

import styles from "./JewelryList.module.css";

export const JewelryList = () => {
  const location = useLocation();
  const pathname = location.pathname.substring(1);

  const entityId = ENTITIES_MAPPER[pathname].entityId;
  const fetchFunction = ENTITIES_MAPPER[pathname].fetchFunction;

  const {
    loading,
    jewelries,
    totalCount,
    loadMore,
    handleLoadMore,
    showLoadMore,
  } = useJewelryList(entityId, fetchFunction);

  return (
    <>
      <section className={styles["jewelries"]}>
        <div className={styles["jewelries-count"]}>
          Showing 1 -{" "}
          {totalCount >= jewelries.length ? jewelries.length : totalCount} of{" "}
          {totalCount}
        </div>
        {loading ? (
          <>
            <LoadingSpinner />
            <CardSkeleton />
          </>
        ) : (
          <div className={styles["jewelry-grid"]}>
            {jewelries.map((j) => (
              <JewelryListItem key={j._id} {...j} />
            ))}
          </div>
        )}
        {loadMore && showLoadMore && (
          <div className={styles["button"]} onClick={handleLoadMore}>
            <AnimatedButton title={"Load More"} />
          </div>
        )}
      </section>
    </>
  );

  // return (
  //   <>
  //     {loading ? (
  //       <LoadingSpinner />
  //     ) : (
  //       <section className={styles["jewelries"]}>
  //         <div className={styles["jewelries-count"]}>
  //           Showing 1 -{" "}
  //           {totalCount >= jewelries.length ? jewelries.length : totalCount} of{" "}
  //           {totalCount}
  //         </div>
  //         <div className={styles["jewelry-grid"]}>
  //           {jewelries.map((j) => (
  //             <JewelryListItem key={j._id} {...j} />
  //           ))}
  //         </div>
  //         {loadMore && (
  //           <div className={styles["button"]} onClick={handleLoadMore}>
  //             <AnimatedButton title={"Load More"} />
  //           </div>
  //         )}
  //       </section>
  //     )}
  //   </>
  // );
};

import { useLocation } from "react-router-dom";

import { JewelryListItem } from "./JewelryListItem/JewelryListItem";
import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";
import { Button } from "../../reusable/Button/Button";
import { CardSkeleton } from "./CardSkeleton/CardSkeleton";
import { NavItems } from "./NavItems/NavItems";

import { useJewelryList } from "../../../hooks/useJewelryList";

import { transformUrlSegment } from "../../../utils/transformUrlSegment";

import { COLLECTIONS_BY_ID } from "../../../mappers/collectionsById";
import { CATEGORIES_BY_ID } from "../../../mappers/categoriesById";

import styles from "./JewelryList.module.css";

export const JewelryList = () => {
  const location = useLocation();

  const pathname = location.pathname.substring(1);

  const [collectionName, categoryName] = pathname.split("/");

  const collectionId = COLLECTIONS_BY_ID[collectionName];

  const categoryId = CATEGORIES_BY_ID[categoryName];

  const transformedCollectionName = transformUrlSegment(collectionName);

  const {
    loading,
    jewelries,
    totalCount,
    loadMore,
    handleLoadMore,
    showLoadMore,
  } = useJewelryList(collectionId, categoryId);

  return (
    <section className={styles["jewelries"]}>
      <NavItems
        collectionName={collectionName}
        transformedCollectionName={transformedCollectionName}
      />
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
          <Button title={"Load More"} variant={"animated"} />
        </div>
      )}
    </section>
  );
};

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { JewelryListItem } from "./JewelryListItem/JewelryListItem";
import { LoadingSpinner } from "../../utils/LoadingSpinner/LoadingSpinner";
import { Button } from "../../reusable/Button/Button";
import { CardSkeleton } from "./CardSkeleton/CardSkeleton";
import { NavItems } from "./NavItems/NavItems";

import { useService } from "../../../hooks/useService";

import { jewelryServiceFactory } from "../../../services/jewelryService";

import { transformUrlSegment } from "../../../utils/transformUrlSegment";

import { COLLECTIONS_BY_ID } from "../../../mappers/collectionsById";
import { CATEGORIES_BY_ID } from "../../../mappers/categoriesById";

import { ITEMS_PER_PAGE } from "../../../constants/pagination";

import styles from "./JewelryList.module.css";

export const JewelryList = () => {
  const location = useLocation();

  const pathname = location.pathname.substring(1);

  const [collectionName, categoryName] = pathname.split("/");

  const collectionId = COLLECTIONS_BY_ID[collectionName];

  const categoryId = CATEGORIES_BY_ID[categoryName];

  const transformedCollectionName = transformUrlSegment(collectionName);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);

  const [loadMore, setLoadMore] = useState(true);

  const [jewelries, setJewelries] = useState([]);

  const [totalCount, setTotalCount] = useState(0);

  const [showLoadMore, setShowLoadMore] = useState(false);

  const jewelryService = useService(jewelryServiceFactory);

  useEffect(() => {
    setLoading(true);

    const skip = page * ITEMS_PER_PAGE;
    const limit = ITEMS_PER_PAGE;

    jewelryService
      .getAll(collectionId, categoryId, skip, limit)
      .then((data) => {
        if (page === 0) {
          setJewelries(data.jewelries);
        } else {
          setJewelries((state) => [...state, ...data.jewelries]);
        }
        setTotalCount(data.totalCount);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
        setShowLoadMore(false);
        setTimeout(() => {
          setShowLoadMore(true);
        }, 1000);
      });
  }, [collectionId, categoryId, page]);

  useEffect(() => {
    setLoadMore(jewelries.length < totalCount);
  }, [loading, jewelries.length, totalCount]);

  useEffect(() => {
    setLoading(true);
    setPage(0);
    setLoadMore(true);
    setJewelries([]);
    setTotalCount(0);
  }, [collectionId, categoryId]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

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

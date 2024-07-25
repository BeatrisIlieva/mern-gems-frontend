import { useState, useEffect } from "react";
import { ITEMS_PER_PAGE } from "../constants/pagination";
import { useService } from "./useService";
import { jewelryServiceFactory } from "../services/jewelryService";

export const useJewelryList = (collectionId, categoryId) => {
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
        }, 2000);
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

  return {
    loading,
    jewelries,
    totalCount,
    loadMore,
    handleLoadMore,
    showLoadMore,
  };
};

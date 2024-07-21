import { useState, useEffect } from "react";
import { ITEMS_PER_PAGE } from "../constants/itemsPerPage";

export const useJewelryList = (entityId, fetchService) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [loadMore, setLoadMore] = useState(true);
  const [jewelries, setJewelries] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    const skip = page * ITEMS_PER_PAGE;
    const limit = ITEMS_PER_PAGE;

    fetchService(entityId, skip, limit)
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
      });
  }, [entityId, page, fetchService]);

  useEffect(() => {
    setLoadMore(jewelries.length < totalCount);
  }, [loading, jewelries.length, totalCount]);

  useEffect(() => {
    setLoading(true);
    setPage(0);
    setLoadMore(true);
    setJewelries([]);
    setTotalCount(0);
  }, [entityId]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { loading, jewelries, totalCount, loadMore, handleLoadMore };
};

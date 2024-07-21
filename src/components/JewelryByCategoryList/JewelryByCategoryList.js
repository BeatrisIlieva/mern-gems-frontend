import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import * as jewelryByCategoryService from "../../services/jewelryByCategoryService";

import { JewelryByCategoryListItem } from "./JewelryByCategoryListItem/JewelryByCategoryListItem";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";

import { CATEGORIES_BY_ID } from "../../mappers/categoriesById";

import styles from "./JewelryByCategoryList.module.css";

export const JewelryByCategoryList = () => {
  const location = useLocation();
  const pathname = location.pathname.substring(1);
  const categoryId = CATEGORIES_BY_ID[pathname];

  let [loading, setLoading] = useState(true);

  const [jewelries, setJewelries] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    jewelryByCategoryService
      .getAll(categoryId)
      .then((data) => {
        setJewelries(data.jewelries);
        setTotalCount(data.totalCount);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pathname, categoryId]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section div className={styles["jewelries"]}>
          <div className={styles["jewelries-count"]}>
            Showing 1 - {totalCount}
            {/* {totalCount >= displayedItems ? displayedItems : totalCount} 0f{" "} */}
          </div>
          <div className={styles["jewelry-grid"]}>
            {jewelries.map((j) => (
              <JewelryByCategoryListItem key={j._id} {...j} />
            ))}
          </div>
          <div className={styles["button"]}>
            <AnimatedButton title={"Load More"} />
          </div>
        </section>
      )}
    </>
  );
};

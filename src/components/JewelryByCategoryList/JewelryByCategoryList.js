// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// import * as jewelryByCategoryService from "../../services/jewelryByCategoryService";

// import { JewelryByCategoryListItem } from "./JewelryByCategoryListItem/JewelryByCategoryListItem";
// import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
// import { AnimatedButton } from "../AnimatedButton/AnimatedButton";

// import { CATEGORIES_BY_ID } from "../../mappers/categoriesById";
// import { ITEMS_PER_PAGE } from "../../constants/itemsPerPage";

// import styles from "./JewelryByCategoryList.module.css";

// export const JewelryByCategoryList = () => {
//   const location = useLocation();
//   const pathname = location.pathname.substring(1);
//   const categoryId = CATEGORIES_BY_ID[pathname];

//   const [loading, setLoading] = useState(true);

//   const [page, setPage] = useState(0);
//   const [loadMore, setLoadMore] = useState(true);

//   const [jewelries, setJewelries] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);

//   useEffect(() => {
//     setLoading(true);

//     const skip = page * ITEMS_PER_PAGE;
//     const limit = ITEMS_PER_PAGE;

//     jewelryByCategoryService
//       .getAll(categoryId, skip, limit)
//       .then((data) => {
//         if (page === 0) {
//           setJewelries(data.jewelries);
//         } else {
//           setJewelries((state) => [...state, ...data.jewelries]);
//         }
//         setTotalCount(data.totalCount);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [pathname, categoryId, page]);

//   useEffect(() => {
//     setLoadMore(jewelries.length < totalCount);
//   }, [loading]);

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <>
//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <section div className={styles["jewelries"]}>
//           <div className={styles["jewelries-count"]}>
//             Showing 1 -{" "}
//             {totalCount >= jewelries.length ? jewelries.length : totalCount} of{" "}
//             {totalCount}
//           </div>
//           <div className={styles["jewelry-grid"]}>
//             {jewelries.map((j) => (
//               <JewelryByCategoryListItem key={j._id} {...j} />
//             ))}
//           </div>
//           {loadMore === true && (
//             <div className={styles["button"]} onClick={handleLoadMore}>
//               <AnimatedButton title={"Load More"} />
//             </div>
//           )}
//         </section>
//       )}
//     </>
//   );
// };

import { JewelryList } from "../JewelryList/JewelryList";
import * as jewelryByCategoryService from "../../services/jewelryByCategoryService";
import { CATEGORIES_BY_ID } from "../../mappers/categoriesById";

export const JewelryByCategoryList = () => {
  return (
    <JewelryList
      categoryMap={CATEGORIES_BY_ID}
      fetchService={jewelryByCategoryService.getAll}
    />
  );
};

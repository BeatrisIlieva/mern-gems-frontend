// import { LoadingSpinner } from "../../../LoadingSpinner/LoadingSpinner";
// import { Content } from "./Content/Content";

// import styles from "./Card.module.css";

// export const Card = ({
//   jewelriesByCategory,
//   isTransitioning,
//   updateSelectedColor,
// }) => {
//   return (
//     <div className={styles["outer-wrapper"]}>
//       {isTransitioning ? (
//         <LoadingSpinner isTransitioning={isTransitioning} />
//       ) : (
//         <div
//           className={`${styles["spinner-wrapper"]} ${
//             isTransitioning ? `${styles["transitioning"]}` : ""
//           }`.trim()}
//         >
//           <Content
//             jewelriesByCategory={jewelriesByCategory}
//             updateSelectedColor={updateSelectedColor}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

import { Content } from "./Content/Content";

import styles from "./Card.module.css";

export const Card = ({ jewelriesByCategory, updateSelectedColor }) => {
  return (
    <div className={styles["outer-wrapper"]}>
      {jewelriesByCategory.length > 0 && (
        <Content
          jewelriesByCategory={jewelriesByCategory}
          updateSelectedColor={updateSelectedColor}
        />
      )}
    </div>
  );
};

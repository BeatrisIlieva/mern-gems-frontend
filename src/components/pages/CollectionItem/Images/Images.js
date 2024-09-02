import { LargeImages } from "../../../common/LargeImages/LargeImages";

import styles from "./Images.module.css";

// export const Images = ({ jewelriesByCategory, isLoading }) => {
//   return (
//     <div className={styles["image-container"]}>
//       {isLoading ? (
//         <></>
//       ) : (
//         <LargeImages
//           jewelriesByCategory={jewelriesByCategory}
//           circleIconsPosition={"bottom"}
//         />
//       )}
//     </div>
//   );
// };

export const Images = ({ jewelriesByCategory }) => {
  return (
    <div className={styles["image-container"]}>
      {jewelriesByCategory.length > 0 && (
        <LargeImages
          jewelriesByCategory={jewelriesByCategory}
          circleIconsPosition={"bottom"}
        />
      )}
    </div>
  );
};

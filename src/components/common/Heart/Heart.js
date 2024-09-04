// import { useWishlistContext } from "../../../contexts/WishlistContext";
// import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

// import styles from "./Heart.module.css";

// export const Heart = ({ categoryId, colorId}) => {
//   const { userId } = useAuthenticationContext();

//   const { wishlistItems, add, remove } = useWishlistContext();

//   const itemsArray = wishlistItems?.result;

//   let isLikedByUser;
  
//   itemsArray.map((item) => (
//     const category = item.category._id;
//     const color = item.color._id;

//     if(category === categoryId && color === colorId) {
// isLikedByUser = true
//     } else {
//       isLikedByUser = false
//     }
//   ))

//   return (
//     <>
//     {isLikedByUser ? (
//       <FontAwesomeIcon
//       icon={solidHeart}
//       className={styles["heart-icon"]}
//       onClick={() => remove(categoryId, colorId, userId)}
//     />
//     ) : (
//       <FontAwesomeIcon
//         icon={regularHeart}
//         className={styles["heart-icon"]}
//         onClick={() => add(categoryId, colorId, userId)}
//       />
//     )}
//     </>
//   );
// };


import { useWishlistContext } from "../../../contexts/WishlistContext";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./Heart.module.css";

export const Heart = ({ categoryId, colorId }) => {
  const { userId } = useAuthenticationContext();
  const { wishlistItems, add, remove } = useWishlistContext();

  // Access the 'result' array from the wishlistItems object
  const itemsArray = wishlistItems?.result || [];

  // Check if the item is liked by the user
  const isLikedByUser = itemsArray.some(
    (item) =>
      item.category._id === categoryId && item.color._id === colorId
  );

  const handleClick = () => {
    if (isLikedByUser) {
      remove(categoryId, colorId, userId);
    } else {
      add(categoryId, colorId, userId);
    }
  };

  return (
    <FontAwesomeIcon
      icon={isLikedByUser ? solidHeart : regularHeart}
      className={styles["heart-icon"]}
      onClick={handleClick}
    />
  );
};

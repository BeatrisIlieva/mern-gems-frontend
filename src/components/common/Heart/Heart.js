import { useWishlistContext } from "../../../contexts/WishlistContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./Heart.module.css";
import { useBagContext } from "../../../contexts/BagContext";

export const Heart = ({ jewelryId }) => {
  const { wishlistItems, add, remove } = useWishlistContext();

  return (
    <>
      <FontAwesomeIcon icon={regularHeart} className={styles["heart-icon"]} />
      <FontAwesomeIcon icon={solidHeart} className={styles["heart-icon"]} />
    </>
  );
};

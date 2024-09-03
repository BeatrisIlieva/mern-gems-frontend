import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import styles from "./MoveToWishlist.module.css";

export const MoveToWishlist = () => {
  return (
    <div className={styles["wrapper"]}>
      <FontAwesomeIcon icon={faHeart} className={styles["icon"]} />
      <span>Move to Wishlist</span>
    </div>
  );
};

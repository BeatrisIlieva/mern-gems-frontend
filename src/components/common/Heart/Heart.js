import { useWishlistContext } from "../../../contexts/WishlistContext";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./Heart.module.css";

export const Heart = ({ jewelryId }) => {
  const { userId } = useAuthenticationContext();

  const { wishlistItems, add, remove } = useWishlistContext();

  return (
    <>
      <FontAwesomeIcon
        icon={regularHeart}
        className={styles["heart-icon"]}
        onClick={() => add(jewelryId, userId)}
      />
      <FontAwesomeIcon
        icon={solidHeart}
        className={styles["heart-icon"]}
        onClick={() => remove(jewelryId, userId)}
      />
    </>
  );
};

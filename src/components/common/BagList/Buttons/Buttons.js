import { Remove } from "./Remove/Remove";
import { MoveToWishlist } from "./MoveToWishList/MoveToWishList";

import styles from "./Buttons.module.css";

export const Buttons = () => {
  return (
    <div className={styles["wrapper"]}>
      <MoveToWishlist />
      <Remove />
    </div>
  );
};

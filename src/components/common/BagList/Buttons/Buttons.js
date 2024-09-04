import { Remove } from "./Remove/Remove";
import { MoveToWishlist } from "./MoveToWishlist/MoveToWishlist";
import { Icon } from "./Icon/Icon";

import styles from "./Buttons.module.css";

export const Buttons = ({ bagId }) => {
  return (
    <>
      <div className={styles["wrapper"]}>
        <MoveToWishlist />
        <Remove bagId={bagId} />
      </div>
      <Icon />
    </>
  );
};

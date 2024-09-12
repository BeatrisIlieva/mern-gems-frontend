import { Link } from "react-router-dom";

import styles from "./TrackOrder.module.css";

export const TrackOrder = () => {
  return (
    <Link to={"/users/account"} className={styles["link"]}>
      <span className={styles["gray"]}>
        You can track your order status in your{" "}
      </span>
      <span className={styles["violet"]}>Account</span>
    </Link>
  );
};

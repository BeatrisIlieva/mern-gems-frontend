import { Link } from "react-router-dom";

import { NormalTitle } from "../../../reusable/NormalTitle/NormalTitle";

import styles from "./TrackOrder.module.css"

export const TrackOrder = () => {
  return (
    <div className={styles["link-to-account"]}>
      <NormalTitle
        title={"You can track your order status in your"}
        variant={"regular"}
      />
      <Link to={"/users/account"} className={styles["link"]}>
        Account
      </Link>
    </div>
  );
};

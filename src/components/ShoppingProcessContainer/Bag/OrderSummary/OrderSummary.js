import { PinkButton } from "../../../PinkButton/PinkButton";

import { Link } from "react-router-dom";

import styles from "./OrderSummary.module.css"

export const OrderSummary = ({path}) => {
  return (
    <div className={styles["button-container"]}>
      <Link to={path} className={styles["no-decoration"]}>
        <PinkButton title={"Continue Checkout"} />
      </Link>
    </div>
  );
};

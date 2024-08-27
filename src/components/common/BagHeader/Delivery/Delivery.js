import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";

import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Delivery.module.css";

export const Delivery = () => {
  return (
    <div className={styles["delivery"]}>
      <FontAwesomeIcon icon={faTruck} className={styles["icon"]} />
      <LargeTitle title={"Delivery"} variant={"italic"} />
    </div>
  );
};

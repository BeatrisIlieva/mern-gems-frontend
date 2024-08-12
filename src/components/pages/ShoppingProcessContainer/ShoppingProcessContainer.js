import { XLargeTitle } from "../reusable/XLargeTitle/XLargeTitle";
import { BagCount } from "../BagCount/BagCount";

import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ShoppingProcessContainer.module.css";

export const ShoppingProcessContainer = ({ children, title }) => {
  return (
    <section className={styles["shopping-process-container"]}>
      <div className={styles["top"]}>
        <XLargeTitle title={title} variant={"italic"} />
        <div className={styles["delivery"]}>
          <FontAwesomeIcon icon={faTruck} className={styles["icon"]} />
          <XLargeTitle title={"Delivery"} variant={"italic"} />
          <BagCount />
        </div>
      </div>
      <div className={styles["bottom"]}>{children}</div>
    </section>
  );
};

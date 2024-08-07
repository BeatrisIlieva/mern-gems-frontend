import { XLargeTitle } from "../XLargeTitle/XLargeTitle";

import { Icon } from "../Icon/Icon";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import { BagCount } from "../BagCount/BagCount";
import styles from "./ShoppingProcessContainer.module.css";

export const ShoppingProcessContainer = ({ children, title }) => {
  return (
    <section className={styles["shopping-process-container"]}>
      <div className={styles["top"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <div className={styles["delivery"]}>
          <Icon icon={faTruck} variant={"shopping-process-container"} />
          <XLargeTitle title={"Delivery"} variant={"large-title"} />
          <BagCount />
        </div>
      </div>
      <div className={styles["bottom"]}>{children}</div>
    </section>
  );
};

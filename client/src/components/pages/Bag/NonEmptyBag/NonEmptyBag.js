import { memo } from "react";

import { OrderSummaryContent } from "./OrderSummaryContent/OrderSummaryContent";
import { BagContent } from "./BagContent/BagContent";

import styles from "./NonEmptyBag.module.css";

export const NonEmptyBag = memo(() => {
  return (
    <section id={styles["non-empty-bag"]}>
      <div className={styles["outer-wrapper"]}>
        <div className={styles["bag-content"]}>
          <div className={styles["inner-wrapper"]}>
            <BagContent />
          </div>
        </div>
        <div className={styles["order-summary-content"]}>
          <div className={styles["inner-wrapper"]}>
            <OrderSummaryContent />
          </div>
        </div>
      </div>
    </section>
  );
});

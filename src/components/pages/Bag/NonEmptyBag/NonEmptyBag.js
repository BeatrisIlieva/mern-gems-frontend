import { ShoppingProcessContainer } from "../../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { OrderSummaryContent } from "./OrderSummaryContent/OrderSummaryContent";
import { BagContent } from "./BagContent/BagContent";

import { useIsMobile } from "../../../../hooks/useIsMobile";

import styles from "./NonEmptyBag.module.css";

export const NonEmptyBag = () => {
  const { isReversed } = useIsMobile();

  return (
    <section id={styles["non-empty-bag"]}>
      {/* {isReversed ? (
        <div className={styles["outer-wrapper"]}>
          <div className={styles["order-summary-content"]}>
            <div className={styles["inner-wrapper"]}>
              <OrderSummaryContent />
            </div>
          </div>
          <div className={styles["bag-content"]}>
            <div className={styles["inner-wrapper"]}>
              <BagContent />
            </div>
          </div>
        </div>
      ) : ( */}
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
      {/* )} */}
    </section>
  );
};

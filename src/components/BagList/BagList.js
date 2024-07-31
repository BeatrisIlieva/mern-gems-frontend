import { JewelryCard } from "../JewelryCard/JewelryCard";
import { SpanTitle } from "../SpanTitle/SpanTitle";
import { MediumTitle } from "../MediumTitle/MediumTitle";
import { Remove } from "./Remove/Remove";

import styles from "./BagList.module.css";
import { useLocation } from "react-router-dom";

import { useBagContext } from "../../contexts/BagContext";

export const BagList = () => {
  const location = useLocation();

  const locationIsCheckout = location.pathname === "/checkout";

  const { bagItems } = useBagContext();

  return (
    <ul role="list" className={styles["bag-list"]}>
      {bagItems.map((item) => (
        <li key={item.bagId}>
          <JewelryCard
            jewelryId={item.jewelryId}
            firstImageUrl={item.firstImageUrl}
            isSoldOut={item.isSoldOut}
            categoryTitle={item.categoryTitle}
            jewelryTitle={item.jewelryTitle}
          />
          <div className={styles["middle-container"]}>
            <div className={styles["left"]}>
              <MediumTitle title={item.jewelryTitle} />
              <SpanTitle title={`Size: ${item.size}`} />
            </div>
            <div className={styles["right"]}>
              <MediumTitle title={`$ ${item.totalPrice}`} />
              {!locationIsCheckout ? (
                <div className={styles["button-wrapper"]}>
                  <Remove bagId={item.bagId} />
                </div>
              ) : (
                `Qty ${item.quantity}`
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

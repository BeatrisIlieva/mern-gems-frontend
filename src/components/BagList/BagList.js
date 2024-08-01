import { JewelryCard } from "../JewelryCard/JewelryCard";
import { SpanTitle } from "../SpanTitle/SpanTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { MediumTitle } from "../MediumTitle/MediumTitle";
import { Remove } from "./Remove/Remove";

import styles from "./BagList.module.css";
import { useLocation } from "react-router-dom";

import { useBagContext } from "../../contexts/BagContext";

export const BagList = ({ variant }) => {
  const location = useLocation();

  const locationIsCheckout = location.pathname === "/checkout" || location.pathname === "/payment";

  const { bagItems } = useBagContext();

  return (
    <ul role="list" className={styles[variant]}>
      {bagItems.map((item) => (
        <li key={item.bagId} className={styles["wrapper"]}>
          <JewelryCard
            jewelryId={item.jewelryId}
            firstImageUrl={item.firstImageUrl}
            isSoldOut={item.isSoldOut}
            categoryTitle={item.categoryTitle}
            jewelryTitle={item.jewelryTitle}
            variant={"bag-list"}
          />
          <div className={styles["middle-container"]}>
            <div className={styles["left"]}>
              <SmallTitle title={item.jewelryTitle} />
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

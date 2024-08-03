import { JewelryCard } from "../JewelryCard/JewelryCard";
import { NormalTitle } from "../NormalTitle/NormalTitle";

import { Remove } from "./Remove/Remove";

import styles from "./BagList.module.css";
import { useLocation } from "react-router-dom";

import { useBagContext } from "../../contexts/BagContext";

export const BagList = ({ variant }) => {
  const location = useLocation();

  const showRemoveButton =
    location.pathname !== "/checkout" && location.pathname !== "/payment";

  const { bagItems } = useBagContext();

  return (
    <ul role="list" className={styles[variant]}>
      {bagItems.map((item) => (
        <li key={item.bagId} className={styles["wrapper"]}>
          <JewelryCard
            jewelryId={item.jewelryId}
            firstImageUrl={item.firstImageUrl}
            isSoldOut={item.isSoldOut}
            collectionTitle={item.collectionTitle}
            categoryTitle={item.categoryTitle}
            jewelryTitle={item.jewelryTitle}
            variant={"bag-list"}
          />
          <div className={styles["middle-container"]}>
            <div className={styles["left"]}>
              <NormalTitle title={item.jewelryTitle} variant={"bolded"} />
              <NormalTitle title={`Size: ${item.size}`} variant={"regular"} />
            </div>
            <div className={styles["right"]}>
              <NormalTitle title={`$ ${item.totalPrice}`} variant={"bolded"} />
              {showRemoveButton ? (
                <div className={styles["button-wrapper"]}>
                  <Remove bagId={item.bagId} />
                </div>
              ) : (
                <NormalTitle
                  title={`Qty ${item.quantity}`}
                  variant={"regular"}
                />
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

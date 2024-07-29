import { JewelryCard } from "../../../JewelryCard/JewelryCard";
import { SpanTitle } from "../../../SpanTitle/SpanTitle";
import { MediumTitle } from "../../../MediumTitle/MediumTitle";

import { IncreaseQuantityButton } from "./IncreaseQuantityButton/IncreaseQuantityButton";
import { DecreaseQuantityButton } from "./DecreaseQuantityButton/DecreaseQuantityButton";

import styles from "./BagList.module.css";
import { useLocation } from "react-router-dom";

export const BagList = ({
  _id,
  jewelryTitle,
  categoryTitle,
  firstImageUrl,
  isSoldOut,
  jewelryId,
  totalPrice,
  quantity,
  size,
  inventoryQuantity,
}) => {
  const location = useLocation();

  const locationIsShoppingBag = location.pathname === "/users/shopping-bag";

  return (
    <section className={styles["bag-list"]}>
      <JewelryCard
        jewelryId={jewelryId}
        firstImageUrl={firstImageUrl}
        isSoldOut={isSoldOut}
        categoryTitle={categoryTitle}
        jewelryTitle={jewelryTitle}
        variant={
          locationIsShoppingBag ? "bag-list" : "shopping-process-container"
        }
      />
      <div className={styles["middle-container"]}>
        <div className={styles["left"]}>
          <MediumTitle title={jewelryTitle} />
          <SpanTitle title={`Size: ${size}`} />
        </div>
        <div className={styles["right"]}>
          <MediumTitle title={`$ ${totalPrice}`} />
          {locationIsShoppingBag ? (
            <div className={styles["button-wrapper"]}>
              <IncreaseQuantityButton
                bagId={_id}
                quantity={quantity}
                inventoryQuantity={inventoryQuantity}
              />
              <span className={styles["quantity"]}>{quantity}</span>
              <DecreaseQuantityButton bagId={_id} />
            </div>
          ) : (
            `Qty ${quantity}`
          )}
        </div>
      </div>
    </section>
  );
};

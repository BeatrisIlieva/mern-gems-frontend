import { JewelryCard } from "../../JewelryCard/JewelryCard";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { SpanTitle } from "../../SpanTitle/SpanTitle";

import { IncreaseQuantityButton } from "./IncreaseQuantityButton/IncreaseQuantityButton";
import { DecreaseQuantityButton } from "./DecreaseQuantityButton/DecreaseQuantityButton";

import styles from "./BagList.module.css";

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
  return (
    <section className={styles["bag-list"]}>
      <JewelryCard
        jewelryId={jewelryId}
        firstImageUrl={firstImageUrl}
        isSoldOut={isSoldOut}
        categoryTitle={categoryTitle}
        jewelryTitle={jewelryTitle}
        variant={"bag-list"}
      />
      <div className={styles["middle-container"]}>
        <div className={styles["left"]}>
          <SmallTitle title={jewelryTitle} />
          <SpanTitle title={size} />
        </div>
        <div className={styles["right"]}>
          <SmallTitle title={totalPrice} />
          <div className={styles["button-wrapper"]}>
            <IncreaseQuantityButton
              bagId={_id}
              quantity={quantity}
              inventoryQuantity={inventoryQuantity}
            />
            <span>{quantity}</span>
            <DecreaseQuantityButton bagId={_id} />
          </div>
        </div>
      </div>
    </section>
  );
};

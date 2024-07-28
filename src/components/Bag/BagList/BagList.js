import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService";
import { bagServiceFactory } from "../../../services/bagService";

import { JewelryCard } from "../../JewelryCard/JewelryCard";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { SpanTitle } from "../../SpanTitle/SpanTitle";
import { UnderlinedButton } from "../../UnderlinedButton/UnderlinedButton";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import { UpdateQuantityButton } from "./UpdateQuantityButton/UpdateQuantityButton";

import styles from "./BagList.module.css";

export const BagList = ({
  _id,
  jewelryTitle,
  categoryTitle,
  firstImageUrl,
  isSoldOut,
  jewelryId,
  totalPrice,
  maxQuantity,
  quantity,
  size,
  increaseQuantityDisabled,
  decreaseQuantityDisabled,
  updateBagItemQuantityIntoState,
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
            <UpdateQuantityButton
              bagId={_id}
              buttonDisabled={increaseQuantityDisabled}
              updateBagItemQuantityIntoState={updateBagItemQuantityIntoState}
              delta={1}
              icon={faPlus}
            />
            <span>{quantity}</span>
            <UpdateQuantityButton
              bagId={_id}
              buttonDisabled={decreaseQuantityDisabled}
              updateBagItemQuantityIntoState={updateBagItemQuantityIntoState}
              delta={-1}
              icon={faMinus}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

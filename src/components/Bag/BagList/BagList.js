import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService";
import { bagServiceFactory } from "../../../services/bagService";

import { JewelryCard } from "../../JewelryCard/JewelryCard";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { SpanTitle } from "../../SpanTitle/SpanTitle";
import { UnderlinedButton } from "../../UnderlinedButton/UnderlinedButton";

import { IncreaseBagItemQuantity } from "../../IncreaseBagItemQuantity/IncreaseBagItemQuantity";
import { DecreaseBagItemQuantity } from "../../DecreaseBagItemQuantity/DecreaseBagItemQuantity";

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
      <SmallTitle title={jewelryTitle} />
      <SpanTitle title={size} />
      <IncreaseBagItemQuantity bagId={_id}/>
      <span>{quantity}</span>
      <DecreaseBagItemQuantity bagId={_id}/>
      </div>

    </section>
  );
};

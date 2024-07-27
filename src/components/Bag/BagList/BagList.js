import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService";
import { bagServiceFactory } from "../../../services/bagService";

import { JewelryCard } from "../../JewelryCard/JewelryCard";

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
    <JewelryCard
      jewelryId={jewelryId}
      firstImageUrl={firstImageUrl}
      isSoldOut={isSoldOut}
      categoryTitle={categoryTitle}
      jewelryTitle={jewelryTitle}
    />
  );
};

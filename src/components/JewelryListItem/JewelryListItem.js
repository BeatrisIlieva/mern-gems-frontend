import { JewelryCard } from "../JewelryCard/JewelryCard";

export const JewelryListItem = ({
  _id,
  jewelryTitle,
  categoryTitle,
  firstImageUrl,
  isSoldOut,
}) => {
  return (
    <JewelryCard
      jewelryId={_id}
      firstImageUrl={firstImageUrl}
      isSoldOut={isSoldOut}
      categoryTitle={categoryTitle}
      jewelryTitle={jewelryTitle}
    />
  );
};

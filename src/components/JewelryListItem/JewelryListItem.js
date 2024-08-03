import { JewelryCard } from "../JewelryCard/JewelryCard";

export const JewelryListItem = ({
  _id,
  jewelryTitle,
  categoryTitle,
  collectionTitle,
  firstImageUrl,
  isSoldOut,
}) => {
  return (
    <JewelryCard
      jewelryId={_id}
      firstImageUrl={firstImageUrl}
      isSoldOut={isSoldOut}
      categoryTitle={categoryTitle}
      collectionTitle={collectionTitle}
      jewelryTitle={jewelryTitle}
    />
  );
};

import { JewelryCard } from "../JewelryCard/JewelryCard";

import { slugify } from "../../utils/slugify";

export const JewelryListItem = ({
  _id,
  jewelryTitle,
  categoryTitle,
  firstImageUrl,
  // jewelryTitle,
  // categoryTitle,
  isSoldOut,
}) => {
  // const slugifiedCategoryTitle = slugify(categoryTitle);
  // const slugifiedJewelryTitle = slugify(jewelryTitle);

  return (
    <JewelryCard
      jewelryId={_id}
      firstImageUrl={firstImageUrl}
      // slugifiedCategoryTitle={slugifiedCategoryTitle}
      // slugifiedJewelryTitle={slugifiedJewelryTitle}
      isSoldOut={isSoldOut}
      categoryTitle={categoryTitle}
      jewelryTitle={jewelryTitle}
    />
  );
};

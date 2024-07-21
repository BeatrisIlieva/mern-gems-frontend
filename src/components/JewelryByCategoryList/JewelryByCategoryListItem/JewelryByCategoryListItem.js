export const JewelryByCategoryListItem = ({
  _id,
  firstImageUrl,
  jewelryTitle,
  categoryTitle,
}) => {
  const slugifiedCategoryTitle = slugify(categoryTitle);
  const slugifiedJewelryTitle = slugify(jewelryTitle);

  return (
    <JewelryCard
      jewelryId={_id}
      firstImageUrl={firstImageUrl}
      slugifiedCategoryTitle={slugifiedCategoryTitle}
      slugifiedJewelryTitle={slugifiedJewelryTitle}
    />
  );
};

export const filterJewelriesByCategoryId = (jewelries, categoryId) => {
  return jewelries.filter((jewelry) => jewelry.category === categoryId);
};

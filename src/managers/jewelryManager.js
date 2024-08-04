const {
  getAllJewelriesByEntityIds,
} = require("../aggregations/getAllJewelriesByEntityIds");

const { getOneJewelryById } = require("../aggregations/getOneJewelryById");

exports.getOne = async (jewelryId) => {
  return await getOneJewelryById(jewelryId);
};

exports.getAll = async ({ collectionId, categoryId, skip, limit }) => {
  return await getAllJewelriesByEntityIds({
    collectionId,
    categoryId,
    skip,
    limit,
  });
};

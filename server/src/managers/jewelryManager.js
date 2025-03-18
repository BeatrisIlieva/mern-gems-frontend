const { getOneJewelry } = require("../aggregations/getOneJewelry");

exports.getOne = async (categoryId, colorId) => {
  return await getOneJewelry(categoryId, colorId);
};

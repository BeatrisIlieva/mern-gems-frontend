const Inventory = require("../models/Inventory");

exports.checkIfItemIsAvailable = async (jewelryId, sizeId) => {
  const result = await Inventory.findOne({
    jewelry: jewelryId,
    size: Number(sizeId),
    quantity: { $gt: 0 },
  });

  return result;
};

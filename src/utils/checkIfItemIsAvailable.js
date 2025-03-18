const Inventory = require("../models/Inventory");

exports.checkIfItemIsAvailable = async (jewelryId, size) => {
  const result = await Inventory.findOne({
    jewelry: jewelryId,
    size,
    quantity: { $gt: 0 },
  });

  return result;
};

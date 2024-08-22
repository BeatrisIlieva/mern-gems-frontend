const Inventory = require("../models/Inventory");

exports.updateInventoryQuantity = async (jewelry, size, delta) => {
  await Inventory.findOneAndUpdate(
    { jewelry, size },
    { $inc: { quantity: +delta } },
    { new: true }
  );
};

const Bag = require("../models/Bag");
const Inventory = require("../models/Inventory");

exports.updateBagQuantity = async (bagId, delta) => {
  await Bag.findByIdAndUpdate(
    bagId,
    { $inc: { quantity: +delta } },
    { new: true }
  );
};

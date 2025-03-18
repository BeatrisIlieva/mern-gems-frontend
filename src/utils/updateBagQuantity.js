const Bag = require("../models/Bag");

exports.updateBagQuantity = async (bagId, delta) => {
  await Bag.findByIdAndUpdate(
    bagId,
    { $inc: { quantity: +delta } },
    { new: true }
  );
};

const Bag = require("../models/Bag");

exports.findBagItemByUser = async (user, jewelry, size) => {
  return await Bag.findOne({ user, jewelry, size });
};

exports.findBagItemsByBagId = async (bagId) => {
  const bagItem = await Bag.findById(bagId);

  const jewelryId = bagItem.jewelry;

  const size = bagItem.size;

  const bagQuantity = bagItem.quantity;

  return { bagItem, jewelryId, size, bagQuantity };
};

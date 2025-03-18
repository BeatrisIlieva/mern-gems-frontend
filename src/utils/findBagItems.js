const Bag = require("../models/Bag");

exports.findBagItems = async (bagId) => {
  const bagItem = await Bag.findById(bagId);

  const jewelryId = bagItem.jewelry;

  const size = bagItem.size;

  const bagQuantity = bagItem.quantity;

  return { bagItem, jewelryId, size, bagQuantity };
};

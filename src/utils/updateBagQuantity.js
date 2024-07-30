const Bag = require("../models/Bag");
const Inventory = require("../models/Inventory");

const { DEFAULT_MIN_QUANTITY } = require("../constants/bag");

exports.updateBagQuantity = async (bagItemId, updatedQuantity) => {
  const bagItem = await Bag.findById(bagItemId);

  const sizeId = Number(bagItem.size);

  const alreadyAddedQuantity = bagItem.quantity;

  const jewelryId = Number(bagItem.jewelry);

  const inventoryItem = await Inventory.findOne({
    jewelry: jewelryId,
    size: sizeId,
  });

  const quantity = inventoryItem.quantity || 0;

  const availableQuantity = quantity + alreadyAddedQuantity;

  if (updatedQuantity < DEFAULT_MIN_QUANTITY) {
    throw new Error("Quantity must be greater than zero");
  } else if (updatedQuantity > availableQuantity) {
    throw new Error(
      `Please choose quantity between ${DEFAULT_MIN_QUANTITY} and ${availableQuantity}`
    );
  } else {
    await bagItem.updateOne({ quantity: updatedQuantity });

    let newQuantity;

    if (alreadyAddedQuantity < updatedQuantity) {
      difference = updatedQuantity - alreadyAddedQuantity;
      newQuantity = quantity - difference;
    } else {
      difference = alreadyAddedQuantity - updatedQuantity;
      newQuantity = quantity + difference;
    }

    await Inventory.findOneAndUpdate(
      { jewelry: jewelryId, size: sizeId },
      { quantity: newQuantity },
      { new: true }
    );

    if (Number(updatedQuantity) === 0) {
      await bagItem.deleteOne();
    }
  }
};

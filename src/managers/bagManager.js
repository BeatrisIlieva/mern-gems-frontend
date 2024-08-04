const Bag = require("../models/Bag");
const Inventory = require("../models/Inventory");
const UserLoginDetails = require("../models/UserLoginDetails");

const {
  getAllBagItemsByUserId,
} = require("../aggregations/getAllBagItemsByUserId");

const { checkIfItemIsAvailable } = require("../utils/checkIfItemIsAvailable");

const {
  DEFAULT_ADD_QUANTITY,
  SOLD_OUT_JEWELRY_ERROR_MESSAGE,
} = require("../constants/bag");

exports.create = async ({ userId, jewelryId, sizeId }) => {
  const isAvailable = await checkIfItemIsAvailable(jewelryId, sizeId);

  if (!isAvailable) {
    throw new Error(SOLD_OUT_JEWELRY_ERROR_MESSAGE);
  }

  await Bag.create({
    user: userId,
    jewelry: jewelryId,
    size: sizeId,
    quantity: DEFAULT_ADD_QUANTITY,
  });

  await Inventory.findOneAndUpdate(
    { jewelry: jewelryId, size: sizeId },
    { $inc: { quantity: -DEFAULT_ADD_QUANTITY } },
    { new: true }
  );
};

exports.getOne = async ({ userId, jewelryId, sizeId }) => {
  const bagItem = await Bag.findOne({
    user: userId,
    jewelry: jewelryId,
    size: sizeId,
  });

  return bagItem;
};

exports.getAll = async (userId) => {
  const user = await UserLoginDetails.findById(userId);

  return getAllBagItemsByUserId(user);
};

exports.delete = async (bagId) => {
  const bagItem = await Bag.findById(bagId);

  const jewelryId = bagItem.jewelry;

  const sizeId = bagItem.size;

  const bagQuantity = bagItem.quantity;

  await bagItem.deleteOne();

  await Inventory.findOneAndUpdate(
    { jewelry: jewelryId, size: sizeId },
    { $inc: { quantity: +bagQuantity } },
    { new: true }
  );
};

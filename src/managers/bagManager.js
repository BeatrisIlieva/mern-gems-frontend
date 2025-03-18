const Bag = require("../models/Bag");
const UserLoginDetails = require("../models/UserLoginDetails");

const { findBagItems } = require("../utils/findBagItems");
const { updateBagQuantity } = require("../utils/updateBagQuantity");
const { updateInventoryQuantity } = require("../utils/updateInventoryQuantity");
const { checkIfItemIsAvailable } = require("../utils/checkIfItemIsAvailable");

const { getAllBagItems } = require("../aggregations/getAllBagItems");

const {
  DEFAULT_ADD_QUANTITY,
  DEFAULT_REMOVE_QUANTITY,
  SOLD_OUT_JEWELRY_ERROR_MESSAGE,
} = require("../constants/bag");

exports.create = async ({ userId, jewelryId, size }) => {
  const isAvailable = await checkIfItemIsAvailable(jewelryId, size);

  if (!isAvailable) {
    throw new Error(SOLD_OUT_JEWELRY_ERROR_MESSAGE);
  }

  const bagItem = await Bag.findOne({ user: userId, jewelry: jewelryId, size });

  if (bagItem) {
    await updateBagQuantity(bagItem._id, DEFAULT_ADD_QUANTITY);
  } else {
    await Bag.create({
      user: userId,
      jewelry: jewelryId,
      size,
      quantity: DEFAULT_ADD_QUANTITY,
    });
  }

  await updateInventoryQuantity(jewelryId, size, DEFAULT_REMOVE_QUANTITY);
};

exports.getAll = async (userId) => {
  const user = await UserLoginDetails.findById(userId);

  return await getAllBagItems(user);
};

exports.increase = async (bagId) => {
  const { bagItem, jewelryId, size } = await findBagItems(bagId);

  const isAvailable = await checkIfItemIsAvailable(jewelryId, size);

  if (!isAvailable) {
    throw new Error(SOLD_OUT_JEWELRY_ERROR_MESSAGE);
  }

  await updateBagQuantity(bagItem._id, DEFAULT_ADD_QUANTITY);

  await updateInventoryQuantity(jewelryId, size, DEFAULT_REMOVE_QUANTITY);
};

exports.decrease = async (bagId) => {
  const { bagItem, jewelryId, size, bagQuantity } = await findBagItems(bagId);

  if (bagQuantity === DEFAULT_ADD_QUANTITY) {
    await bagItem.deleteOne();
  } else {
    await updateBagQuantity(bagItem._id, DEFAULT_REMOVE_QUANTITY);
  }

  await updateInventoryQuantity(jewelryId, size, DEFAULT_ADD_QUANTITY);
};

exports.delete = async (bagId) => {
  const { bagItem, jewelryId, size, bagQuantity } = await findBagItems(bagId);

  await bagItem.deleteOne();

  await updateInventoryQuantity(jewelryId, size, bagQuantity);
};

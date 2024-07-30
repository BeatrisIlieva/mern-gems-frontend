const Bag = require("../models/Bag");
const Inventory = require("../models/Inventory");
const UserLoginDetails = require("../models/UserLoginDetails");
const { updateBagQuantity } = require("../utils/updateBagQuantity");

const { DEFAULT_ADD_QUANTITY } = require("../constants/bag");

exports.create = async ({
  userId,
  jewelryId,
  sizeId,
  quantity: DEFAULT_ADD_QUANTITY,
}) => {
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

exports.decrease = async (bagId) => {
  const bagItem = await Bag.findById(bagId);

  const bagQuantity = bagItem.quantity;

  const updatedQuantity = bagQuantity - DEFAULT_ADD_QUANTITY;

  await updateBagQuantity(bagId, updatedQuantity);
};

exports.increase = async (bagId) => {
  const bagItem = await Bag.findById(bagId);

  const bagQuantity = bagItem.quantity;

  const updatedQuantity = bagQuantity + DEFAULT_ADD_QUANTITY;

  await updateBagQuantity(bagId, updatedQuantity);
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

  let jewelries = await Bag.aggregate([
    {
      $match: {
        user: user._id,
      },
    },
    {
      $lookup: {
        as: "jewelries",
        from: "jewelries",
        foreignField: "_id",
        localField: "jewelry",
      },
    },
    {
      $unwind: "$jewelries",
    },
    {
      $lookup: {
        as: "categories",
        from: "categories",
        foreignField: "_id",
        localField: "jewelries.category",
      },
    },
    {
      $unwind: "$categories",
    },
    {
      $lookup: {
        as: "inventories",
        from: "inventories",
        foreignField: "jewelry",
        localField: "jewelry",
      },
    },
    {
      $unwind: "$inventories",
    },
    {
      $lookup: {
        as: "sizes",
        from: "sizes",
        foreignField: "_id",
        localField: "size",
      },
    },
    {
      $unwind: "$sizes",
    },
    {
      $addFields: {
        jewelryId: "$jewelries._id",
      },
    },
    {
      $addFields: {
        sizeId: "$sizes._id",
      },
    },
    {
      $addFields: {
        inventoryQuantity: "$inventories.quantity",
      },
    },
    {
      $addFields: {
        price: "$inventories.price",
      },
    },
    {
      $group: {
        _id: "$_id",
        bagId: {
          $first: "$_id",
        },
        jewelryId: {
          $first: "$jewelryId",
        },
        user: {
          $first: "$user",
        },
        jewelryTitle: {
          $first: "$jewelries.title",
        },
        firstImageUrl: {
          $first: "$jewelries.firstImageUrl",
        },
        size: {
          $first: "$sizes.measurement",
        },
        sizeId: {
          $first: "$sizeId",
        },
        inventoryQuantity: {
          $first: "$inventories.quantity",
        },
        price: {
          $first: "$inventories.price",
        },
        quantity: {
          $first: "$quantity",
        },
        createdAt: {
          $first: "$createdAt",
        },
        categoryTitle: {
          $first: "$categories.title",
        },
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
    {
      $project: {
        bagId: 1,
        user: 1,
        jewelryId: 1,
        jewelryTitle: 1,
        firstImageUrl: 1,
        size: 1,
        sizeId: 1,
        quantity: 1,
        maxQuantity: 1,
        categoryTitle: 1,
        inventoryQuantity: 1,
        price: 1,
      },
    },
  ]);

  return jewelries;
};

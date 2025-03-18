const Bag = require("../models/Bag");

exports.getAllBagItems = async (user) => {
  return await Bag.aggregate([
    {
      $match: {
        user: user._id,
      },
    },
    {
      $lookup: {
        from: "jewelries",
        localField: "jewelry",
        foreignField: "_id",
        as: "jewelries",
      },
    },
    {
      $unwind: "$jewelries",
    },
    {
      $lookup: {
        from: "inventories",
        let: { jewelryId: "$jewelry", size: "$size" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$jewelry", "$$jewelryId"] },
                  { $eq: ["$size", "$$size"] },
                ],
              },
            },
          },
        ],
        as: "inventories",
      },
    },
    {
      $unwind: "$inventories",
    },
    {
      $addFields: {
        jewelryId: "$jewelries._id",
        categoryId: "$jewelries.category",
        colorId: "$jewelries.color",
        inventoryQuantity: "$inventories.quantity",
        inventoryId: "$inventories._id",
        price: "$inventories.price",
      },
    },
    {
      $group: {
        _id: "$_id",
        bagId: { $first: "$_id" },
        inventoryId: { $first: "$inventoryId" },
        jewelryId: { $first: "$jewelryId" },
        categoryId: { $first: "$categoryId" },
        colorId: { $first: "$colorId" },
        size: { $first: "$size" },
        user: { $first: "$user" },
        jewelryTitle: { $first: "$jewelries.title" },
        firstImageUrl: { $first: "$jewelries.firstImageUrl" },
        inventoryQuantity: { $first: "$inventoryQuantity" },
        price: { $first: "$price" },
        quantity: { $first: "$quantity" },
        createdAt: { $first: "$createdAt" },
      },
    },
    {
      $sort: { createdAt: -1 },
    },
    {
      $project: {
        bagId: 1,
        inventoryId: 1,
        user: 1,
        jewelryId: 1,
        categoryId: 1,
        colorId: 1,
        jewelryTitle: 1,
        firstImageUrl: 1,
        quantity: 1,
        maxQuantity: "$inventoryQuantity",
        inventoryQuantity: 1,
        size: 1,
        price: 1,
      },
    },
  ]);
};

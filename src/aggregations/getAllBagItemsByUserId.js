const Bag = require("../models/Bag");

// exports.getAllBagItemsByUserId = async (user) => {
//   return await Bag.aggregate([
//     {
//       $match: {
//         user: user._id,
//       },
//     },
//     {
//       $lookup: {
//         as: "jewelries",
//         from: "jewelries",
//         foreignField: "_id",
//         localField: "jewelry",
//       },
//     },
//     {
//       $unwind: "$jewelries",
//     },
//     {
//       $lookup: {
//         as: "inventories",
//         from: "inventories",
//         foreignField: "jewelry",
//         localField: "jewelry",
//       },
//     },
//     {
//       $unwind: "$inventories",
//     },
//     {
//       $addFields: {
//         jewelryId: "$jewelries._id",
//       },
//     },
//     {
//       $addFields: {
//         inventoryQuantity: "$inventories.quantity",
//       },
//     },
//     {
//       $addFields: {
//         inventoryId: "$inventories._id",
//       },
//     },
//     {
//       $addFields: {
//         price: "$inventories.price",
//       },
//     },
//     {
//       $group: {
//         _id: "$_id",
//         bagId: {
//           $first: "$_id",
//         },
//         inventoryId: {
//           $first: "$inventoryId",
//         },
//         jewelryId: {
//           $first: "$jewelryId",
//         },
//         size: {
//           $first: "$size",
//         },
//         user: {
//           $first: "$user",
//         },
//         jewelryTitle: {
//           $first: "$jewelries.title",
//         },
//         firstImageUrl: {
//           $first: "$jewelries.firstImageUrl",
//         },
//         inventoryQuantity: {
//           $first: "$inventories.quantity",
//         },
//         price: {
//           $first: "$inventories.price",
//         },
//         quantity: {
//           $first: "$quantity",
//         },
//         createdAt: {
//           $first: "$createdAt",
//         },
//         categoryTitle: {
//           $first: "$categories.title",
//         },
//       },
//     },
//     {
//       $sort: {
//         createdAt: -1,
//       },
//     },
//     {
//       $project: {
//         bagId: 1,
//         inventoryId: 1,
//         user: 1,
//         jewelryId: 1,
//         jewelryTitle: 1,
//         firstImageUrl: 1,
//         quantity: 1,
//         maxQuantity: 1,
//         categoryTitle: 1,
//         inventoryQuantity: 1,
//         size: 1,
//         price: 1,
//       },
//     },
//   ]);
// };


exports.getAllBagItemsByUserId = async (user) => {
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
        size: { $first: "$size" },
        user: { $first: "$user" },
        jewelryTitle: { $first: "$jewelries.title" },
        firstImageUrl: { $first: "$jewelries.firstImageUrl" },
        inventoryQuantity: { $first: "$inventoryQuantity" },
        price: { $first: "$price" },
        quantity: { $first: "$quantity" },
        createdAt: { $first: "$createdAt" },
        categoryTitle: { $first: "$categories.title" },
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
        jewelryTitle: 1,
        firstImageUrl: 1,
        quantity: 1,
        maxQuantity: "$inventoryQuantity",
        categoryTitle: 1,
        inventoryQuantity: 1,
        size: 1,
        price: 1,
      },
    },
  ]);
};

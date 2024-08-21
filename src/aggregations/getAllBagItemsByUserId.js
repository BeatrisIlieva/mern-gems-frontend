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
//         as: "jewelrycollections",
//         from: "jewelrycollections",
//         foreignField: "_id",
//         localField: "jewelries.jewelryCollection",
//       },
//     },
//     {
//       $lookup: {
//         as: "categories",
//         from: "categories",
//         foreignField: "_id",
//         localField: "jewelries.category",
//       },
//     },
//     {
//       $unwind: "$categories",
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
//       $lookup: {
//         as: "sizes",
//         from: "sizes",
//         foreignField: "_id",
//         localField: "size",
//       },
//     },
//     {
//       $unwind: "$sizes",
//     },
//     {
//       $addFields: {
//         jewelryId: "$jewelries._id",
//       },
//     },
//     {
//       $addFields: {
//         sizeId: "$sizes._id",
//       },
//     },
//     {
//       $addFields: {
//         inventoryQuantity: "$inventories.quantity",
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
//         jewelryId: {
//           $first: "$jewelryId",
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
//         size: {
//           $first: "$sizes.measurement",
//         },
//         sizeId: {
//           $first: "$sizeId",
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
//         collectionTitle: {
//           $first: "$jewelrycollections.title",
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
//         user: 1,
//         jewelryId: 1,
//         jewelryTitle: 1,
//         firstImageUrl: 1,
//         size: 1,
//         sizeId: 1,
//         quantity: 1,
//         maxQuantity: 1,
//         categoryTitle: 1,
//         collectionTitle: 1,
//         inventoryQuantity: 1,
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
      $addFields: {
        jewelryId: "$jewelries._id",
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
      $addFields: {
        price: "$inventories.size",
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
        inventoryQuantity: {
          $first: "$inventories.quantity",
        },
        inventorySize: {
          $first: "$inventories.size",
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
        quantity: 1,
        maxQuantity: 1,
        categoryTitle: 1,
        inventoryQuantity: 1,
        inventorySize: 1,
        price: 1,
      },
    },
  ]);
};
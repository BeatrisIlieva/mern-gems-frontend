const Jewelry = require("../models/Jewelry");

exports.getOneJewelryById = async (jewelryId) => {
  return await Jewelry.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "categories",
      },
    },
    {
      $lookup: {
        from: "inventories",
        localField: "_id",
        foreignField: "jewelry",
        as: "inventories",
      },
    },
    {
      $lookup: {
        from: "sizes",
        localField: "inventories.size",
        foreignField: "_id",
        as: "sizes",
      },
    },
    {
      $addFields: {
        price: { $arrayElemAt: ["$inventories.price", 0] },
      },
    },
    {
      $addFields: {
        sizes: {
          $map: {
            input: "$sizes",
            as: "size",
            in: {
              _id: "$$size._id",
              measurement: "$$size.measurement",
              title: "$$size.title",
              quantity: {
                $let: {
                  vars: {
                    matchingInventory: {
                      $arrayElemAt: [
                        {
                          $filter: {
                            input: "$inventories",
                            as: "inventory",
                            cond: { $eq: ["$$inventory.size", "$$size._id"] },
                          },
                        },
                        0,
                      ],
                    },
                  },
                  in: "$$matchingInventory.quantity",
                },
              },
            },
          },
        },
      },
    },
    {
      $addFields: {
        sizes: {
          $sortArray: { input: "$sizes", sortBy: { _id: 1 } },
        },
      },
    },
    {
      $addFields: {
        isSoldOut: {
          $reduce: {
            input: "$inventories",
            initialValue: true,
            in: {
              $and: ["$$value", { $eq: ["$$this.quantity", 0] }],
            },
          },
        },
      },
    },
    {
      $project: {
        title: 1,
        price: 1,
        firstImageUrl: 1,
        secondImageUrl: 1,
        description: 1,
        sizes: 1,
        category: 1,
        isSoldOut: 1,
      },
    },
    {
      $match: { _id: jewelryId },
    },
  ]);
};

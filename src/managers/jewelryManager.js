const Jewelry = require("../models/Jewelry");

exports.getOne = async (jewelryId) => {
  const result = await Jewelry.aggregate([
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
    // {
    //   $addFields: {
    //     sizes: {
    //       $map: {
    //         input: "$sizes",
    //         as: "size",
    //         in: {
    //           _id: "$$size._id",
    //           measurement: "$$size.measurement",
    //           title: "$$size.title",
    //           available: {
    //             $gt: [
    //               {
    //                 $size: {
    //                   $filter: {
    //                     input: "$inventories",
    //                     as: "inventory",
    //                     cond: {
    //                       $and: [
    //                         { $eq: ["$$inventory.size", "$$size._id"] },
    //                         { $gt: ["$$inventory.quantity", 0] },
    //                       ],
    //                     },
    //                   },
    //                 },
    //               },
    //               0,
    //             ],
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
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

  return result;
};

exports.getAll = async ({ collectionId, categoryId, skip, limit }) => {
  const baseQuery = [
    {
      $lookup: {
        as: "inventories",
        from: "inventories",
        foreignField: "jewelry",
        localField: "_id",
      },
    },
    {
      $lookup: {
        as: "categories",
        from: "categories",
        foreignField: "_id",
        localField: "category",
      },
    },
    {
      $match: {
        jewelryCollection: collectionId,
      },
    },
    ...(categoryId ? [{ $match: { category: categoryId } }] : []),
    {
      $group: {
        _id: "$_id",
        price: { $first: { $arrayElemAt: ["$inventories.price", 0] } },
        firstImageUrl: { $addToSet: "$firstImageUrl" },
        jewelryIds: { $push: "$_id" },
        categoryTitle: { $addToSet: "$categories.title" },
        categoryId: { $addToSet: "$categories._id" },
        jewelryTitle: { $addToSet: "$title" },
        inventories: { $push: "$inventories" },
      },
    },
    {
      $addFields: {
        isSoldOut: {
          $reduce: {
            input: "$inventories",
            initialValue: true,
            in: {
              $and: [
                "$$value",
                {
                  $eq: [
                    {
                      $size: {
                        $filter: {
                          input: "$$this",
                          as: "inv",
                          cond: { $gt: ["$$inv.quantity", 0] },
                        },
                      },
                    },
                    0,
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $project: {
        firstImageUrl: 1,
        jewelryIds: 1,
        categoryTitle: 1,
        categoryId: 1,
        jewelryTitle: 1,
        isSoldOut: 1,
      },
    },
    { $sort: { isSoldOut: 1, _id: 1 } },
    { $skip: skip },
    { $limit: limit },
  ];

  const countQuery = [
    { $match: { jewelryCollection: collectionId } },
    ...(categoryId ? [{ $match: { category: categoryId } }] : []),
    { $count: "totalCount" },
  ];

  const result = await Jewelry.aggregate([
    {
      $facet: {
        data: baseQuery,
        count: countQuery,
      },
    },
  ]);

  return {
    jewelries: result[0].data,
    totalCount: result[0].count[0] ? result[0].count[0].totalCount : 0,
  };
};

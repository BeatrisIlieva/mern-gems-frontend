const Jewelry = require("../../models/Jewelry");

exports.findAll = async (collectionId) => {
  const query = [
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
    {
      $group: {
        _id: "$_id",
        price: {
          $first: {
            $arrayElemAt: ["$inventories.price", 0],
          },
        },
        firstImageUrl: {
          $addToSet: "$firstImageUrl",
        },
        jewelryIds: {
          $push: "$_id",
        },
        jewelryTitle: {
          $addToSet: "$title",
        },
        categoryTitle: {
          $addToSet: "$categories.title",
        },
        categoryId: {
          $addToSet: "$categories._id",
        },
        inventories: {
          $push: "$inventories",
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
              $and: [
                "$$value",
                {
                  $eq: [
                    {
                      $size: {
                        $filter: {
                          input: "$$this",
                          as: "inv",
                          cond: {
                            $gt: ["$$inv.quantity", 0],
                          },
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
        price: 1,
        firstImageUrl: 1,
        jewelryIds: 1,
        categoryTitle: 1,
        jewelryTitle: 1,
        categoryId: 1,
        isSoldOut: 1,
      },
    },
    { $sort: { isSoldOut: 1, _id: 1 } },
  ];

  const countQuery = [
    { $match: { jewelryCollection: collectionId } },
    { $count: "totalCount" },
  ];

  const result = await Jewelry.aggregate([
    {
      $facet: {
        data: query,
        count: countQuery,
      },
    },
  ]);

  return {
    data: result[0].data,
    totalCount: result[0].count[0] ? result[0].count[0].totalCount : 0,
  };
};

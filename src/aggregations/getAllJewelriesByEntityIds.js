const Jewelry = require("../models/Jewelry");

exports.getAllJewelriesByEntityIds = async ({
  collectionId,
  categoryId,
  skip,
  limit,
}) => {
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
      $lookup: {
        as: "jewelrycollections",
        from: "jewelrycollections",
        foreignField: "_id",
        localField: "jewelryCollection",
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
        collectionTitle: { $addToSet: "$jewelrycollections.title" },
        collectionId: { $addToSet: "$jewelrycollections._id" },
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
        collectionTitle: 1,
        collectionId: 1,
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

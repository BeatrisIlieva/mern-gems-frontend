const Jewelry = require("../models/Jewelry");

// exports.getAll = async (search) => {
//   const searchTerms = search
//     .split(" ")
//     .map((term) => term.trim())
//     .filter((term) => term.length > 0);
//   const regexTerms = searchTerms.map((term) => new RegExp(term, "i"));

//   const searchResult = await Jewelry.aggregate([
//     {
//       $lookup: {
//         as: "inventories",
//         from: "inventories",
//         foreignField: "jewelry",
//         localField: "_id",
//       },
//     },
//     {
//       $lookup: {
//         as: "categories",
//         from: "categories",
//         foreignField: "_id",
//         localField: "category",
//       },
//     },
//     {
//       $lookup: {
//         as: "collections",
//         from: "collections",
//         foreignField: "_id",
//         localField: "collection",
//       },
//     },
//     {
//       $lookup: {
//         as: "jewelrystones",
//         from: "jewelrystones",
//         foreignField: "jewelry",
//         localField: "_id",
//       },
//     },
//     {
//       $lookup: {
//         as: "stonetypes",
//         from: "stonetypes",
//         foreignField: "_id",
//         localField: "jewelrystones.stoneType",
//       },
//     },
//     {
//       $lookup: {
//         as: "stonecolors",
//         from: "stonecolors",
//         foreignField: "_id",
//         localField: "jewelrystones.stoneColor",
//       },
//     },

//     {
//       $match: {
//         $and: [
//           ...regexTerms.map((regex) => ({
//             $or: [
//               { title: { $regex: regex } },
//               { "categories.title": { $regex: regex } },
//               { "collections.title": { $regex: regex } },
//               { "stonetypes.title": { $regex: regex } },
//               { "stonecolors.title": { $regex: regex } },
//             ],
//           })),
//         ],
//       },
//     },
//     {
//       $group: {
//         _id: "$_id",
//         firstImageUrl: {
//           $addToSet: "$firstImageUrl",
//         },
//         jewelryIds: {
//           $push: "$_id",
//         },
//         categoryTitle: {
//           $addToSet: "$categories.title",
//         },
//         collectionTitle: {
//           $addToSet: "$collections.title",
//         },
//         jewelryTitle: {
//           $addToSet: "$title",
//         },
//       },
//     },
//     {
//       $project: {
//         firstImageUrl: 1,
//         jewelryIds: 1,
//         categoryTitle: 1,
//         collectionTitle: 1,
//         jewelryTitle: 1,
//       },
//     },
//     {
//       $sort: {
//         _id: 1,
//       },
//     },
//   ]);

//   return searchResult;
// };

exports.getAll = async (search) => {
  const searchTerms = search
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => term.length > 0);
  const regexTerms = searchTerms.map((term) => new RegExp(term, "i"));

  // Define the base aggregation pipeline
  const pipeline = [
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
        as: "collections",
        from: "collections",
        foreignField: "_id",
        localField: "collection",
      },
    },
    {
      $lookup: {
        as: "jewelrystones",
        from: "jewelrystones",
        foreignField: "jewelry",
        localField: "_id",
      },
    },
    {
      $lookup: {
        as: "stonetypes",
        from: "stonetypes",
        foreignField: "_id",
        localField: "jewelrystones.stoneType",
      },
    },
    {
      $lookup: {
        as: "stonecolors",
        from: "stonecolors",
        foreignField: "_id",
        localField: "jewelrystones.stoneColor",
      },
    },
    // Conditionally add the $match stage if search terms are present
    ...(searchTerms.length > 0
      ? [
          {
            $match: {
              $and: regexTerms.map((regex) => ({
                $or: [
                  { title: { $regex: regex } },
                  { "categories.title": { $regex: regex } },
                  { "collections.title": { $regex: regex } },
                  { "stonetypes.title": { $regex: regex } },
                  { "stonecolors.title": { $regex: regex } },
                ],
              })),
            },
          },
        ]
      : []), // No $match stage if search is empty
    {
      $group: {
        _id: "$_id",
        firstImageUrl: { $addToSet: "$firstImageUrl" },
        jewelryIds: { $push: "$_id" },
        categoryTitle: { $addToSet: "$categories.title" },
        collectionTitle: { $addToSet: "$collections.title" },
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
        collectionTitle: 1,
        jewelryTitle: 1,
        isSoldOut: 1,
      },
    },
    {
      $sort: { _id: 1 },
    },
  ];

  const searchResult = await Jewelry.aggregate(pipeline);

  return searchResult;
};

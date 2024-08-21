const {
  getAllJewelriesByEntityIds,
} = require("../aggregations/getAllJewelriesByEntityIds");

const { getOneJewelryById } = require("../aggregations/getOneJewelryById");

const Jewelry = require("../models/Jewelry");

exports.getOne = async (categoryId, colorId) => {

  const result = await Jewelry.aggregate([
    {
      $match: {
        category: categoryId,
      },
    },
    {
      $match: {
        color: colorId,
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
        as: "colors",
        from: "colors",
        foreignField: "_id",
        localField: "color",
      },
    },
    {
      $lookup: {
        as: "inventories",
        from: "inventories",
        foreignField: "jewelry",
        localField: "_id",
      },
    },
    {
      $project: {
        _id: 1,
        category: 1,
        color: 1,
        description: 1,
        firstImageUrl: 1,
        "categories.title": 1,
        "colors.title": 1,
        "inventories.price": 1,
        "inventories.quantity": 1,
        "inventories.size": 1,
        secondImageUrl: 1,
        title: 1,
      },
    },
  ]);

  return result;
};

// exports.getAll = async (categoryId) => {

//   const result = await Jewelry.aggregate([
//     {
//       $lookup: {
//         as: "miniImage",
//         from: "miniimages",
//         foreignField: "_id",
//         localField: "miniImage",
//       },
//     },
//     {
//       $match: {
//         category: categoryId,
//       },
//     },
//     {
//       $lookup: {
//         as: "inventories",
//         from: "inventories",
//         foreignField: "jewelry",
//         localField: "_id",
//       },
//     },
//     {
//       $project: {
//         _id: 1,
//         category: 1,
//         description: 1,
//         firstImageUrl: 1,
//         "inventories.price": 1,
//         "inventories.quantity": 1,
//         "inventories.size": 1,
//         "miniImage.imageUrl": 1,
//         "miniImage.title": 1,
//         secondImageUrl: 1,
//         title: 1,
//       },
//     },
//   ]);

//   return result;
// };



// exports.getOne = async (jewelryId) => {
//   return await getOneJewelryById(jewelryId);
// };

// exports.getAll = async ({ collectionId, categoryId, skip, limit }) => {
//   return await getAllJewelriesByEntityIds({
//     collectionId,
//     categoryId,
//     skip,
//     limit,
//   });
// };

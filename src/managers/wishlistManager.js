const Wishlist = require("../models/Wishlist");

const {
  JEWELRY_IS_ALREADY_ADDED_ERROR_MESSAGE,
  JEWELRY_IS_NOT_ADDED_YET_ERROR_MESSAGE,
} = require("../constants/wishlist");

exports.create = async ({ categoryId, colorId, userId }) => {
  const wishlistItem = await Wishlist.findOne({
    user: userId,
    category: categoryId,
    color: colorId,
  });

  if (wishlistItem) {
    throw new Error(JEWELRY_IS_ALREADY_ADDED_ERROR_MESSAGE);
  } else {
    await Wishlist.create({
      user: userId,
      category: categoryId,
      color: colorId,
    });
  }
};

exports.getAll = async (userId) => {
  const wishlistItems = await Wishlist.find({ user: userId })
    .populate("category")
    .populate("color")
    .sort({ createdAt: 1 });

  return wishlistItems;
};

exports.delete = async ({ categoryId, colorId, userId }) => {
  const wishlistItem = await Wishlist.findOne({
    user: userId,
    category: categoryId,
    color: colorId,
  });

  if (!wishlistItem) {
    throw new Error(JEWELRY_IS_NOT_ADDED_YET_ERROR_MESSAGE);
  } else {
    await wishlistItem.deleteOne();
  }
};

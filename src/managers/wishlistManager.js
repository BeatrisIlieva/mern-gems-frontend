const Wishlist = require("../models/Wishlist");

const {
  JEWELRY_IS_ALREADY_ADDED_ERROR_MESSAGE,
  JEWELRY_IS_NOT_ADDED_YET_ERROR_MESSAGE,
} = require("../constants/wishlist");

exports.create = async ({ userId, jewelryId }) => {
  const wishlistItem = await Wishlist.findOne({
    user: userId,
    jewelry: jewelryId,
  });

  if (wishlistItem) {
    throw new Error(JEWELRY_IS_ALREADY_ADDED_ERROR_MESSAGE);
  } else {
    await Wishlist.create({
      user: userId,
      jewelry: jewelryId,
    });
  }
};

exports.getAll = async (userId) => {
  return await Wishlist.find({
    user: userId,
  });
};

exports.delete = async ({ userId, jewelryId }) => {
  const wishlistItem = await Wishlist.findOne({
    user: userId,
    jewelry: jewelryId,
  });

  if (!wishlistItem) {
    throw new Error(JEWELRY_IS_NOT_ADDED_YET_ERROR_MESSAGE);
  } else {
    await wishlistItem.deleteOne();
  }
};

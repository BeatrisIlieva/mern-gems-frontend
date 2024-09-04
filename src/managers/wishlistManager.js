const Wishlist = require("../models/Wishlist");

exports.create = async ({ userId, jewelryId }) => {
  const wishlistItem = await Wishlist.findOne({
    user: userId,
    jewelry: jewelryId,
  });

  if (wishlistItem) {
    throw new Error();
  } else {
    await Wishlist.create({
      user: userId,
      jewelry: jewelryId,
    });
  }
};

exports.delete = async ({ userId, jewelryId }) => {
  const wishlistItem = await Wishlist.findOne({
    user: userId,
    jewelry: jewelryId,
  });

  if (!wishlistItem) {
    throw new Error("Jewelry is not added yet.");
  } else {
    await wishlistItem.deleteOne();
  }
};

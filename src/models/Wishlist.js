const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "UserLoginDetails",
    required: true,
  },
  category: {
    type: Number,
    ref: "Category",
    required: true,
  },
  color: {
    type: Number,
    ref: "Color",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = wishlist;

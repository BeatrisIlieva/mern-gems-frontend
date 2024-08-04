const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "UserLoginDetails",
    required: true,
  },

  jewelry: {
    type: Number,
    ref: "Jewelry",
    required: true,
  },

  size: {
    type: Number,
    ref: "Size",
    required: true,
  },

  quantity: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const bag = mongoose.model("Bag", bagSchema);

module.exports = bag;

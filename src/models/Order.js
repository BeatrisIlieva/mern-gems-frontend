const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "UserLoginDetails",
    required: true,
  },
  jewelries: {
    type: Object,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  statusEnglish: {
    type: String,
    required: true,
  },
  statusChinese: {
    type: String,
    required: true,
  },
  statusBulgarian: {
    type: String,
    required: true,
  },
});

const order = mongoose.model("Order", orderSchema);

module.exports = order;

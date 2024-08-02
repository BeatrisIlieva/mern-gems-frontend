const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "UserLoginDetails",
    required: true,
  },
  jewelries: {
    type: Object,
  },
  totalPrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
  },
});

const order = mongoose.model("Order", orderSchema);

module.exports = order;

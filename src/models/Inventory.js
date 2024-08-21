const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  jewelry: {
    type: Number,
    ref: "Jewelry",
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, 'Quantity cannot be less than 0'],
  },
  price: {
    type: Number,
    required: true,
  },
});

const inventory = mongoose.model("Inventory", inventorySchema);

module.exports = inventory;

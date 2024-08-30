const Order = require("../models/Order");

const bagManager = require("../managers/bagManager");

exports.create = async (userId) => {
  const orderJewelries = await bagManager.getAll(userId);

  const totalPrice = orderJewelries.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const order = await Order.create({
    user: userId,
    status: "Pending",
  });

  order.jewelries = orderJewelries;
  order.totalPrice = totalPrice;

  order.save();

  return order;
};

exports.getAll = async (userId) => {
  const result = await Order.find({ user: userId }).sort({ createdAt: -1 });

  return result;
};

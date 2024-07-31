const Order = require("../models/Order");

exports.create = async (userId) => {
  const order = await Order.create({
    user: userId,
    status: "Pending",
  });

  return order;
};

exports.getOne = async (userId) => {
  const result = await Order.findOne({ user: userId }).sort({ createdAt: -1 });
  return result;
};

exports.getAll = async (userId) => {
  const result = await Order.find({ user: userId }).sort({ createdAt: -1 });

  return result;
};

const Order = require("../models/Order");
const bagManager = require("./bagManager");

exports.create = async (userId) => {
  const orderData = await bagManager.getAll(userId);

  const order = await Order.create({
    user: userId,
    status: "Pending",
  });

  order.jewelries = orderData[0].documents;

  order.subTotal = orderData[0].totalTotalPrice;

  await order.save();

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

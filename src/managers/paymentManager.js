const Bag = require("../models/Bag");

const orderManager = require("../managers/orderManager");

exports.create = async (userId) => {
  await orderManager.create(userId);

  await Bag.deleteMany({ user: userId });
};

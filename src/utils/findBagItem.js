const Bag = require("../models/Bag");

exports.findBagItem = async (user, jewelry, size) => {
  return await Bag.findOne({ user, jewelry, size });
};

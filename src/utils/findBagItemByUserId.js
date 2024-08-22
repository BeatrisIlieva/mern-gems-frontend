const Bag = require("../models/Bag");

exports.findBagItemByUserId = async (user, jewelry, size,) => {
  return await Bag.findOne({ user, jewelry, size });
};

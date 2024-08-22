const Bag = require("../models/Bag");

exports.findBagItemByUserId = async (userId) => {
  return await Bag.findOne({ user: userId, jewelry: jewelryId, size });
};

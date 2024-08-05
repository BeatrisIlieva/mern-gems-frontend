const UserCardDetails = require("../models/UserCardDetails");
const orderManager = require("../managers/orderManager");

exports.create = async (data) => {
  await UserCardDetails.create(data);
};

exports.update = async (userId, data) => {
  await UserCardDetails.findByIdAndUpdate(userId, data, {
    runValidators: true,
    new: true,
  });

  const result = await orderManager.create(userId);

  return result;
};

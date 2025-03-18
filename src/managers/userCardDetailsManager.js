const UserCardDetails = require("../models/UserCardDetails");

exports.create = async (data) => {
  await UserCardDetails.create(data);
};

exports.getOne = async (userId) => {
  const result = await UserCardDetails.findById(userId);

  return result;
};

exports.update = async (userId, data) => {
  await UserCardDetails.findByIdAndUpdate(userId, data, {
    runValidators: true,
    new: true,
  });
};

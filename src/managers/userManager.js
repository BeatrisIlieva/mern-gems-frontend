
const UserShippingDetails = require("../models/UserShippingDetails");











exports.createUserShippingDetails = async (data) => {
  await UserShippingDetails.create(data);
};

exports.getUserShippingDetails = async (userId) => {
  const result = await UserShippingDetails.findById(userId);

  return result;
};

exports.updateShippingDetails = async (userId, data) => {
  const result = await UserShippingDetails.findByIdAndUpdate(userId, data, {
    runValidators: true,
    new: true,
  });

  return result;
};

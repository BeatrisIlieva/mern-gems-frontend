exports.create = async (data) => {
  await UserShippingDetails.create(data);
};

exports.getOne = async (userId) => {
  const result = await UserShippingDetails.findById(userId);

  return result;
};

exports.update = async (userId, data) => {
  const result = await UserShippingDetails.findByIdAndUpdate(userId, data, {
    runValidators: true,
    new: true,
  });

  return result;
};

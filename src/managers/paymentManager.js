const orderManager = require("../managers/orderManager");
const userCardDetailsManager = require("../managers/userCardDetailsManager");

exports.create = async (userId, data) => {
  await userCardDetailsManager.update(userId, data);

  const result = await orderManager.create(userId);

  return result;
};

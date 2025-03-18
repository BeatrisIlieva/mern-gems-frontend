const jwt = require("../lib/jwt");

exports.generateToken = async (user) => {
  const payload = {
    _id: user._id,
  };

  const token = await jwt.sign(
    payload,
    "4bbac8ce0aca40d84618677c0fcae39ddc9880ba2272a7995783bce1287cf678"
  );

  const result = {
    _id: user._id,
    accessToken: token,
  };

  return result;
};

const Bag = require("../models/Bag");
const UserLoginDetails = require("../models/UserLoginDetails");
const UserShippingDetails = require("../models/UserShippingDetails");

const orderManager = require("../managers/orderManager");

const { sendOrderConfirmationEmail } = require("../mailer/mailer");

exports.create = async (userId) => {
  await orderManager.create(userId);

  await Bag.deleteMany({ user: userId });

  const userLoginDetails = await UserLoginDetails.findById(userId);

  const email = userLoginDetails.email;

  const userShippingDetails = await UserShippingDetails.findById(userId);

  const firstName = userShippingDetails.firstName;

  sendOrderConfirmationEmail(email, firstName);
};

const UserLoginDetails = require("../models/UserLoginDetails");
const UserShippingDetails = require("../models/UserShippingDetails");

const { sendOrderConfirmationEmail } = require("../mailer/mailer");

exports.create = async (userId) => {
  const userLoginDetails = await UserLoginDetails.findById(userId);

  const email = userLoginDetails.email;

  const userShippingDetails = await UserShippingDetails.findById(userId);

  const firstName = userShippingDetails.firstName;

  sendOrderConfirmationEmail(email, firstName);
};

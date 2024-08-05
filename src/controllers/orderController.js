const router = require("express").Router();

const orderManager = require("../managers/orderManager");
const Bag = require("../models/Bag");
// const { sendOrderConfirmationEmail } = require("../../mailer");
const UserLoginDetails = require("../models/UserLoginDetails");
const UserShippingDetails = require("../models/UserShippingDetails");

router.get("/confirm/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    await Bag.deleteMany({ user: userId });

    const userLoginDetails = await UserLoginDetails.findById(userId);

    const email = UserLoginDetails.email;

    const userShippingDetails = await UserShippingDetails.findById(
      userId
    );

    const firstName = UserShippingDetails.firstName;

    // sendOrderConfirmationEmail(email, firstName);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await orderManager.getAll(userId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);

    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;

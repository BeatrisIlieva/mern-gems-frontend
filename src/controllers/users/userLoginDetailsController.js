const router = require("express").Router();
// const userLoginInformationManager = require("../managers/userLoginInformationManager");
// const userPersonalInformationManager = require("../managers/userPersonalInformationManager");
// const userAddressInformationManager = require("../managers/userAddressInformationManager");
// const userLoginInformation = require("../models/UserLoginInformation");
// const { transferBag } = require("../utils/transferBag");
// const { transferWishlist } = require("../utils/transferWishlist");
// const { sendRegistrationEmail } = require("../../mailer");
// const Bag = require("../models/Bag");
// const Wishlist = require("../models/Wishlist");
const userLoginDetailsManager = require("../../managers/users/userLoginDetailsManager");
const userShippingDetailsManager = require("../../managers/users/userShippingDetailsManager");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, userId } = await userLoginDetailsManager.register({
      email,
      password,
    });

    await userShippingDetailsManager.create({ _id: userId });

    // sendRegistrationEmail(email);

    res.status(201).json({ token, userId });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

router.post("/login", async (req, res) => {

  const { email, password } = { ...req.body };

  try {

    const result = await userLoginDetailsManager.login({ email, password });

    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(401).json({
      message: err.message,
    });
  }
});

// router.get("/:userId", async (req, res) => {
//   const userId = req.params.userId;

//   try {
//     const result = await userLoginInformationManager.find(userId);

//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(401).json({
//       message: err.message,
//     });
//   }
// });

// router.put("/update-email/:userId", async (req, res) => {
//   const userId = req.params.userId;

//   const data = { ...req.body };

//   try {
//     const result = await userLoginInformationManager.updateEmail(userId, data);

//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err.message);
//     res.status(401).json({
//       message: err.message,
//     });
//   }
// });

// router.put("/update-password/:userId", async (req, res) => {
//   const userId = req.params.userId;

//   const data = { ...req.body };

//   try {
//     const result = await userLoginInformationManager.updatePassword(
//       userId,
//       data
//     );

//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err.message);
//     res.status(401).json({
//       message: err.message,
//     });
//   }
// });

// router.get("/logout", (req, res) => {
//   res.end();
// });

// router.delete("/:userId", async (req, res) => {
//   const userId = req.params.userId;

//   try {
//     const result = await userLoginInformationManager.delete(userId);

//     await userPersonalInformationManager.delete(userId);

//     await userAddressInformationManager.delete(userId);

//     await Bag.deleteMany({ user: userId });
//     await Wishlist.deleteMany({ user: userId });

//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err.message);
//     res.status(401).json({
//       message: err.message,
//     });
//   }
// });

module.exports = router;

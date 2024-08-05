const router = require("express").Router();

const userLoginDetailsController = require("./controllers/userLoginDetailsController");
const userShippingDetailsController = require("./controllers/userShippingDetailsController");
const userCardDetailsController = require("./controllers/userCardDetailsController");
const jewelryController = require("./controllers/jewelryController");
const bagController = require("./controllers/bagController");
const orderController = require("./controllers/orderController");

router.use("/users-login-details", userLoginDetailsController);
router.use("/users-shipping-details", userShippingDetailsController);
router.use("/users-card-details", userCardDetailsController);
router.use("/jewelries", jewelryController);
router.use("/bags", bagController);
router.use("/orders", orderController);

module.exports = router;

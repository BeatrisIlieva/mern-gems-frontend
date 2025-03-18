const router = require("express").Router();

const userLoginDetailsController = require("./controllers/userLoginDetailsController");
const userShippingDetailsController = require("./controllers/userShippingDetailsController");
const userCardDetailsController = require("./controllers/userCardDetailsController");
const jewelryController = require("./controllers/jewelryController");
const bagController = require("./controllers/bagController");
const paymentController = require("./controllers/paymentController");
const orderController = require("./controllers/orderController");
const wishlistController = require("./controllers/wishlistController");

router.use("/users-login-details", userLoginDetailsController);
router.use("/users-shipping-details", userShippingDetailsController);
router.use("/users-card-details", userCardDetailsController);
router.use("/jewelries", jewelryController);
router.use("/bags", bagController);
router.use("/payments", paymentController);
router.use("/orders", orderController);
router.use("/wishlists", wishlistController);

module.exports = router;

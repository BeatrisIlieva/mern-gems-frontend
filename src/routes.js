const router = require("express").Router();

const userController = require("./controllers/userController");
const jewelryController = require("./controllers/jewelryController");
const bagController = require("./controllers/bagController");
const paymentController = require("./controllers/paymentController");
const orderController = require("./controllers/orderController");

router.use("/users", userController);
router.use("/jewelries", jewelryController);
router.use("/bags", bagController);
router.use("/payments", paymentController);
router.use("/orders", orderController);

module.exports = router;

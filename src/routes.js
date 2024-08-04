const router = require("express").Router();

const userController = require("./controllers/userController");
const jewelryController = require("./controllers/jewelryController");
const bagController = require("./controllers/bagController");
const userCardDetailsController = require("./controllers/userCardDetailsController");
const orderController = require("./controllers/orderController");

router.use("/users", userController);
router.use("/jewelries", jewelryController);
router.use("/bags", bagController);
router.use("/users-card-details", userCardDetailsController);
router.use("/orders", orderController);

module.exports = router;

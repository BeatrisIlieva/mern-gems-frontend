const router = require("express").Router();

const userController = require("./controllers/userController");
const jewelryController = require("./controllers/jewelryController");
const bagController = require("./controllers/bagController");

router.use("/users", userController);
router.use("/jewelries", jewelryController);
router.use("/bag", bagController);

module.exports = router;

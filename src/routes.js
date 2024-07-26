const router = require("express").Router();

const userController = require("./controllers/userController");
const jewelryController = require("./controllers/jewelryController");
const bagController = require("./controllers/bagController");
const searchController = require("./controllers/searchController");

router.use("/users", userController);
router.use("/jewelries", jewelryController);
router.use("/bag", bagController);
router.use("/search", searchController);

module.exports = router;

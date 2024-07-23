const router = require("express").Router();

// const userLoginInformationController = require("./controllers/userLoginInformationController");
// const userPersonalInformationController = require("./controllers/userPersonalInformationController");
// const userAddressInformationController = require("./controllers/userAddressInformationController");
const userLoginDetailsController = require("./controllers/users/userLoginDetailsController");
const jewelryController = require("./controllers/jewelries/jewelryController");
const categoryController = require("./controllers/jewelries/categoryController");
const collectionController = require("./controllers/jewelries/collectionController");
// const stoneController = require("./controllers/stoneController");
// const searchController = require("./controllers/searchController");
// const bagController = require("./controllers/bagController");
// const checkoutController = require("./controllers/checkoutController");
// const paymentController = require("./controllers/paymentController");
// const orderConfirmationController = require("./controllers/orderConfirmationController");
// const orderHistoryController = require("./controllers/orderHistoryController");
// const jewelrySuggestionController = require("./controllers/jewelrySuggestionController");
// const wishlistController = require("./controllers/wishlistController");

// router.use("/user-login-information", userLoginInformationController);
// router.use("/user-personal-information", userPersonalInformationController);
// router.use("/user-address-information", userAddressInformationController);
router.use("/users", userLoginDetailsController);
router.use("/jewelries", jewelryController);
router.use("/categories", categoryController);
router.use("/collections", collectionController);
// router.use("/stone", stoneController);
// router.use("/search", searchController);
// router.use("/bag", bagController);
// router.use("/checkout", checkoutController);
// router.use("/payment", paymentController);
// router.use("/order-confirmation", orderConfirmationController);
// router.use("/order-history", orderHistoryController);
// router.use("/suggestion", jewelrySuggestionController);
// router.use("/wishlist", wishlistController);

module.exports = router;

const Bag = require("../models/Bag");
const Inventory = require("../models/Inventory");

exports.updateBagQuantity = (user, jewelry, size, bagDelta, inventoryDelta) => {

    const bagItem = await Bag.findOne({ user: userId, jewelry: jewelryId, size });

    
};

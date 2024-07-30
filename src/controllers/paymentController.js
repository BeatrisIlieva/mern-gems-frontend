const router = require("express").Router();

const paymentManager = require("../managers/paymentManager");
const orderManager = require("../managers/orderManager");

router.post("/:userId", async (req, res) => {
  const userId = req.params.userId;

  const { longCardNumber, cardHolder, cvvCode, expiryDate } = { ...req.body };

  try {
    await paymentManager.verifyCardDetails(
      longCardNumber,
      cardHolder,
      cvvCode,
      expiryDate
    );

    const order = await orderManager.create(userId);

    res.status(201).json({ order });
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;

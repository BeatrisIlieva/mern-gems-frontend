const router = require("express").Router();

const paymentManager = require("../managers/paymentManager");
const userCardDetailsManager = require("../managers/userCardDetailsManager");

router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;

  // const data = { ...req.body };

  const { selectedLanguage } = req.body;

  // const cardData = { cardHolder, longCardNumber, cVVCode, expiryDate };

  try {
    // await userCardDetailsManager.update(userId, cardData);
    // await userCardDetailsManager.update(userId, data);

    await paymentManager.create(userId, selectedLanguage);

    res.status(204).json();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;

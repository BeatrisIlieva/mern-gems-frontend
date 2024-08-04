const router = require("express").Router();

const paymentManager = require("../managers/paymentManager");

router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;

  const data = { ...req.body };

  try {
    const result = await paymentManager.create(userId, data);

    res.status(201).json({ result });
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;
